
/*
 * Pump API and Application 1.0.0
 * Copyright(c) 2011 PumpCo Ltd.
 * licensing@pumpco.co.uk
 * http://www.pumpco.co.uk/license
 */

/**
 * @class system.navigationCog
 * the.App.onReady is used to create a standardised<br>
 * navigational cog, using the images and text set in the params<br>
 * to allow users to easily navigate through the system with a <br>
 * standardised layout and interface
 * @author Andy Monis
 */

the.App.onReady(function () {

    // @JC testing console logs
    //console.log("hello - im at the top of the.App.onReady() in navigationCog/jasonc-test.js");
    //console.log('the my object in the navigationCog is: ');
    //console.log(my);

    /**
     * Model Stuff here
     */
    my.$on( "postModelCreate", function(){

      //@JC: this dosnt work
      // my.model.oImage 		= phil.model.Image( { "value": "/convCentreNav/images/math-app.png" } );
      // console.log('my.model.oImage is');
      // console.log(my.model.oImage);

      // @JC: test to see if i can add a property to my.model
      my.model.oTitle = params.appName;
      my.model.oDescription = params.appDescription;

      my.model.oImage = phil.model.Image( { "value": params.basePath + params.imageName} );

      debugger

      my.model.nav_click = function( data, event ){

            // AMONIS: Example of Long Press to allow Cog Re-Arranging.
            if( event.philAction === "press" ){
              console.log("Im in my.model.nav_click");
                my.$debug( "NavigationCog: Enable Space Edit Mode." );
                //my.$pulse( "internal.system.space.rearrange.request", { editmode:true } );
                return;
            }

     		if( params.imageLink === "actor" ){
                my.navActor();
     		} else {
         		// Create a dynamic backpack
         		var backpack = params.backpack || {};
         		backpack.key = backpack.key || "Space.Form.Backpack";

         		// The nav cog needs to set form based cogs with the ideal space to cancel / go back to.
         		// For any config with "Space.Form.Backpack" apply these settings automatically
         		if( backpack.key === "Space.Form.Backpack" ){

	         		var currentSpace = pumpco.utils.UserUtils.getCurrentSpaceName( my );

	         		backpack.key = "Space.Form.Backpack";

	         		backpack.package = backpack.package || {};
	         		backpack.package.mergeForm = backpack.package.mergeForm || {};

                    // AMONIS: 25/01/2017: Check for new form param
                    if( params.form ){
                        backpack.package[ "mergeForm" ][ "name" ] = params.form.name || "not specifed";
                        backpack.package[ "mergeForm" ][ "autoFinish" ] = params.form.autoFinish || false;
                    }

	         		backpack.package.mergeForm.finishNav = backpack.package.mergeForm.finishNav || currentSpace;
	         		backpack.package.mergeForm.abortNav  = backpack.package.mergeForm.abortNav || currentSpace;
				}

				// Pulse the Roadie to hold the backpack
				my.$pulse( "pumpCo.roadie.hold.request", backpack );

				// Pulse the roadie to nav to a space
     			my.$pulse( "pumpCo.roadie.visit.request", {
                  	"spaceName": params.imageLink,
                  	"refresh": false
                  	// // Send the params.backpack into the Roadie ( and the Cog via spacename )
                   //  "backpack": params.backpack
                });
     		}
        };


    });

    // Initialise the Cog
    my.$init();

});
