## My version of the metrics cog
This project is my take on how to develop the HIV metrics cog.

I have coded it in a way that reflects my experience with JS and aOS.

### This branch
In this branch i have refactored the code mainly in main.js and main.html.

I have borrowed some code from the release version to help improve and refine
how the cog works.

Notably the most important code borrowed was:
- main.js

```
my.processReports = function( pulse ) { // prety much all code };
```

```
my.$on( "pumpCo.user.report.group.get.response", my.processReports );
```

```
my.$on( "postModelCreate", function(){
        // **property** {boolean} empty Used to determine if any / no reports are available
        my.model.empty = phil.observe( true );
        // **property** {Array} tables The can be any number of tables
        my.model.reports = phil.observe([]);
    } );
```
