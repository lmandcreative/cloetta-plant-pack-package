
# STATIC 

Basically this is a static webpage, a one-pager. There is only one actual page template: index.php, that is needed. Languages are injected with javascript from json files.

## Languages

Assets/languages folder contains json-files for each language.
Js/localisation.js file has skripts that change the language.

When we add a new language, we need to 
1. creat json-file
2. edit localisation.js and add the language
3. edit partials/header.php to add the language to the dropdown in the header.

## Scripts

All scripts are in the js-folder except jquery that is the only external link.