# Smart Client Crossplatform application

SMART Client App using Phonegap, Cordova and Ember.js

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)
* [Phonegap](http://docs.phonegap.com/references/desktop-app/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

### Browser

* `ember serve`
* Visit your app at [http://localhost:9000](http://localhost:9000).

### Phone

* Install the development app from phonegap from the respective app store.
* Start your Phonegap deskrop application, pointing at the repo's main folder.
* Connect on your phone to the port you specified in the desktop app, via the local network.

### Building

* `cordova build` (development)
* `cordova build windows` (windows app)
* `cordova build android` (android app)

### Deploying

TODO

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
  * [Cordova CLI reference](http://docs.phonegap.com/en/edge/guide_cli_index.md.html#The%20Command-Line%20Interface)
* [Build for Windows Phone](https://cordova.apache.org/docs/en/4.0.0/guide/platforms/wp8/)
* [Cordova hooks](https://cordova.apache.org/docs/en/dev/guide/appdev/hooks/)
