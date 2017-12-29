describe('naiveBinarySearch (Iterative Version) Test Suite', function() {

  describe('build tests', function() {

    it('it should accept the array to be sorted', function() {
      fail();
    });

    it('it should accept the value being searched for', function() {
      fail();
    });

    it('it should accept the recursion option parameter', function() {
      fail();
    });

    it('should return a integer index value that is less than the length of the array being passed in', function() {

    });

    it('should be able to re-assign the end value if the first middle value is higher than the desired value', function() {

    });

    it('should be able to re-assign the start value if the first middle value is higher than the desired value', function() {

    });

    it('RECURSIVE ONLY - it should call itself with a new array that is the original array split at the inital division (split to the left)', function() {

    });

    it('RECURSIVE ONLY - it should call itself with a new array that is the original array split at the inital division (split to the right)', function() {

    });

    xit('it should be able to work out the minimal number of searches required of any index', function() {
      fail();
    });

    xit('the number of actual searches required should match the predicted number of searches', function() {

    });

  });

  describe('runtime tests', function() {

    it('should do this...', function() {
      fail();
    });

    //generate large numeric array
    let hugeNumArray = [];
    for (var i = 0; i < 100000; i++) {
      hugeNumArray[i] = i + 1;
    }

    //generate large string array
    let hugeStrArray = [[]];

    function generateWord() {
      var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
      for (var w = 0; w < 100000; w++) {
        for (var l = 0; l < 6; l++) {
          var num = getRndInteger(1, 26);
          var letter = letters[num];
          hugeStrArray[w][l] = letter;
        }
      }
    }

    function getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min) ) + min;
    }

    it('it should be able to process large arrays quickly', function() {
      fail();
    });

    it('it should be able to process large arrays quickly in comparison to a dumb linear algorithm', function() {
      fail();
    });

  });

  describe('error handling tests', function() {

    describe('invalid parameters', function() {

      it('')

    });

    it('it should be able to detect unsorted arrays and ask the user for sorting parameters', function() {
      fail();
    });

    it('', function() {

    });

  });

});