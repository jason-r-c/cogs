/*
 * Pump API and Application 1.0.0
 * Copyright(c) 2016 PumpCo Inc.
 * licensing@pumpco.co.uk
 * http://www.pumpco.co.uk/license
 */
the.App.onReady(function () {

    // @JC: a copy of the respose from trello card
    // https://trello.com/c/g8jH3noh/25-hs-make-the-hiv-metricscog

    /**
     * Fired when the App has created the basic model structure for you to extend
     * my.model
     */
    my.$on( "postModelCreate", function(){
        /**
         * Get phil observables that deals with data sets
         */

        // @JC: Create an observable initialised with an empty array
        my.model.reports = phil.observe( [] );

        // **property** {boolean} empty Used to determine if any / no reports are available
        my.model.empty = phil.observe( true );
    } );

    /**
     * Fired Once when the cog is initialised
     */
    my.$on( "postInit", function( params ){} );

    /**
     * Fired when the cog is shown
     */
    my.$on( "postShown", function( params ){
      // @JC: assume no data so show no data mesage
      // Reshow the no data message, as we are requesting again and none may exist
      my.model.empty( true );

      // @JC: call for requesting a pulse
      my.pulseReportsRequest();
    } );

    /**
     * Fired when the cog is hidden
     */
    my.$on( "postHidden", function( params ){} );

    /**
     * ###postCardCreate
     * Cards are loaded Async sych, such that postInit can/will complete BEFORE the CARDS are ready.
     * If you are using Cards, you MUST wait until this completes, before creating any cards.
     */
    my.$on( "postCardCreate", function( data ){} );

    /**
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

    // @JC: 1st param pulseClass, 2nd param pulse body contents
    my.pulseReportsRequest = function(){
      my.$pulse( "pumpCo.user.report.group.get.request", {
            "name": "hs.hiv.benchmarking", "params": {}
      } );
    };


    /**
     * @JC: funciton called when my.$on() gets a response
     * [processReports description]
     * @return {type} [description]
     */
    my.processReports = function( pulse ){

        // @JC: get the pulse report body
        my._report = pulse.pulseBody.report;

        /**
         * @JC: Print all available reports in separate tables
         */
         for( var i=0; i < my._report.length; i++) {
           // debugger
           //console.log(my._report.length);

           // @JC: store a reference to the current report
           var json = my._report[ i ];
           console.log(json);

           // @JC: setup a temp object for grabbing desc/label
           // and store copy of CSVTable
           var report = {
             description: json.label,
             label: json.description,
             table: phil.collections.CSVTable()
           };

           // @JC: Insert each row into our report.table object
           // Essentially build contents of our table.
           for( var j=0; j < json.report.length; j++) {
             // console.log(json.report[ j ]);
             report.table.insertRow(json.report[ j ]);
           }

          // @JC: Push our table full of rows onto the model reports property
           my.model.reports.push( report );
         }

         // @JC: used from release version
         // If we have a pulse response, set my.model.empty to false
         // so the View dosnt display the 'no data' msg
         if( my._report.length > 0 ) {
             my.model.empty( false );
         }
    };

    // @JC: when a pulse is returned
    // Note that this must come after the my.processReports function as
    // my.processReports has been defined
    // look at https://www.udemy.com/understand-javascript/learn/v4/t/lecture/2237452
    // **listener** pumpCo.user.report.group.get.response bind to function above, rather than puttin geverything in the handler
    my.$on( "pumpCo.user.report.group.get.response", my.processReports );

    // Initialise the Cog
    my.$init();
} );

/**
 * @release version
 * @JC: code used in the production version of the cog
 */
/*my.$on( "postShown", function( params ){
    // Reshow the no data message, as we are requesting again and none may exist
    my.model.empty( true );
    // Pulse the backend for some data
    my.$pulse( "pumpCo.user.report.group.get.request", {
         "name": "hs.hiv.benchmarking", "params": {}
    } );
} );*/
