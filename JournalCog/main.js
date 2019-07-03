/*
 * Pump API and Application 1.0.0
 * Copyright(c) 2016 PumpCo Inc.
 * licensing@pumpco.co.uk
 * http://www.pumpco.co.uk/license
 */

/**
 * Main applicaton logic for Journal.
 * 
 * @author: Jason Carney
 */
the.App.onReady(function () {

    /****************************************************************************************************************
     * // Framework core methods
     ****************************************************************************************************************/

    /*
     * Framework method
     * ----------------
     * 
     * Fired when the App has created the basic model structure for you to extend my.model
     */
    my.$on( "postModelCreate", function(){

      my.model.pulseResponse = phil.observe([]);

      // False as the card resources have not yet been setup
      my._cardsReady = false;

      // Set up a cards collection for all journal entry cards to live
      my.model.cards = new phil.collections.List( [], {} );

      // Invoke large-rich-card template and style loader
      my.loadCardResources();

      my.model.aosactions = new AOSActions();

      /**
       * Delete Note Appflow
       */
      my.model.cards.listen( "system.form.journal.action.deleteNote", function(calendarListItem) {
        // Create the backpack
        var backpack = Forms.defaultBody.call( my, "system.form.journal.action.deleteNote", {
          package: {
            data: {
              entryId: calendarListItem.id
            }
          }
        });
      });

      /**
       * Edit Note Appflow
       */
      my.model.cards.listen( "system.form.journal.action.editNote", function(calendarListItem) {
        // @param 3 - entryId looks like "58e7af7294cd420785f1599e"
        //  - Pass the journal entry id
        var backpack = Forms.defaultBody.call( my, "system.form.journal.action.editNote", {
          package: {
            data: {
              entryId: calendarListItem.id
            }
          }
        });
      });

      // Buttton for adding a Note journal item
      my.model.addNoteButton = phil.model.Button( {
        name:"note",
        value:my.$i18n("Add Note"),
        handler:function() {
          my.addEntry( 'addNote' );
        }
      });

      // Buttton for adding a Todo journal item
      my.model.addTodoButton = phil.model.Button( {
        name:"note",
        value:my.$i18n("Add Todo"),
        handler:function() {
          my.addEntry( 'addTodo' );
        }
      });

      // Buttton for adding an Appointment journal item
      my.model.addAppointmentButton = phil.model.Button( {
        name:"note",
        value:my.$i18n("Add Appointment"),
        handler:function() {
          my.addEntry( 'addAppointment' );
        }
      });

      // Save a comment made in a journal entry
      my.model.cards.listen( "save", function( card, evt ) {          
          my.$pulse("pumpCo.comment.save.request", {
            "comment": {
              "id": card.id,
              "text": card.comment
            }
          });

          // Show progress bar when saving a comment
          my.model.oProgress.hidden( false );

          // Invoke to redraw list when we click save
          setTimeout(my.calendarListPulseRequest, 500);

      } );

      /**
       * Get todays date and the date from 2 weeks ago.
       */
      my.model.dateFrom = the.dateTime().addWeeks( -2 ); // 2 weeks ago

      // The load more journal entries button
      my.model.loadMore = phil.model.Button( {
        "value": "Load previous entries",
        "handler": function() {

          // Onclick: take another 2 weeks off the previous date
          my.model.dateFrom.addWeeks( -2 );

          // Show progress bar when loading more data
          my.model.oProgress.hidden( false );

          // Invoke to begin redrawing the updated journal entry list
          setTimeout( my.calendarListPulseRequest, 500 );
        }
      } );

      // ### Tag cloud section start 1 ###
      // Toggle the display of the tag cloud
      my.model.showHideTagCloud = phil.model.Button( {
          "value": "",
          "handler": function(){
              // toogles between true and false on every button click
              return my.model.showTagCloud( !my.model.showTagCloud() );
          }
      });

      // An observable array which stores the tags
      my.model.tagCloud = phil.observe( [] );

      // An observable initialised to false, ie, dont display tag cloud on cog load
      my.model.showTagCloud = phil.observe( false );
      my.model.alertBtnCliked = phil.observe( false );

      // Handler fired when a user clicks on a tag name
      my.model.tagCloudHandler = function( data, event ){         
          // Reset the Date From to prevent large data loads
          my.model.dateFrom  = the.dateTime().addMonths( -1 );  // Last Month
          my.model.txtSearch.value("");
          my.model.txtSearch.value( my.model.txtSearch.value() + " #" + data.alias );
          my.freeTextSearch();
          my.model.showTagCloud( false );
      };

      // The search field
      my.model.txtSearch = phil.model.Input( { "placeholder":"e.g. health", "value":"" } );

      // Handler for search field
      my.model.btnSearch = phil.model.Button( {
          "value":    '<span class="ico-ios16 ico-search-inv"></span>',
          "handler":  function( data, event ){
              // Reset the Date From to prevent large data loads
              my.model.dateFrom = the.dateTime().addMonths( -1 ); // Last Month

              // On Enter (13) or Click ( in which case keyCode is 0 or undefined )
              if( event.keyCode === 13 || event.keyCode === 0 || event.keyCode === undefined ){
                  my.freeTextSearch();
                  my.model.showTagCloud( false );
              }

              // allow event to bubble
              return true;
          }
      } );
      // ### Tag cloud section end 1 ###

      my.model.oLabelEmpty = phil.observe( "No journal entries within the last 2 weeks - try loading previous entries" );

      // Create Phil progress bar
      my.model.oProgress = phil.model.Progress( { value:'', progress:100 } );

    } ); // End postModelCreate()

    /**
     * Framework method
     * ----------------
     * 
     * Fired Once when the cog is initialised
     */
    my.$on( "postInit", function( params ) {

      // Invoke contact list pulse request handler
      my.contactListPulseRequest();

      // Invoke journal actions pulse request handler
      my.journalActionsPulseRequest();
    } );

    /**
     * Framework method
     * ----------------
     * 
     * Fired when the cog is shown
     */
    my.$on( "postShown", function( params ) {

      // Invoke "pumpCo.user.calendar.list.request" pulse request handler
      my.calendarListPulseRequest();

      // ### tag cloud section start 3 ###
      // fire off request for tags
      my.$pulse( "pumpCo.user.calendar.tag.list.request", {} );
      // ### tag cloud section end 3 ###
    } );

    /**
     * Framework method
     * ----------------
     * 
     * Fired when the cog is hidden
     */
    my.$on( "postHidden", function( params ){} );

    /**
     * Framework method
     * ----------------
     * 
     * ###postCardCreate
     * Cards are loaded Async sych, such that postInit can/will complete BEFORE the CARDS are ready.
     * If you are using Cards, you MUST wait until this completes, before creating any cards.
     */
    my.$on( "postCardCreate", function( data ){

      // Card resources now loaded
      my._cardsReady = true;
    } );

    /**
     * Framework method
     * ----------------
     * 
     * ###internal.event.network.status
     * Sent once at startup by the Cog Service, using the last known Network status.
     * Run just before 'postInit' but after 'postModelCreate'
     * Then broadcast to all cogs on network status change.
     * @parmas {json} data { connection:'wifi'|'4g'|'3g'|'2g'|'gprs', state:'online'|'offline' } }
     */
    my.$on( "internal.event.network.status", function( data ){
      if( data.state ){ console.log( "State:" + data.state ); }
      if( data.connection ){ console.log( "Connection:" + data.connection ); }
    } );

    /****************************************************************************************************************
     * // Application specific logic.
     ****************************************************************************************************************/

    /**
     * Generic method for redirecting to the Appointment, Note and Todo AppFlows
     */
    my.addEntry = function( name ) {

      // Set the form and create the backpack
      var formName = "system.form.journal.action." + name;
      var backpack = Forms.defaultBody.call( my, formName, {
        package: {}
      });

      // Navigate to the add journal AppFlow
      Navigation.navTo( "System.addJournalEntrySpace", backpack );
    };

    /**
     * Load Large rich card template and style
     */
    my.loadCardResources = function() {

      my.model.largeRichCardTpl = function( data) {
        return my.$card( 'phil/collections/large-rich-card' ).html;
      };
      my.model.largeRichCardStyle = function( data ) {
        return my.$card( 'phil/collections/large-rich-card' ).css;
      };
    };

    // ### tag cloud section start 2 ###
    my.freeTextSearch = function(){
        // Only search if there is something worth searching for
        var freeTextSearch = my.model.txtSearch.value();

        // my.userCalendarListRequest( freeTextSearch );
        my.calendarListPulseRequest( freeTextSearch);

         // Clear the existing results
        my.model.cards.clear();
    };
    // ### tag cloud section end 2 ###

    /**
     * Pulse request: "internal.contact.list.request"
     *
     * Get a list of all users stored in the system.
     * FYI: We cant see this pulse request in browser network tab.
     */
    my.contactListPulseRequest = function() {
      my.$pulse( "internal.contact.list.request", { "place":my.$place() } );
    };

    /**
     * Pulse response: "internal.contact.list.response"
     *
     * Store the list of users in variable.
     * Used later for displaying username and photo in journal entries.
     */
    my.contactListPulseResponse = function( pulse ) {
      my._contacts = pulse.pulseBody.contacts;
    };

    /**
     * ### calendarListPulseRequest
     *
     * Pulse request: "pumpCo.user.calendar.list.request"
     *
     * This pulses for journal items within a specific date range.
     */
    // ### tag cloud section start 4 - added search argument for serch field ###
    my.calendarListPulseRequest = function( search ) {
    // ### tag cloud section end 4 ###
        
        var dateTo = the.dateTime();

        // setup the param for the pulse request
        var body = {
          completed: true,
          dateFrom:  my.model.dateFrom,
          dateTo:    dateTo
        };

      // ### tag cloud section start 5 ###
      // get contents of text field
      var search = my.model.txtSearch.value();

      // if theres content in the search field put the contents into the body object
      if( search ){
          body.text = search;
      }

      my.$pulse( "pumpCo.user.calendar.list.request", body );
      // ### tag cloud section end 5 ###
    };

    /**
     * Pulse response: "pumpCo.user.calendar.list.response"
     *
     * Store (in a variable) a list of all journal entries that are in the db.
     * my._pulseResponseCalendarList contains an object.
     */
    my.calendarListPulseResponse = function( pulse ) {
      /**
       * Journal entry data: switch between static and live pulse response data.
       *
       * Test pulses, see 'test-pulse-responses' folder
       * - For all journal types use the 'dummyPulseResponseAllJournalTypes.pulseBody.entry' namespace
       *
       * - For iotaa test pulses use 'iotaaUserCalendarListResponse.pulseBody.entry' namespace
       *   - moisture: taken from the script com.pumpco.iotaa.MoistureScript
       *   - attendance in: taken from the script com.pumpco.iotaa.AttendanceInScript
       *
       * DB data
       * - For using the journal entries manually added (use the data stored in the DB) use the 'pulse.pulseBody.entry' namespace
       */
       my._pulseResponseCalendarList = pulse.pulseBody.entry;

       // Hide progress bar after the data has been loaded
       my.model.oProgress.hidden( true );

       // With our response data now available, kick off integration of Journal entries and cards
       my.preProcessJournalEntry();
    };

    /**
     * Pre process each journal entry.
     *
     * Iterate over each journal item, passing off each item into a
     * processor method.
     */
    my.preProcessJournalEntry = function() {

      // Return if card resources have not been loaded
      if( !my._cardsReady ) {
        return -1;
      }

      // Every time you visit the cog, the DOM elements (if you visited previously) are removed
      my.model.cards.clear();

      // Iterate calls to the journal entry processing function
      for( var i = 0; i < my._pulseResponseCalendarList.length; i++ ) {
        var calendarListItem = my._pulseResponseCalendarList[i];

        // Call function (passing a journal entry) that instantiates new LargeRichCard()
        my.processJournalEntry( calendarListItem );

      } // end for loop
    };

    /**
     * Process each journal entry.
     * @param {object} calendarListItem - A single calendar item.
     *
     * Create a LargeRichCard, checking if a journal item has actions
     * (ie, edit or delete) and add each journal item to my.model.cards.
     */
    my.processJournalEntry = function( calendarListItem ) {

      // Check for the available actions inside a journal entry
      var actions = my.model.aosactions.check( calendarListItem );

      /**
       * Create a large rich card using parser.js
       *
       * @param {object} calendarListItem - A single calendar item.
       * @param {object} my._contacts - The entire contacts object.
       *
       */
      var parsedCard = new LargeRichCard(

        Parser.process( calendarListItem, my._contacts ), {
          /**
           * Pass the actions variable setup from above into our
           * large rich card - remember, a single calendar entry will have
           * actions specific 'to it'
           */
          actions: actions

        } ).init();

        /**
         * Add to the cards collection.
         *
         * @param {object} parsedCard - A single large rich card containing
         * all the content needed for rendering.
         *
         * main.html now takes care of rendering the cards to the screen.
         */
        my.model.cards.add( parsedCard );
    };

    /**
     * Pulse request: "pumpCo.form.list.request"
     *
     * Request the 'questionnaire' to see what AppFlows are available.
     */
    my.journalActionsPulseRequest = function() {
      my.$pulse( "pumpCo.form.list.request", { "category": [ "system.category.app.journal", "system.category.app.journal.entry" ] });
    };

    /**
     * Pulse response: "pumpCo.form.list.response"
     *
     * Actually add actions to cards that need them. The response is a
     * combination of 'journal' and 'journal entry' json.
     *
     * Supplementary informtion - See static responses listed below:
     *
     * Combinded 'app.journal' and 'app.journal.entry' pulse responses
     *  - actions/journal-pulses-combined-pumpCo.form.list.response.json
     */
    my.journalActionsPulseResponse = function( pulse ) {

      /**
       * Loop through our questionnaire, store the action name
       * then use our AOSActions instance to push onto an array
       */
      for( var i=0; i<pulse.pulseBody.questionnaire.length; i++ ){
        var item = pulse.pulseBody.questionnaire[ i ];
        item.key = item.name;
        my.model.aosactions.add( item );
      }
    };

    // ### tag cloud section start 6 ###
    // Tag cloud pulse response handler
    my.tagCloudPulseResponse = function( pulse ) {

        // store pulseBody in a variable for conveniance
        var body = pulse.pulseBody;

        // check if the tags array exists and is populcated with at least 1 item
        if( body.tags && body.tags.length > 0 ) {

          var tags = [];

          // Handle "unknown" values
          for( var i=body.tags.length-1; i>=0; i-- ){
              if( body.tags[ i ].label !== "unknown" ){
                  tags.push( body.tags[ i ] );
              }
          }

          // Add tags to the cloud
          my.model.tagCloud( tags );
        }
    };
    // ### tag cloud section end 6 ###

    /****************************************************************************************************************
     * // Framework pulse response handlers
     ****************************************************************************************************************/

    /**
     * Calendar pulse response Handler (listen for Calendar change events)
     */
    my.$on( "pumpCo.event.user.calendar.entry.updated", function( pulse ){

      // Trigger a reload of the Pulse
      my.calendarListPulseRequest();

      var isMoistureEvent = pulse.pulseBody.event[0].type || '';

      if( isMoistureEvent === "moisture" ) {
        my.$alert( "New moisture alert added" );
      }
    }.bind( this ) );

    /**
     * Journal entry pulse response Handler
     */
    my.$on( "pumpCo.user.calendar.list.response", my.calendarListPulseResponse );

    /**
     * Contacts lists pulse response handler
     */
    my.$on( "internal.contact.list.response", my.contactListPulseResponse );

    /**
     * Journal pulse response handler
     */
    my.$on( "pumpCo.form.list.response", my.journalActionsPulseResponse );

    // ### tag cloud section start 7 ###

    /**
     * Tag cloud/list pulse response handler
     */
    my.$on( "pumpCo.user.calendar.tag.list.response", my.tagCloudPulseResponse );
    // ### tag cloud section end 7 ###

    /****************************************************************************************************************
     * // Application initialise
     ****************************************************************************************************************/
    
    /*
    * Framework method
    * ----------------
    * 
    * Entry point for the application.
    */
    my.$init();
} );
