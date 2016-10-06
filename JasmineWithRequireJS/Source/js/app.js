var App = App || {};

define([
   "jquery",
   "core/Storage",
   "core/Log"
], function($, Storage, Log){
    Log.write('app loaded');

    var init = function() {
        Log.write('APP INIT OK!');
    };
    
    return {
        init: init
    };
});