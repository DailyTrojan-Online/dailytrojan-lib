# dailytrojan-lib
 A Library of common functions used throughout Daily Trojan projects, including Games

This can either be imported from CDN, or imported as a Git Submodule for faster loading times.

# How To Use
## Submodule
Run the following command in the root folder of your project:
```
git submodule add https://github.com/DailyTrojan-Online/dailytrojan-lib
```
This will check out the library and add it as a submodule to your folder, in the directory of `/dailytrojan-lib`

If you would like to update the library, run:
```
git submodule update --remote
```

## Importing Styles
To import the Daily Trojan Games common styles, simply import the `gameStyles.css` file from the library with the following tag:
```html
<link rel="stylesheet" href="./dailytrojan-lib/gameStyles.css">
```
## Importing Scripts
To import the Daily Trojan Games Core script, simply import the `gameCore.js` file from the library:
```html
<script src="./dailytrojan-lib/gamestyles.css/gameCore.js" defer></script> 
```
