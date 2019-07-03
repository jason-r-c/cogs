/*
 * Pump API and Application 1.0.0
 * Copyright(c) 2017 PumpCo Ltd.
 * licensing@pumpco.co.uk
 * http://www.pumpco.co.uk/license
 */

/**
 * Cog that allows users to manage and add devices
 */
the.App.onReady(function () {
    /**
     * postModelCreate: Here we add model properties to use later in our program
     */
    my.$on( "postModelCreate", function(){
      // Will hold the devices section of the pulse repsonse
      my._devices = [];

      // False as the card resources have not yet been setup
      my._cardsReady = false;

      // Initially set to false, assuming there are devices
      my.model.deviceListEmpty = phil.observe(false);

      // The Add device Appflow
      my.model.addDevice = phil.model.Button({
          value: my.$i18n( "add-device" ),
          handler: function () {

            // Setup config for going to device management space with the add device form
            var backpack = Forms.defaultBody.call( my, "system.form.devices.add", {} ); // Use call(my) to get around Forms call issue

            // Navigate to the device management form space
            Navigation.navTo( "System.deviceManagementFormSpace", backpack );
          }
      });

      // Instantiate small rich card collection list
      my.model.cards = new phil.collections.List( [], { mixins:{ "Uniqable":{ key:"id" } } } );

      // Handler for Manage device link
      my.model.cards.listen( "manage", function( data, evt, cardEl ){
          // Get the ID of the device we clicked on
          var deviceId = data.id;
          my.goToManage(deviceId);
      });

      my.loadCardResources();
    });

    // Load our Card resources: Load the template and stylesheet for Small rich card
    my.loadCardResources = function() {
      my.model.template = function( data ){
          return my.$card( 'phil/collections/small-rich-card' ).html;
      };

      my.model.stylesheet = function( data ){
          return my.$card( 'phil/collections/small-rich-card' ).css;
      };
    };

    // Fired when the App has completed loading the card resources (Async, so don't try creating cards until this is completed.)
    // Ran after cards are loaded from loadCardResources()
    my.$on( "postCardCreate", function( data ){
      // Card resources now loaded so set property to true
    	my._cardsReady = true;
    });

    /**
     * Fired when the cog is shown
     */
    my.$on( "postShown", function( params ){
      // Request device pulse
      my.pulseDeviceRequest();
    } );

    /**
     * Fire off a pulse request, requesting the specified pulse
     * @param pulseClass {String} The pulse we want to request
     * @param {} {Object} Pulse body contents
     */
    my.pulseDeviceRequest = function(){
      my.$pulse( "pumpCo.user.device.list.request", {} );
    };

    // Pulse response handler
    my.processUserDeviceListResponse = function(pulse) {
      // Store the device portion of the pulse response
      my._devices = pulse.pulseBody.device;
      my.addDeviceCards();
    };

    // Gets each device and passes each one to a function that takes care of
    // integrating it with its own Small rich card
    my.addDeviceCards = function(){
      // Return if card tpl and stylesheet not loaded
  		if( !my._cardsReady )
  			return -1;

      // Display 'no device' added message if no devices added
  		if( this._devices.length === 0 ) {
        my.model.deviceListEmpty(true);
      } else  {
        my.model.deviceListEmpty(false);
      }

  		my.model.cards.clear();

      // Iterate through each device and pass for Small Rich Card processing
  		for( var i=0; i<this._devices.length; i++ ){
  			var _device = this._devices[ i ];
        this.addDeviceCard( _device );
  		}
  	};

    // Creates a Small Rich Card for each device (Each device is wrapped in Small Rich Card styling)
    my.addDeviceCard = function( _device ){
        var card = new SmallRichCard(
            {
                // Small Rich Card displayable properties
                id:     _device.id,
                title:  _device.fn,
                sub:    _device.description,
                desc:   _device.manufacturer + " - " + _device.model,
                photo:  _device.photo
            },
            {
                actions:[
                    { label:my.$i18n( "card-manage" ), key:"manage" }
                ]
            }
        ).init();

        // Add the card to the Phil List collection
        my.model.cards.add( card );
    };

    // Manage device Appflow: Go to the device manage form in the device management space
    my.goToManage = function(deviceId) {

      // backpack: allows us to send structured data via the roadie that we wish to pass to the appflow
      var backpack = Forms.defaultBody.call( my, "system.form.devices.manage", {} );
      backpack[ "package" ].data = { "deviceId": deviceId };

      // Pass our configured backpack and navigate to the device management form space
      Navigation.navTo( "System.deviceManagementFormSpace", backpack );
    };

    // When we get a pulse response, call pulse response handler
    my.$on( "pumpCo.user.device.list.response", my.processUserDeviceListResponse );

    // Initialise the Cog.
    my.$init();
});
