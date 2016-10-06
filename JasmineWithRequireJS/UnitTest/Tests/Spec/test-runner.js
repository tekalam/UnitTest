(function () {
    'use strict';

    // Configure RequireJS to shim Jasmine
    require.config({
        baseUrl: "../../../Source/js/",
        paths: {
            'jasmine': '../../UnitTest/Scripts/jasmine/jasmine',
            'jasmine-html': '../../UnitTest/Scripts/jasmine/jasmine-html',
            'boot': '../../UnitTest/Scripts/jasmine/boot',
            'spec': '../../UnitTest/Tests/Spec'
        },
        shim: {
            'jasmine': {
                exports: 'window.jasmineRequire'
            },
            'jasmine-html': {
                deps: ['jasmine'],
                exports: 'window.jasmineRequire'
            },
            'boot': {
                deps: ['jasmine', 'jasmine-html'],
                exports: 'window.jasmineRequire'
            }
        }
    });

    // Define all of your specs here. These are RequireJS modules.
    var specs = [
      'spec/namespace.test',
      'spec/storage.test'
    ];

    // Load Jasmine - This will still create all of the normal Jasmine browser globals unless `boot.js` is re-written to use the
    // AMD or UMD specs. `boot.js` will do a bunch of configuration and attach it's initializers to `window.onload()`. Because
    // we are using RequireJS `window.onload()` has already been triggered so we have to manually call it again. This will
    // initialize the HTML Reporter and execute the environment.
    require(['boot'], function () {

        // Load the specs
        require(specs, function () {

            // Initialize the HTML Reporter and execute the environment (setup by `boot.js`)
            window.onload();
        });
    });
})();