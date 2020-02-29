'use strict';

module.exports = {
  "plugins": [],
  "recurseDepth": 10,
  "source": {
      "include": ["src/js"],
      //"exclude": ["myProject/lib/ignore.js"],
      //"includePattern": ".+\\.js(doc|x)?$",
      //"excludePattern": "(^|\\/|\\\\)_"
  },
  "opts": {
    //"template": "templates/default",  // same as -t templates/default
    "encoding": "utf8",               // same as -e utf8
    "destination": "./documentation/",
    "recurse": true,
    //"tutorials": "path/to/tutorials",
  },
  "sourceType": "module",
  "tags": {
      "allowUnknownTags": true,
      "dictionaries": ["jsdoc","closure"]
  },
  "templates": {
      "cleverLinks": false,
      "monospaceLinks": false
  }
};