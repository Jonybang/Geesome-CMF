// =====================================
// ======= General libs ================
// =====================================
global._ = require('lodash');
global.moment = require('moment');

// =====================================
// ======= Angular libs ================
// =====================================

require('angular');
require('angular-i18n/ru');

require('angular-animate');
require('angular-aria');
require('angular-messages');
require('angular-sanitize');

require('angular-resource');
require('angular-moment');

require('angular-ui-router');

require('ng-file-upload');

//require('angular-material');
//temporary fix:
require('./vendor/angular-material.min.js');

require('wizmarkdown');
require('angular-drag-and-drop-lists');

require('./vendor/angular-ckeditor.js');
require('./vendor/angular-debounce.min.js');
require('./vendor/material-angular-paging.min.js');