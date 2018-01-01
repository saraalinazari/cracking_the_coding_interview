describe('myIsUnique Tests', function() {

//====================================================================================================
/* --- Test Setup --- */
//====================================================================================================





//====================================================================================================
/* --- Tests --- */
//====================================================================================================

    describe('validation tests', function() {
        
        beforeEach(function(){
            let result = false;
        })

        it('it should return true if the string contains all unique characters', function() {

            let validStrings = ['abc', 'abcdef', 'abc d', 'noduplicates', '123', '1234567890', ',./;\'[]'];

            validStrings.forEach(function(string){
                result = myIsUnique(string);
                expect(result).toBeTruthy();
            });
            
        });
    
        it('it should return false if the string contains any duplicate characters', function() {

            let invalidStrings = ['abca', 'abcdefe', 'abc d ', 'oneduplicate', 'twosduplicate', '12345678901', ',./;\'[],'];

            invalidStrings.forEach(function(string){
                result = myIsUnique(string);
                expect(result).toBeFalsy();
            });
            
        });

    });

    describe('iteration value checking tests', function() {

        it('the second comparator (\'j\') should always be one increment higher than the first comparator (\'i\')', function(){

        });

        it('\'i\') should never be used for element value comparison if reaches string length', function() {

        });

        it('\'j\') should never be used for element value comparison if reaches string length', function() {

        });
    });

    describe('error handling tests', function() {

        it('should reject any parameter value that is not a string', function() {

            let invalidTypes = [null, undefined, true, false, [1, 2, 3], {one: 1}, 1, 0, 0.1, Infinity, !Infinity]

            let error;

            invalidTypes.forEach(function(type){
                try {
                    myIsUnique(type);
                } catch(e) {
                    error = e;
                }

                expect(error instanceof TypeError).toBeTruthy();
            });

        });

    });

    

    
});