//TEST SPEC
define([
    "core/Namespace",
    "core/Log"
], function(Namespace, Log){ 
    describe("Namespace", function() {
        var namespace = 'Rock.is.loud';
        var value = true;
        
        it("set a namespace hierarchy and retrieve it", function () {
            Log.write('Run: Namespace set a namespace hierarchy and retrieve it');
            //set
            Namespace.set(namespace, value);
            
            //get
            var retrievedValue = Namespace.get(namespace);
            
            //test
            expect(retrievedValue).toEqual(value);
        });
    });
});