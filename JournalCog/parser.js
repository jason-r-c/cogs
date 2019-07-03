/**
 * Adds content to every journal card.
 */
function Parser( json ) {}

/**
 * Sub-card all the journal entries.
 * @param {object} calendarListItem - A single calendar item.
 * @param {object} contacts - An object containing all contacts.
 */
Parser.process = function( calendarListItem, contacts ) {

  var result;

  // Store private contacts propert on our classwide Parser object
  // for convenience
  Parser._contacts = contacts;

  switch( calendarListItem.type ) {
    case "appointment":
      result = Parser.appointmentCard( calendarListItem );
      break;

    case "bodyComposition":
      result = Parser.bodyCompositionCard( calendarListItem );
      break;

    case "diabetes":
      result = Parser.diabetesCard( calendarListItem );
      break;

    case "exercise":
      result = Parser.exerciseCard( calendarListItem );
      break;

    case "meal":
      result = Parser.mealCard( calendarListItem );
      break;

    case "moisture":
      result = Parser.moistureCard( calendarListItem );
      break;

    case "mood":
      result = Parser.moodCard( calendarListItem );
      break;

    case "note":
      result = Parser.noteCard( calendarListItem );
      break;

    case "todo":
      result = Parser.todoCard( calendarListItem );
      break;

    case "vitals":
      result = Parser.vitalsCard( calendarListItem );
      break;

    default:
      result = Parser.defaultCard( calendarListItem );
      break;
  }

  return result;
};

/**
 * Common methods: Cards that use common functionality use these methods
 */

// Set the journal type
Parser.setJournalType = function( calendarListItem ) {

  if( hasUpperCase( calendarListItem.type ) ) {
    var inputString = calendarListItem.type;
    var newInputString = "";
    var positions = [];
    for(var i=0; i<inputString.length; i++){

        if(inputString[i].match(/[A-Z]/) !== null){

            // add space before uppercase letter
            newInputString += " " + inputString[i].toLowerCase();

        } else {
          newInputString += inputString[i];

        }
    }
    //console.log(newInputString);
    return '<p class="journal-entry-type">' + newInputString + '</p>';

  }  else {
    return ( calendarListItem.type ? '<p class="journal-entry-type">' + calendarListItem.type + '</p>' : "No type added" );

  }

  function hasUpperCase(str) {

    if(str.toLowerCase() === str) {
      return false;
    }

    return true;

  }
};

Parser.setUserAvatar = function() {

  var currentUserAvatar = '';

  if( Parser.currentUserAvatar ) {
    currentUserAvatar += '<img src=" ' + Parser.currentUserAvatar + ' "/img>';

    // Clear the property: The contacts.uid and calendarListItem.uid match
    // in Parser.setUserName(), so we default to the 'defaultuser' icon
    Parser.currentUserAvatar = false;

  } else {
    currentUserAvatar += '<img src="/PumpHouse/uploads/system/JournalCog/images/default.jpg" />';

  }

  return currentUserAvatar;
};

Parser.setUserName = function( calendarListItem ) {

  var contactName = "";

  for( var i = 0; i < Parser._contacts.length; i++ ) {
    if( Parser._contacts[i].uid === calendarListItem.uid ) {

      contactName = '<p class="journal-cog-username">' + Parser._contacts[i].fn + '</p>';

      // Set the current users photo as a property on the Parser object for conveniance.
      // Saves us from having to loop thrugh the same object again in setUserAvatar()
      Parser.currentUserAvatar = Parser._contacts[i].photo;

      return contactName;

    } else {
      contactName = '';

    }
  }

  return contactName;

};

/**
 * Gets tag name, tag icon, then joins them together.
 * @param {Object} calendarListItem
 * @returns {String} A string that contains all tag names with associated icons
 */
Parser.manipulateTags = function(calendarListItem) {

  /**
   * Loops through all tags a journal entry has
   */
  var formattedTagName = [];
  var formattedLabelName = [];
  var theImg = [];
  var tagAndImg = [];

  // Check if journal entry has tags
  if( calendarListItem.tag ) {
        for( var i = 0; i < calendarListItem.tag.length; i++ ) {
          var partOfImagePath = 'healthpump';
          var secondPartOfPath = 'tags';

          var tagNameSplit = calendarListItem.tag[i].split(".");

          // Get the last part of the string (after the last dot),
          // ie, the tag name itself
          formattedTagName[i] = tagNameSplit[ tagNameSplit.length - 1 ];
          formattedLabelName[i] = tagNameSplit[ tagNameSplit.length - 1 ];

          // Image name is different to tag, is 'heart' so set that instead
          if( formattedTagName[i] === 'bloodPressure' ) {
            formattedTagName[i] = 'heart';
            formattedLabelName[i] = 'heart';
          }

          // appointment icon is in the 'system' folder to set path to that
          if( formattedTagName[i] === 'appointment' || formattedTagName[i] === 'todo' ) {
            partOfImagePath = 'system';
          }

          // Tag for 'invite'
          if( formattedTagName[i] === 'invite' ) {
            partOfImagePath = 'system';
            secondPartOfPath = 'icons';
            formattedTagName[i] = 'journal_invite';
            formattedLabelName[i] = 'journal invite';
          }

          // Tag for  'attendance'
          if( formattedTagName[i] === 'attendance' ) {
            partOfImagePath = 'system';
            secondPartOfPath = 'tags';
            formattedTagName[i] = 'attendance';
            formattedLabelName[i] = 'attendance';
          }

          // Tag for 'order'
          if( formattedTagName[i] === 'order' ) {
            partOfImagePath = 'system';
            secondPartOfPath = 'tags';
            formattedTagName[i] = 'order';
            formattedLabelName[i] = 'order';
          }

          // Tag for 'public'
          if( formattedTagName[i] === 'public' ) {
            partOfImagePath = 'system';
            secondPartOfPath = 'tags';
            formattedTagName[i] = 'public';
            formattedLabelName[i] = 'public';
          }

          // Tag for 'psoriasis'
          if( formattedTagName[i] === 'psoriasis' )  {
            partOfImagePath = 'system';
            secondPartOfPath = 'icons';
            formattedTagName[i] = 'journal_psoriasis';
            formattedLabelName[i] = 'psoriasis';
          }

          // Tag for  'psoriasis/photos'
          if( formattedTagName[i] === 'psoriasis/photos' )  {
            partOfImagePath = 'system';
            secondPartOfPath = 'icons';
            formattedTagName[i] = 'journal_psoriasis';
            formattedLabelName[i] = 'psoriasis/photos';
          }

          // Tag for 'alert'
          if( formattedTagName[i] === 'alert' )  {
            partOfImagePath = 'system';
            secondPartOfPath = 'tags';
            formattedTagName[i] = 'alert';
            formattedLabelName[i] = 'alert';
          }

          // Tag for 'installation'
          if( formattedTagName[i] === 'installation' )  {
            partOfImagePath = 'system';
            secondPartOfPath = 'tags';
            formattedTagName[i] = 'install';
            formattedLabelName[i] = 'installation';
          }

          // Tag for 'meal'
          if( formattedTagName[i] === 'meal' )  {
            partOfImagePath = 'system';
            secondPartOfPath = 'icons';
            formattedTagName[i] = 'journal_meal';
            formattedLabelName[i] = 'meal';
          }

          if( formattedTagName[i].toLowerCase() === 'goodthings' ) {
            theImg[i] = " ";

          } else {
            // Construct the image html element
            theImg[i] = "<img src='/PumpHouse/uploads/" + partOfImagePath + "/images/" + secondPartOfPath + "/" + formattedTagName[i] + ".png' class='img align-top img24x24'/>";

          }

          // Construct the lable html element (the tag name which appears next to the image)
          tagAndImg[i] = '<label class="lbl lbl-tag widthauto">' + theImg[i] + '<span class="align-top"> ' + formattedLabelName[i] + '</span>' + '</label>';

        } // End for loop

        // Join the image and label elements together, and contain within a div
        var joinedArr = '<div class="span width10 add-row1-bot">'+ tagAndImg.join(" ") + '</div>';

        // Return a string with all image/label pairs
        return joinedArr;

  } else {
    return " ";

  }
};

/**
 * @param customText - Text that is prepended before the date
 * @param setTime - Time that is appended to the date
 */
// Formats the date of a journal entry
Parser.formatDateCreated = function( calendarListItem, customText, setTime ) {

  customText = customText || '';

  if( setTime )  {
    setTime = ' - ' + the.formatTime( calendarListItem.dtStart );

  } else {
    setTime = '';

  }

  // If this namespace has a value use it
  if( calendarListItem.localtime.dtStart ) {
    return '<div class="journal-cog-badge journal-cog-due-date"><span>' + customText + '</span><time>' + the.formatDate( calendarListItem.localtime.dtStart)  + '</time>' + setTime + '</div>' ;

  // Or, if this namespace has a value use that instead
  } else if ( calendarListItem.dtStart  ) {
    return '<div class="journal-cog-badge journal-cog-due-date"><span>' + customText + '</span><time>' + the.formatDate( calendarListItem.dtStart )  + '</time>' + setTime + '</div>' ;

  // if no date value is available, return 'no value' msg
  } else {
    return '<span>No date available</span>' ;

  }
};

// Check if the todo item is complete or not
Parser.completedStatus = function( calendarListItem ) {
  return ( calendarListItem.completedOn ? '<div class="journal-cog-badge  journal-cog-status-completed"><span class="is-success- height2-">Status: Completed</span></div>' : '<div class="journal-cog-badge journal-cog-status-not-completed"><span class="is-warning- height2-">Status: Not completed</span></div>' );

};

// Reusable table method to create an *N* amount of rows sent by the card
Parser.createTable = function( cardProperties ) {

  var oddEven;
  var tableVar = "";
  var rowHeadingStart;
  var rowHeadingEnd;

  // Loop through collection
  for( var i = 0; i < cardProperties.length; i++ ) {
    if(i % 2) { oddEven = 'even'; } else { oddEven = 'odd'; }

    // Add a row
    tableVar += '<div class="flex-container-wrapper flex-container-parent-wrapper ' + oddEven +' ">';

      // Loop through each array in the collection
      for( var j = 0; j < cardProperties[ i ].length; j++ ) {

        // Make headings (1st column) bold and other columns not bold
        if( j === 0 ) {
          rowHeadingStart = '<p><strong>';
          rowHeadingEnd = '</p></strong>';

          tableVar += '<div class="flex-container-column">' + rowHeadingStart + cardProperties[ i ][ j ] + rowHeadingEnd  +'</div>';

        } else {
          rowHeadingStart = '<p>';
          rowHeadingEnd = '</p>';

          tableVar += '<div class="flex-container-column flex-col-2">' + rowHeadingStart + cardProperties[ i ][ j ] + rowHeadingEnd  +'</div>';
        }
      }

    // Close div
    tableVar += '</div>';
  }

  // Returned all rows filled with content
  return tableVar;
};

// Set the body text
Parser.bodyText = function( calendarListItem ) {

  if( calendarListItem.value.text ) {
    return '<p class="journal-body-text">' + calendarListItem.value.text + '</p>';

  } else if( calendarListItem.summary ) {
     return '<p class="journal-body-text">' + calendarListItem.summary + '</p>';

  } else if( calendarListItem.note ) {
     return '<p class="journal-body-text">' + calendarListItem.note + '</p>';

  } else {
    return "<span>No body text added</span>";

  }
};

// Iterate all comments made for this journal entry, creating a new object
// every iteration, then add that object to the collection
Parser.setCommentsMade = function( calendarListItem ) {

  // Container array which will contain our collection of objects
  var commentInfo = [];

  if( calendarListItem.comment ) {
    for( var i = 0; i < calendarListItem.comment.length; i++ ) {

      // Create a new object every iteration: this will hold each and every author/comment object
      var containerObj = {};

      // Store the comment author and their comment
      containerObj.author = calendarListItem.comment[ i ].fn || "No comment author";
      containerObj.content = calendarListItem.comment[ i ].text || "No comment content";

      // Add this object to the collection
      commentInfo[ i ] = containerObj;
    }
  }

  /**
   * Return a collection of objects: Each object in the collection contains
   * the author and their comments
   */
  return commentInfo;
};

/****************************************************************************************************************
 * // Journal entry cards
 * 
 * Adds content to a card.
 * Each card has different content.
 ****************************************************************************************************************/

 /**
  * Appointment journal entries
  */
 Parser.appointmentCard = function( calendarListItem ) {

   var startDateTable;
   var dueDateTable;
   var endDateTable;
   var attendees = '';

   var titleStr;
   var title;

   /**
    * Setup the summary that appers at the top of the card
    */
   // format the title
   if( calendarListItem.summary ) {
     titleStr = [ " {0} " ].join("");
     title = phil.printf( titleStr, calendarListItem.type );

   } else {
     title = " ";

   }

   /**
    * Setup the body content properties here
    */
   // Process the journal type
   var journalType = Parser.setJournalType( calendarListItem );

   // Process any tags that the journal entry has
   var joinedArr = Parser.manipulateTags( calendarListItem );

   // Process the user name
   var userName = Parser.setUserName( calendarListItem );

   // Process the user avatar
   var userAvatar = Parser.setUserAvatar();

   var dateCreated = Parser.formatDateCreated( calendarListItem, false, true );

   /**
    * Card specific content
    */

     // Check if journal item is completed or not
     var completedStatus = Parser.completedStatus( calendarListItem );

     if( calendarListItem.attendee.length > 0 ) {

       for( var i = 0; i < calendarListItem.attendee.length; i++ ) {
         attendees += calendarListItem.attendee[ i ].fn;

         if( i < calendarListItem.attendee.length - 1 ) {
          attendees += ', ';
         }

       }
     }

     // Check a start date has been added
     if( calendarListItem.dtStart ) {
       startDateTable = the.formatDate( calendarListItem.dtStart );

     } else {
       startDateTable = "<span>No start date added</span>";

     }

     // Check if a due date has been addded
     if( calendarListItem.value.dueDate ) {
       dueDateTable = the.formatTime( calendarListItem.value.dueDate );

     } else if( calendarListItem.dtStart ) {
       dueDateTable = the.formatTime( calendarListItem.dtStart );

     } else {
       dueDateTable = "<span>No start time added</span>";

     }

     // Check if an end date has been added
     if( calendarListItem.value.endDate ) {
       endDateTable = the.formatTime( calendarListItem.value.endDate );

     } else if( calendarListItem.dtEnd )  {
       endDateTable = the.formatTime( calendarListItem.dtEnd );

     } else {
       endDateTable = "<span>No end time added</span>";

     }

     var tableArr = [
       [
         "Appointment date",
         startDateTable
       ],
       [
         "Attendees",
         attendees
       ],
       [
         "From",
         dueDateTable
       ],
       [
         "To",
         endDateTable
       ]
     ];

     var responsiveLayout = Parser.createTable( tableArr );
     var noteCardText = Parser.bodyText( calendarListItem );

     /**
      * End Appointment specific content
      */

     // Process the comments
     var commentInfo = Parser.setCommentsMade( calendarListItem );

     /**
      * format body content of the card
      */
     var bodyStr = [
       "<div class='journal-cog-no-sub-title'>{0}</div>\n\n",
       "<div class='journal-cog-user-details'>{1}{2}</div>\n\n",
       "{3}\n\n",
       "{4}\n\n",
       "{5}\n\n"
     ].join("");
     var body = phil.printf(
       bodyStr,
       joinedArr, // 0
       userAvatar, // 1
       userName, // 2
       dateCreated, // 3
       responsiveLayout, // 4
       noteCardText // 5
     );

   // Format images
   var photoStr = [ "{0}" ].join("");
   var photo = phil.printf(photoStr, "/PumpHouse/uploads/system/JournalCog/images/journal_label_appointment_m.png");

   // Pass the journal item ID to the card
   var id = calendarListItem.id;

   res = {
       title: title,
       body: body,
       photo: photo,
       comments: commentInfo,
       id: id
   };

   return res;
 };


 /**
  * Diabetes journal entries
  */
 Parser.diabetesCard = function( calendarListItem ) {

   var timeTable;
   var readinValueTable;

   /**
    * Setup the summary that appers tat the top of the card
    */
   // format the title
   var titleStr = [ " {0} " ].join("");
   var titleSliced = calendarListItem.summary;
   titleSliced = titleSliced.slice(0, 30) + '...';
   var title = phil.printf( titleStr, titleSliced );

   /**
    * Setup the body content properties here
    */
   // Process the journal type
   var journalType = Parser.setJournalType( calendarListItem );

   // Process any tags that the journal entry has
   var joinedArr = Parser.manipulateTags( calendarListItem );

   // Process the user name
   var userName = Parser.setUserName( calendarListItem );

   // Process the user avatar
   var userAvatar = Parser.setUserAvatar();

   var dateCreated = Parser.formatDateCreated( calendarListItem, false, true );

   /**
    * Card specific content
    */

    // Check a start date has been added
    if( calendarListItem.value.time.label ) {
     timeTable = calendarListItem.value.time.label;

    } else {
     timeTable = "<span>No start date added</span>";

    }

     // Check a start date has been added
     if( calendarListItem.value.reading.value && calendarListItem.value.reading.units ) {
       readinValueTable = calendarListItem.value.reading.value + " " + calendarListItem.value.reading.units;

     } else {
       readinValueTable = "<span>No reading value added</span>";

     }

     var tableArr = [
       [
         "Time",
         timeTable
       ],
       [
         "Reading",
         readinValueTable
       ]
     ];

     var responsiveLayout = Parser.createTable( tableArr );


     // Set the journal items body text
     var noteCardText = Parser.bodyText( calendarListItem );
   /**
    * End card specific content
    */

   // Process the comments
   var commentInfo = Parser.setCommentsMade( calendarListItem );

   /**
    * format body content of the card
    */
   var bodyStr = [
     "{0}\n",
     "{1}\n\n",
     "<div class='journal-cog-user-details'>{2}{3}</div>\n\n",
     "{4}\n\n",
     "{5}\n\n",
     "{6}\n\n"
   ].join("");
   var body = phil.printf(
     bodyStr,
     journalType, // 0
     joinedArr, // 1
     userAvatar, // 2
     userName, // 3
     dateCreated, // 4
     responsiveLayout, // 5
     noteCardText // 6
   );

   // Format images
   var photoStr = [ "{0}" ].join("");
   var photo = phil.printf(photoStr, "/PumpHouse/uploads/system/JournalCog/images/journal_label_diabetes_m.png");

   // Pass the journal item ID to the card
   var id = calendarListItem.id;

   res = {
       title: title,
       body: body,
       photo: photo,
       comments: commentInfo,
       id: id
   };

   return res;
 };

 /**
  * Exercise journal entries
  */
 Parser.exerciseCard = function( calendarListItem ) {

   var nameValueTable;
   var durationValueTable;
   var debitValueTable;

   /**
    * Setup the summary that appers tat the top of the card
    */
   // format the title
   var titleStr = [ " {0} " ].join("");
   var title = calendarListItem.summary;
   title = phil.printf( titleStr, title );

   /**
    * Setup the body content properties here
    */
   // Process the journal type
   var journalType = Parser.setJournalType( calendarListItem );

   // Process any tags that the journal entry has
   var joinedArr = Parser.manipulateTags( calendarListItem );

   // Process the user name
   var userName = Parser.setUserName( calendarListItem );

   // Process the user avatar
   var userAvatar = Parser.setUserAvatar();

   var dateCreated = Parser.formatDateCreated( calendarListItem, false, true );

   /**
    * Card specific content
    */
   // Set the journal items body text
   var noteCardText = Parser.bodyText( calendarListItem );

     if( calendarListItem.value.name ) {
       nameValueTable = calendarListItem.value.name;

     } else {
       nameValueTable = "<span>No value added</span>";

     }

     if( calendarListItem.value.duration.value ) {
       durationValueTable = calendarListItem.value.duration.value;

     } else {
       durationValueTable = "<span>No duration value added</span>";

     }

     if( calendarListItem.value.calorieBank.debit.value && calendarListItem.value.calorieBank.debit.units ) {
       debitValueTable = calendarListItem.value.calorieBank.debit.value + " " + calendarListItem.value.calorieBank.debit.units;

     } else {
       debitValueTable = "<span>No clorie value added</span>";

     }

     var tableArr = [
       [
         "Name",
         nameValueTable
       ],
       [
         "Duration",
         durationValueTable
       ],
       [
         "Calories",
         debitValueTable
       ]
     ];

     var responsiveLayout = Parser.createTable( tableArr );
     /**
      * End card specific content
      */

   /**
    * End Appointment specific content
    */

   // Process the comments
   var commentInfo = Parser.setCommentsMade( calendarListItem );

   /**
    * format body content of the card
    */
   var bodyStr = [
     "{0}\n",
     "{1}\n\n",
     "<div class='journal-cog-user-details'>{2}{3}</div>\n\n",
     "{4}\n\n",
     "{5}\n\n",
     "{6}\n\n"
   ].join("");
   var body = phil.printf(
     bodyStr,
     journalType, // 0
     joinedArr, // 1
     userAvatar, // 2
     userName, // 3
     dateCreated, // 4
     responsiveLayout, // 5
     noteCardText // 6
   );

   // Format images
   var photoStr = [ "{0}" ].join("");
   var photo = phil.printf(photoStr, "/PumpHouse/uploads/system/JournalCog/images/journal_label_exercise_m.png");

   // Pass the journal item ID to the card
   var id = calendarListItem.id;

   res = {
       title: title,
       body: body,
       photo: photo,
       comments: commentInfo,
       id: id
   };

   return res;
 };


 /**
  * Meal journal entries
  */
 Parser.mealCard = function( calendarListItem ) {

   var creditValueTable;

   /**
    * Setup the summary that appers tat the top of the card
    */
   // format the title
   var titleStr = [ " {0} " ].join("");
   var titleSliced = calendarListItem.summary;
   titleSliced = titleSliced.slice(0, 30) + '...';
   var title = phil.printf( titleStr, titleSliced );

   /**
    * Setup the body content properties here
    */
   // Process the journal type
   var journalType = Parser.setJournalType( calendarListItem );

   // Process any tags that the journal entry has
   var joinedArr = Parser.manipulateTags( calendarListItem );

   // Process the user name
   var userName = Parser.setUserName( calendarListItem );

   // Process the user avatar
   var userAvatar = Parser.setUserAvatar();

   var dateCreated = Parser.formatDateCreated( calendarListItem, false, true );

   /**
    * Card specific content
    */

     if( calendarListItem.value.calorieBank.credit.value && calendarListItem.value.calorieBank.credit.units ) {
       creditValueTable = calendarListItem.value.calorieBank.credit.value + " " + calendarListItem.value.calorieBank.credit.units;

     } else {
       creditValueTable = "<span>No meal value added</span>";

     }

     var tableArr = [
       [
         "Meal",
         creditValueTable
       ]
     ];

     var responsiveLayout = Parser.createTable( tableArr );

     // Set the journal items body text
     var noteCardText = Parser.bodyText( calendarListItem );

   /**
    * End Appointment specific content
    */

   // Process the comments
   var commentInfo = Parser.setCommentsMade( calendarListItem );

   /**
    * format body content of the card
    */
   var bodyStr = [
     "{0}\n",
     "{1}\n\n",
     "<div class='journal-cog-user-details'>{2}{3}</div>\n\n",
     "{4}\n\n",
     "{5}\n\n",
     "{6}\n\n"
   ].join("");
   var body = phil.printf(
     bodyStr,
     journalType, // 0
     joinedArr, // 1
     userAvatar, // 2
     userName, // 3
     dateCreated, // 4
     responsiveLayout, // 5
     noteCardText // 6
   );

   // Format images
   var photoStr = [ "{0}" ].join("");
   var photo = phil.printf(photoStr, "/PumpHouse/uploads/system/JournalCog/images/journal_label_meal_m.png");

   // Pass the journal item ID to the card
   var id = calendarListItem.id;

   res = {
       title: title,
       body: body,
       photo: photo,
       comments: commentInfo,
       id: id
   };

   return res;
 };

/**
 * Body composition journal entries
 */
Parser.bodyCompositionCard = function( calendarListItem ) {

  /**
   * Setup the summary that appers tat the top of the card
   */
  // format the title
  var titleStr = [ " {0} " ].join("");
  var title = phil.printf( titleStr, calendarListItem.summary );

  /**
   * Setup the body content properties here
   */
  // Process the journal type
  var journalType = Parser.setJournalType( calendarListItem );

  // Process any tags that the journal entry has
  var joinedArr = Parser.manipulateTags( calendarListItem );

  // Process the user name
  var userName = Parser.setUserName( calendarListItem );

  // Process the user avatar
  var userAvatar = Parser.setUserAvatar();

  var dateCreated = Parser.formatDateCreated( calendarListItem, false, true );

  // Process the comments
  var commentInfo = Parser.setCommentsMade( calendarListItem );

  // Check if values have been added
  calendarListItem.value.weight.value = calendarListItem.value.weight.value ? Math.round(calendarListItem.value.weight.value  * 100) / 100 : "No weight added";

  calendarListItem.value.fatFreeMass.value = calendarListItem.value.fatFreeMass.value ? Math.round(calendarListItem.value.fatFreeMass.value * 100) / 100 : "No  fat free mass added";

  calendarListItem.value.fatMassWeight.value  = calendarListItem.value.fatMassWeight.value ? Math.round(calendarListItem.value.fatMassWeight.value * 100) / 100 : "No fat free weight added";

  calendarListItem.value.fatRatio.value = calendarListItem.value.fatRatio.value ? Math.round(calendarListItem.value.fatRatio.value * 100) / 100 : "No fat ration added";

  var tableArr = [
    [
      "Weight",
      calendarListItem.value.weight.value,
    ],
    [
      "Fat free mass",
      calendarListItem.value.fatFreeMass.value,
    ],
    [
      "Fat free weight",
      calendarListItem.value.fatMassWeight.value
    ],
    [
      "Fat ratio",
      calendarListItem.value.fatRatio.value
    ]
  ];

  var responsiveLayout = Parser.createTable( tableArr );

  var noteCardText = Parser.bodyText( calendarListItem );

  /**
   * format body content of the card
   */
  var bodyStr = [
    "{0}\n",
    "{1}\n\n",
    "<div class='journal-cog-user-details'>{2}{3}</div>\n\n",
    "{4}\n\n",
    "{5}\n\n",
    "{6}\n\n"
  ].join("");
  var body = phil.printf(
    bodyStr,
    journalType, // 0
    joinedArr, // 1
    userAvatar,  // 2
    userName,  // 3
    dateCreated, // 4
    responsiveLayout, // 5
    noteCardText // 6
  );

  // Format images
  var photoStr = [ "{0}" ].join("");
  var photo = phil.printf(photoStr, "/PumpHouse/uploads/system/JournalCog/images/journal_label_bodycomposition_m.png");

  res = {
      title: title,
      body: body,
      photo: photo,
      comments: commentInfo
  };

  return res;
};

/**
 * Moisture journal entries
 */
Parser.moistureCard = function( calendarListItem ) {

  var titleStr;
  var title;

  /**
   * Setup the summary that appers tat the top of the card
   */
  // format the title
  if( calendarListItem.summary ) {
    titleStr = [ " {0} " ].join("");
    title = phil.printf( titleStr, calendarListItem.summary );

  } else {
    title = " ";

  }

  /**
   * Setup the body content properties here
   */
  // Process the journal type
  var journalType = Parser.setJournalType( calendarListItem );

  // Process any tags that the journal entry has
  var joinedArr = Parser.manipulateTags( calendarListItem );

  // Process the user name
  var userName = Parser.setUserName( calendarListItem );

  // Process the user avatar
  var userAvatar = Parser.setUserAvatar();

  var dateCreated = Parser.formatDateCreated( calendarListItem, false, true );

  // Process the comments
  var commentInfo = Parser.setCommentsMade( calendarListItem );

  var noteCardText = Parser.bodyText( calendarListItem );

  /**
   * format body content of the card
   */
  var bodyStr = [
    "<div class='journal-cog-no-sub-title'>{0}</div>\n\n",
    "<div class='journal-cog-user-details'>{1}{2}</div>\n\n",
    "{3}\n\n",
  ].join("");
  var body = phil.printf(
    bodyStr,
    joinedArr, // 0
    userAvatar, // 1
    userName, // 2
    dateCreated // 3
  );

  // Format images
  var photoStr = [ "{0}" ].join("");
  var photo = phil.printf(photoStr, "/PumpHouse/uploads/system/JournalCog/images/journal_label_diabetes_m.png");

  // Pass the journal item ID to the card
  var id = calendarListItem.id;

  res = {
      title: title,
      body: body,
      photo: photo,
      comments: commentInfo,
      id: id
  };

  return res;
};


/**
 * Mood journal entries
 */
Parser.moodCard = function( calendarListItem ) {

  /**
   * Setup the summary that appers tat the top of the card
   */
  // format the title
  var titleStr = [ " {0} " ].join("");
  var titleSliced = calendarListItem.summary;
  titleSliced = titleSliced.slice(0, 30) + '...';
  var title = phil.printf( titleStr, titleSliced );

  /**
   * Setup the body content properties here
   */
  // Process the journal type
  var journalType = Parser.setJournalType( calendarListItem );

  // Process any tags that the journal entry has
  var joinedArr = Parser.manipulateTags( calendarListItem );

  // Process the user name
  var userName = Parser.setUserName( calendarListItem );

  // Process the user avatar
  var userAvatar = Parser.setUserAvatar();

  var dateCreated = Parser.formatDateCreated( calendarListItem, false, true );

  /**
   * Card specific content
   */

    // Set the journal items body text
    var noteCardText = Parser.bodyText( calendarListItem );
  /**
   * End Appointment specific content
   */

  // Process the comments
  var commentInfo = Parser.setCommentsMade( calendarListItem );

  /**
   * format body content of the card
   */
  var bodyStr = [
    "{0}\n",
    "{1}\n\n",
    "<div class='journal-cog-user-details'>{2}{3}</div>\n\n",
    "{4}\n\n",
    "{5}\n\n"
  ].join("");
  var body = phil.printf(
    bodyStr,
    journalType, // 0
    joinedArr, // 1
    userAvatar, // 2
    userName, // 3
    dateCreated, // 4
    noteCardText // 5
  );

  // Format images
  var photoStr = [ "{0}" ].join("");
  var photo = phil.printf(photoStr, "/PumpHouse/uploads/system/JournalCog/images/journal_label_mood_m.png");

  // Pass the journal item ID to the card
  var id = calendarListItem.id;

  res = {
      title: title,
      body: body,
      photo: photo,
      comments: commentInfo,
      id: id
  };

  return res;
};

/**
 * Note journal entries
 */
Parser.noteCard = function( calendarListItem ) {

  /**
   * Setup the summary that appers tat the top of the card
   */
  // format the title
  var titleStr = [ " {0} " ].join("");
  var titleSliced = calendarListItem.summary;
  titleSliced = titleSliced.slice(0, 30) + '...';
  var title = phil.printf( titleStr, titleSliced );

  /**
   * Setup the body content properties here
   */
  // Process the journal type
  var journalType = Parser.setJournalType( calendarListItem );

  // Process any tags that the journal entry has
  var joinedArr = Parser.manipulateTags( calendarListItem );

  // Process the user name
  var userName = Parser.setUserName( calendarListItem );

  // Process the user avatar
  var userAvatar = Parser.setUserAvatar();

  var dateCreated = Parser.formatDateCreated( calendarListItem, false, true );

  // Process the comments
  var commentInfo = Parser.setCommentsMade( calendarListItem );

  var noteCardText = Parser.bodyText( calendarListItem );

  /**
   * format body content of the card
   */
  var bodyStr = [
    "{0}\n",
    "{1}\n\n",
    "<div class='journal-cog-user-details'>{2}{3}</div>\n\n",
    "{4}\n\n",
    "{5}\n\n"
  ].join("");
  var body = phil.printf(
    bodyStr,
    journalType, // 0
    joinedArr, // 1
    userAvatar, // 2
    userName, // 3
    dateCreated, // 4
    noteCardText // 5
  );

  // Format images
  var photoStr = [ "{0}" ].join("");
  var photo = phil.printf(photoStr, "/PumpHouse/uploads/system/JournalCog/images/journal_label_note_m.png");

  // Pass the journal item ID to the card
  var id = calendarListItem.id;

  res = {
      title: title,
      body: body,
      photo: photo,
      comments: commentInfo,
      id: id
  };

  return res;
};

/**
 * Todo journal entries
 */
Parser.todoCard = function( calendarListItem ) {

  /**
   * Setup the summary that appers tat the top of the card
   */
  // format the title
  var titleStr = [ " {0} " ].join("");
  var titleSliced = calendarListItem.summary;
  titleSliced = titleSliced.slice(0, 30) + '...';
  var title = phil.printf( titleStr, titleSliced );

  /**
   * Setup the body content properties here
   */
  // Process the journal type
  var journalType = Parser.setJournalType( calendarListItem );

  // Process any tags that the journal entry has
  var joinedArr = Parser.manipulateTags( calendarListItem );

  // Process the user name
  var userName = Parser.setUserName( calendarListItem );

  // Process the user avatar
  var userAvatar = Parser.setUserAvatar();

  var dateCreated = Parser.formatDateCreated( calendarListItem, false, true );

  // Check if journal item is completed or not
  var completedStatus = Parser.completedStatus( calendarListItem );

  // Set the journal items body text
  var noteCardText = Parser.bodyText( calendarListItem );

  // Process the comments
  var commentInfo = Parser.setCommentsMade( calendarListItem );

  /**
   * format body content of the card
   */
  var bodyStr = [
    "{0}\n",
    "{1}\n\n",
    "<div class='journal-cog-user-details'>{2}{3}</div>\n\n",
    "{4}\n\n",
    "{5}\n\n",
    "{6}\n\n"
  ].join("");
  var body = phil.printf(
    bodyStr,
    journalType, // 0
    joinedArr, // 1
    userAvatar, // 2
    userName, // 3
    dateCreated, // 4
    completedStatus, // 5
    noteCardText // 6
  );

  // Format images
  var photoStr = [ "{0}" ].join("");
  var photo = phil.printf(photoStr, "/PumpHouse/uploads/system/JournalCog/images/journal_label_todo_m.png");

  // Pass the journal item ID to the card
  var id = calendarListItem.id;

  res = {
      title: title,
      body: body,
      photo: photo,
      comments: commentInfo,
      id: id
  };

  return res;
};

/**
 * Vitals journal entries
 */
Parser.vitalsCard = function( calendarListItem ) {

  var heartPulseValueTable;
  var diastolicBloodPressureValueTable;
  var systolicBloodPressureValueTable;

  /**
   * Setup the summary that appers tat the top of the card
   */
  // format the title
  var titleStr = [ " {0} " ].join("");
  var titleSliced = calendarListItem.summary;
  titleSliced = titleSliced.slice(0, 30) + '...';
  var title = phil.printf( titleStr, titleSliced );

  /**
   * Setup the body content properties here
   */
  // Process the journal type
  var journalType = Parser.setJournalType( calendarListItem );

  // Process any tags that the journal entry has
  var joinedArr = Parser.manipulateTags( calendarListItem );

  // Process the user name
  var userName = Parser.setUserName( calendarListItem );

  // Process the user avatar
  var userAvatar = Parser.setUserAvatar();

  var dateCreated = Parser.formatDateCreated( calendarListItem, false, true );

  /**
   * Card specific content
   */
    if( calendarListItem.value.heartPulse.value && calendarListItem.value.heartPulse.units ) {
      heartPulseValueTable = calendarListItem.value.heartPulse.value + " " + calendarListItem.value.heartPulse.units;

    } else {
      heartPulseValueTable = "<span>No heart pulse value added</span>";

    }

    if( calendarListItem.value.diastolicBloodPressure.value && calendarListItem.value.diastolicBloodPressure.units ) {
      diastolicBloodPressureValueTable = calendarListItem.value.diastolicBloodPressure.value + " " + calendarListItem.value.diastolicBloodPressure.units;

    } else {
      diastolicBloodPressureValueTable = "<span>No value added</span>";

    }

    if( calendarListItem.value.systolicBloodPressure.value && calendarListItem.value.systolicBloodPressure.units ) {
      systolicBloodPressureValueTable = calendarListItem.value.systolicBloodPressure.value + " " + calendarListItem.value.systolicBloodPressure.units;

    } else {
      systolicBloodPressureValueTable = "<span>No value added</span>";

    }

    var tableArr = [
      [
        "Heart pulse",
        heartPulseValueTable
      ],
      [
        "Diastolic Blood Pressure",
        diastolicBloodPressureValueTable
      ],
      [
        "Systolic Blood Pressure",
        systolicBloodPressureValueTable
      ]
    ];

    var responsiveLayout = Parser.createTable( tableArr );

    // Set the journal items body text
    var noteCardText = Parser.bodyText( calendarListItem );
  /**
   * End Appointment specific content
   */

  // Process the comments
  var commentInfo = Parser.setCommentsMade( calendarListItem );

  /**
   * format body content of the card
   */
  var bodyStr = [
    "{0}\n",
    "{1}\n\n",
    "<div class='journal-cog-user-details'>{2}{3}</div>\n\n",
    "{4}\n\n",
    "{5}\n\n",
    "{6}\n\n"
  ].join("");
  var body = phil.printf(
    bodyStr,
    journalType, // 0
    joinedArr, // 1
    userAvatar, // 2
    userName, // 3
    dateCreated, // 4
    responsiveLayout, // 5
    noteCardText // 5
  );

  // Format images
  var photoStr = [ "{0}" ].join("");
  var photo = phil.printf(photoStr, "/PumpHouse/uploads/system/JournalCog/images/journal_label_vitals_m.png");

  // Pass the journal item ID to the card
  var id = calendarListItem.id;

  res = {
      title: title,
      body: body,
      photo: photo,
      comments: commentInfo,
      id: id
  };

  return res;
};

/**
 * Print the title and summary which consistent between all journal entries
 */
Parser.defaultCard = function( calendarListItem ) {
  var singleCalendarListItem = {
      title: calendarListItem.type,
      sub: calendarListItem.summary
  };

  return singleCalendarListItem;
};
