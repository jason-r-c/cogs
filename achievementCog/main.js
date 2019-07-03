/*
 * Pump API and Application 1.0.0
 * Copyright(c) 2016 PumpCo Inc.
 * licensing@pumpco.co.uk
 * http://www.pumpco.co.uk/license
 */

/**
 * Achievements cog: Achievements are displayed in list.
 * Group headings are displayed using Single line item cards
 * and each achievement is displayed using Small rich cards.
 */
the.App.onReady(function () {

    /**
     * Fired when the App has created the basic model structure for you to extend
     * my.model
     */
    my.$on( "postModelCreate", function(){

      // False as the card resources have not yet been setup
      my._cardsReady = false;

      // Use List() with an empty object in 2nd param
      my.model.cards = new phil.collections.List( [], {} );

      // Invoke small-rich-card & single-line-item template and style loader
      my.loadCardResources();
    });

    // Load card templates and styles
    my.loadCardResources = function() {

      // Single line item resources
      my.model.smallRichCardTpl = function( data) {
        return my.$card( 'phil/collections/small-rich-card' ).html;
      };

      my.model.smallRichCardStyle = function( data ) {
        return my.$card( 'phil/collections/small-rich-card' ).css;
      };

      // Small rich card resources
      my.model.singleLineItemTpl = function( data) {
        return my.$card( 'phil/collections/single-line-item' ).html;
      };

      my.model.singleLineItemStyle = function( data ) {
        return my.$card( 'phil/collections/single-line-item' ).css;
      };
    };

    /**
     * Fired Once when the cog is initialised
     */
    my.$on( "postInit", function( params ){} );

    /**
     * Fired when the cog is shown
     */
    my.$on( "postShown", function( params ){
      my.achievementPulseRequest();
    } );

    // Pulse request: Request the user achievements pulse
    my.achievementPulseRequest = function(){
      my.$pulse( "pumpCo.user.achievement.list.request", {} );
    };

    // Pulse response handler: Store the achievement array (from the pulse)
    my.achievementPulseResponse = function(pulse) {
      my._pulseResponseAchievements = pulse.pulseBody.achievement;

      // With our response data now available, kick off integration of achievements and cards
      my.cardPreProcess();
    };

    // Gets each achievement and passes each one to a function that takes care of
    // integrating it with its own Card
    my.cardPreProcess = function() {

      // Return if card resources have not been loaded
      if( !my._cardsReady ) {
        return -1;
      }
      // Every time you visit the cog, the DOM elements (if you visited previously) are removed
      my.model.cards.clear();

      // Iterate achievements and call associated processing functions
      for( var i = 0; i < my._pulseResponseAchievements.length; i++ ) {
        var currentAchievement = my._pulseResponseAchievements[i];

        // Iterate every achievement group and pass to achievement heading processor
        my.processAchievementHeading( currentAchievement );

        // Iterate all achievements belonging to a group, and pass to single achievement processor
        for( var j = 0; j < currentAchievement.entries.length; j++ ) {
          my.processSingleAchievement( currentAchievement.entries[j] );
        }
      }
    };

    // Invoke SingleLineItem instance, passing the heading label data for display in card
    my.processAchievementHeading = function( currentAchievement ) {
      var singleLineItemCard = new SingleLineItem({
        label: currentAchievement.label
      }).init(); // Invoke SingleLineItem()

      my.model.cards.add( singleLineItemCard );
    };

    // Invoke SmallRichCard instance, passing achievement data for display in card
    my.processSingleAchievement = function( achievement ) {
      var aSmallRichCard = new SmallRichCard({
        title: achievement.label,
        desc: achievement.description,
        sub: my.$i18n("progess") + " " + achievement.progress + ' / ' + achievement.goal,
        photo: achievement.icon
      },
      {
        actions:[{ }]
      } ).init(); // Invoke SmallRichCard()

      my.model.cards.add( aSmallRichCard );
    };

    /**
     * Fired when the cog is hidden
     */
    my.$on( "postHidden", function( params ){} );

    /**
     * ###postCardCreate
     * Cards are loaded Async, such that postInit can/will complete BEFORE the CARDS are ready.
     * If you are using Cards, you MUST wait until this completes, before creating any cards.
     */
    my.$on( "postCardCreate", function( data ){
      // Card resources now loaded
      my._cardsReady = true;
    } );

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

    // The pulse response: define our response and handler function (which is called when we get back our response)
    my.$on( "pumpCo.user.achievement.list.response", my.achievementPulseResponse );

    // Initialise the Cog
    my.$init();
} );
