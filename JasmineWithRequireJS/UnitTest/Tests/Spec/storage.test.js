//TEST SPEC
define([
    "core/Storage",
    "core/Log"
], function(Storage, Log){
    describe("Storage", function() {
        var key = 'test-storage-set';
        var value = 'YEAH!';
        
        it("stores a value in localStorage and retrieves it", function () {
            Log.write('Run: Storage stores a value in localStorage and retrieves it');

            //store a value in localStorage
            Storage.set(key, value);
            
            //retrieve it
            var storedValue = Storage.get(key);
            expect(storedValue).toEqual(value);
        });
        
        it("returns true is key exists", function(){
            Log.write('Run: Storage returns true is key exists');
            var exists = Storage.has(key);
            expect(exists).toEqual(true);
        });
        
        it("returns false is key not exists", function(){
            Log.write('Run: Storage returns false is key not exists');
            var exists = Storage.has('non-existing-key');
            expect(exists).toEqual(false);
        });
        
        it("removes a key", function(){
            Log.write('Run: Storage removes a key');
            Storage.remove(key);
            var exists = Storage.has(key);
            expect(exists).toEqual(false);
        });
        
        it("removes all existing keys", function(){
            Log.write('Run: Storage removes all existing keys');
            //first add some keys
            Storage.set('tempKey1', 'hey one!');
            Storage.set('tempKey2', 'hey two!');
            Storage.set('tempKey3', 'hey three!');
            
            //remove all keys
            Storage.removeAll(key);
            
            //test
            expect( Storage.has('tempKey1') ).toEqual(false);
            expect( Storage.has('tempKey2') ).toEqual(false);
            expect( Storage.has('tempKey3') ).toEqual(false);
        });
    });
});