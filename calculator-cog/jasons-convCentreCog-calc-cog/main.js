/*
 * This is the entry route for all aOS apps
 * adhers to https://docs.google.com/presentation/d/1W2paVF4NaFcc_-rdQYuKfvolepMqEFNDkXj2qrRGb8w/edit#slide=id.g11b11b7f8b_0_0
 */
the.App.onReady(function () {
  //console.log("testing new cog");

  /**
   * @TODO:
   * See Trello card checklist https://trello.com/c/KKAXvn0u/26-pumpco-jason-to-build-a-demo-cog
   */

  /* Model: adheres to
   * https://docs.google.com/presentation/d/1W2paVF4NaFcc_-rdQYuKfvolepMqEFNDkXj2qrRGb8w/edit#slide=id.g11b11b7f8b_0_24
   */
  my.$on("postModelCreate", function() {

    /***** Program description *****************
     *
     * 1) When a numeric button is clicked, onNumberClicked() is called
     * 2) Get the input field value
     * 3) Get the value of the clicked button
     *
     * Notes
     * - Uses Phil which is a knockout wrapper. This means we get knockout functionality
     *   but with custom extras
     */

     /**
      * Dosnt need to be in the model as it dosnt affect the html!
      * For future reference, we can simply use functions outside the model
      * where the logic is only required for the program to work
      */
     my.equalsProcessor = function( sum ){
       debugger

       // get the operator that was selected
       var theOperator = my.operator;

       console.log("sum is: ");
       console.log(sum);

       // Split the sum at the operator and call the appropriate method based
       // on the operator
       if( sum ) {
         var theSplit = sum.split( theOperator );// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
         console.log("theSplit is: ");
         console.log(theSplit);

         switch (theOperator) {
           case "+":
              return my.plusOperator( theSplit );

           case "-":
              return my.minusOperator( theSplit );

           case "*":
              return my.multiplyOperator( theSplit );

           case "/":
              return my.divideOperator( theSplit );

             break;
           default:

         }

        //  var finalAddedResult = parseInt(theSplit[0]) + theOperator + parseInt(theSplit[1]);
        //  return finalAddedResult;

       } else {
         return "No numbers added";
       }
     };

     // add 2 numbers
     my.plusOperator = function( theSplit ) {
       var finalAddedResult = parseInt( theSplit[0]) + parseInt(theSplit[1] );
       return finalAddedResult;
     };

     // subtract 2 numbers
     my.minusOperator = function( theSplit ) {
       var finalAddedResult = parseInt( theSplit[0]) - parseInt(theSplit[1] );
       return finalAddedResult;
     };

     // multiply 2 numbers
     my.multiplyOperator = function( theSplit ) {
       var finalAddedResult = parseInt( theSplit[0]) * parseInt(theSplit[1] );
       return finalAddedResult;
     };

     // divide 2 numbers
     my.divideOperator = function( theSplit ) {
       var finalAddedResult = parseInt( theSplit[0]) / parseInt(theSplit[1] );
       return finalAddedResult;
     };

     //@JC - attempt to add numbers
    //  my.buttonplusProcessor = function(current, numberClicked) {
    //    var addedResult = parseInt(current) + parseInt(numberClicked);
    //    console.log("addedResult is: ");
    //    console.log(addedResult);
    //  };

     /**
      * // 2)
      * @JC: 20/2/17: when a numeric button is clicked
      * either add the first number/math op to the field or append the previous
      * entry
      */
      my.model.onNumberClicked = function( data, evt ) {

        debugger

        // @JC: 20/2/17: if the input field has a value, join the next number,
        // else, put the first number inputted into the input field
        if( my.model.myinput.value() ) {
          console.log(my.model.myinput.value() + data.value() );
          my.model.myinput.value( my.model.myinput.value() + data.value() );

        } else {
          my.model.myinput.value( data.value() );
          console.log(my.model.myinput.value());
        }

        /**
         * Get all numbers from the input field
         */
        //var current = my.model.myinput.value( );
        //console.log("my.model.myinput.value() is: ");
        //console.log(current);

        /**
         * Do we have a number or an object?
         * If number, append to the input field
         * @JC - 2017-02-08 - some of the below could be removed now that
         * onOperatorClicked() has been added
         */

        // var numberClicked = data.value ? data.value() : data;
        // // is numberClicked an integer?
        // if(parseInt(numberClicked) ) {
        //   my.model.myinput.value(current + numberClicked); // join previous and current numbers
        //   var twoNumsAdded = current + numberClicked;
        //
        //   if(twoNumsAdded) {
        //
        //   }
        // }

        // debugger
        // @JC - check if operation is the plus symbol
        // if(numberClicked.buttonplus) {
        //   var buttonplusValue = numberClicked.buttonplus.value() ? numberClicked.buttonplus.value() : "no numberClicked.buttonplus.value()";
        // }
        //
        // if(buttonplusValue === '+' && Number.isInteger(numberClicked)) {
        //   my.buttonplusProcessor(current, numberClicked);
        // }

        // @JC - previous by @AM - my.model.myinput.value( current + numberClicked );
        //my.model.myinput.value(numberClicked);
        //my.model.firstNumClickedOn = numberClicked;
        // if(current && buttonplusValue) {
        //   my.model.firstNumWithPlus = current + buttonplusValue;
        //   my.model.myinput.value(my.model.firstNumWithPlus);
        //   //console.log(my.model.firstNumWithPlus);
        // }

      }.bind( this );

    /**
     * The equals button clicked
     * Call generic processor for math ops, passing in the input field value.
     * On return update the input field with the result
     */
    my.model.onEqualsClicked = function( data, evt ){
      var result = my.equalsProcessor( my.model.myinput.value() );

      // @JC - see what happens when onEqualsClicked is clicked
      debugger
      console.log("the added result is: ");
      console.log(result);

      my.model.myinput.value( result );
    }.bind( this ); // this is our my object

    // Clear the input field, ready for new calculation
    my.model.onClearClickedV2 = function( data, evt ) {
      //debugger
      my.model.myinput.value("");
    };

    /**
     * @JC: 20/2/17: concatenates the previous input value with the
     * the operator clicked
     */
    my.model.onOperatorClicked = function( data, evt ){
      debugger;

      // @JC: 20/2/17: get the nueric operator the user clicked
      //var operator = data.value();
      my.operator = data.value();

      my.model.myinput.value( my.model.myinput.value() + " " + my.operator + " ");

    };

    /**
     * Declare the property.
     * When a math operator is selected, its added to this property
     */
    my.operator;

    /**
     * Creates an HTML input field.
     */
    my.model.myinput = phil.model.Input( { value: "" });

    /**
     * Disabled the input field
     */
    my.model.disableInput = true;

    /**
     * 1)
     * @param: handler: handler is defined by Phil
     * so its specific to Phil not knockout
     */
    my.model.button0 = phil.model.Button( { value:"0", handler:my.model.onNumberClicked } );
    my.model.button1 = phil.model.Button( { value:"1", handler:my.model.onNumberClicked } );
    my.model.button2 = phil.model.Button( { value:"2", handler:my.model.onNumberClicked } );
    my.model.button3 = phil.model.Button( { value:"3", handler:my.model.onNumberClicked } );
    my.model.button4 = phil.model.Button( { value:"4", handler:my.model.onNumberClicked } );
    my.model.button5 = phil.model.Button( { value:"5", handler:my.model.onNumberClicked } );
    my.model.button6 = phil.model.Button( { value:"6", handler:my.model.onNumberClicked } );
    my.model.button7 = phil.model.Button( { value:"7", handler:my.model.onNumberClicked } );
    my.model.button8 = phil.model.Button( { value:"8", handler:my.model.onNumberClicked } );
    my.model.button9 = phil.model.Button( { value:"9", handler:my.model.onNumberClicked } );

    // @AM - 2017-02-08 - added an onOperatorClicked function to exclusively handle the plus onOperatorClicked
    // As he mentioned, this is a much cleaner way of doing things. i neednt do the mundging
    my.model.buttonplus = phil.model.Button( { value:"+", handler:my.model.onOperatorClicked } );
    my.model.buttonminus = phil.model.Button( { value:"-", handler:my.model.onOperatorClicked } );
    my.model.buttonmultiply = phil.model.Button( { value:"*", handler:my.model.onOperatorClicked } );
    my.model.buttondivide = phil.model.Button( { value:"/", handler:my.model.onOperatorClicked } );

    my.model.buttonequals = phil.model.Button( { value:"=", handler:my.model.onEqualsClicked } );
    // my.model.buttonclear = phil.model.Button( { value:"Clear", handler:my.model.onClearClicked } );
    my.model.buttonclearV2 = phil.model.Button( { value:"Clear", handler:my.model.onClearClickedV2 } );
  });

  // Initialise the Cog - the kick off doing app specific stuff
  my.$init();

  /**
   * Misc: kept for reference purposes only
   my.model.aParagraph = phil.observe( "aParagraph: A basic **observable** using *markdown*" );
   */

});
