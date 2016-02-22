#!/bin/bash
if [[ $CORDOVA_CMDLINE =~ release ]]; then
  echo "Copying over cordova.js files"
else
  echo "Copying over cordova.js files"
  cp -r ./vendor/cordova* ./www/
fi
