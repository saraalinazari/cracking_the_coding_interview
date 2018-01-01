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
            result = myIsUnique('abc');
            expect(result).toBeTruthy();

            result = myIsUnique('abcdef');
            expect(result).toBeTruthy();

            result = myIsUnique('abc d');
            expect(result).toBeTruthy();

            result = myIsUnique('noduplicates');
            expect(result).toBeTruthy();

            result = myIsUnique('123');
            expect(result).toBeTruthy();

            result = myIsUnique('1234567890');
            expect(result).toBeTruthy();

            result = myIsUnique(',./;\'[]');
            expect(result).toBeTruthy();
        });
    
        it('it should return false if the string contains any duplicate characters', function() {
            result = myIsUnique('abca');
            expect(result).toBeFalsy();

            result = myIsUnique('abcdefe');
            expect(result).toBeFalsy();

            result = myIsUnique('abc d ');
            expect(result).toBeFalsy();

            result = myIsUnique('oneduplicate');
            expect(result).toBeFalsy();

            result = myIsUnique('twosduplictes');
            expect(result).toBeFalsy();

            result = myIsUnique('12345678901');
            expect(result).toBeFalsy();

            result = myIsUnique(',./;\'[],');
            expect(result).toBeFalsy();
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

        });

    });

    

    
});