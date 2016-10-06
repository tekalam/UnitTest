/*global require*/
'use strict';

//namespace
var App = {};

// Require.js allows us to configure shortcut alias
require.config({
    // The shim config allows us to configure dependencies for
    // scripts that do not call define() to register a module
    shim: {
        jquery: {
            exports: 'jquery'
        },
        bootstrap: {
            exports: 'bootstrap',
            deps: ['jquery']
        }
    },
    paths: {
        jquery: 'lib/jquery-1.9.1.min',
        bootstrap: 'lib/bootstrap.min'
    }
});

require([
    'app',
    'core/Log',
    'bootstrap'
], function (App, Log) {
    Log.write('MAIN loaded');
    App.init();
});
