# Summary
Journal enables users as well as the system to create entries of different types. Each entry is represented as a card, and displays various information specifc to that card. Users can add, edit, delete and tag entries.

# main.html
Template that handles data coming from main.js and uses Knockout.js to display in the UI.

# main.css
Styles used for the application.

# main.js
The main file used for creating an application.

## my
Core framework object that contains all core and specific methods.

## Cards
Cards within the system are based on cards with the [Google Material Design](https://material.io/design/components/cards.html#) framework.
 
## Pulse requests (my.$pulse)
These are calls to the backend to initiate data retrieval.

## Pulse responses (my.$on( "x...response", my.fnName ))
These handle responses where data is incoming from the backend.

## Framework method
These are core methods that are required for every cog to have.

## my.model
An object supplied to the main.html template for the Knockout UI library to use.

## aosactions
Generic library functions available for cogs to use.

## backpack
A mechanism within the framework used for passing data to different parts of the application.

## phil
UI helper library for use within the framework.

# parser.js
Library that handles the content for each card.

# resources.json
Contains specificaton for the application such as external JS files, and the pulse requests and responses.

# lang.json
Language file for use with i18n bindings.

# test-pulse-responses folder
Contains the mock objects (json data) used during development. See main.js my.calendarListPulseResponse = function( pulse ) {...}

# images folder
Images mainly used by cards.
