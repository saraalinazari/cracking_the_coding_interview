//ITERATIVE TESTS

describe('naiveBinarySearch (Iterative Version) Test Suite', function () {

  describe('build tests', function () {

    it('it should accept the array to be sorted', function () {
      naiveBinarySearch([1, 2, 3]);
      expect(testData.passedArray).toEqual([1, 2, 3]);
    });

    it('it should accept the value being searched for', function () {
      naiveBinarySearch([1, 2, 3], 3);
      expect(testData.searchingFor).toEqual(3);
    });

    it('it should accept the recursion option parameter', function () {
      naiveBinarySearch([1, 2, 3], 3, 'iterative');
      expect(testData.chosenProcess).toEqual('iterative');
    });

    xit('should return a integer index value that is less than the length of the array being passed in', function () {
      fail();
    });

    it('should be able to re-assign the end value if the first middle value is higher than the desired value', function () {
      fail();
    });

    it('should be able to find the matching value index of the original array and return this', function() {
      let result = naiveBinarySearch([1, 2, 3], 3, 'iterative');
      expect(result).toEqual(2);
    });

    it('it should be able to work out the minimal number of searches required of any index', function () {
      let array = [];
      let i = 0;
      while (i < 240000) {
	      array[i] = i;
	      i++;
      }

      let rangeOfResults = [15, 16, 17, 18]

      naiveBinarySearch(array, 1, 'iterative')
      expect(rangeOfResults.includes(testData.searches)).toBeTruthy();

      naiveBinarySearch(array, 10, 'iterative')
      expect(rangeOfResults.includes(testData.searches)).toBeTruthy();

      naiveBinarySearch(array, 100, 'iterative')
      expect(rangeOfResults.includes(testData.searches)).toBeTruthy();

      naiveBinarySearch(array, 1000, 'iterative')
      expect(rangeOfResults.includes(testData.searches)).toBeTruthy();

      naiveBinarySearch(array, 10000, 'iterative')
      expect(rangeOfResults.includes(testData.searches)).toBeTruthy();

      naiveBinarySearch(array, 100000, 'iterative')
      expect(rangeOfResults.includes(testData.searches)).toBeTruthy();

    });

    it('the number of actual searches required should match the predicted number of searches', function () {
      naiveBinarySearch([1, 2, 3], 3, 'iterative');
      expect(testData.searches).toEqual(2);
    });

  });

  describe('runtime tests', function () {

    it('should do this...', function () {
      fail();
    });

    //generate large numeric array
    let hugeNumArray = [];
    for (var i = 0; i < 100000; i++) {
      hugeNumArray[i] = i + 1;
    }

    //generate large string array
    let hugeStrArray = generateWords();

    function generateWords() {
      var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
      var words = [];
      for (var w = 0; w < 100000; w++) {
        var word = '';
        for (var l = 0; l < 6; l++) {
          var num = getRndInteger(1, 26);
          var letter = letters[num];
          word = word.concat(letter);
        }
        words.push(word);
      }
      return words;
    };

    function getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    };

    it('it should be able to process large arrays quickly', function () {
      fail();
    });

    it('it should be able to process large arrays quickly in comparison to a dumb linear algorithm', function () {
      fail();
    });
  });
});

describe('error handling tests', function () {

  describe('invalid parameters', function () {

    it('something', function () {
      fail();
    });

    it('it should be able to detect unsorted arrays and ask the user for sorting parameters', function () {
      fail();
    });

    it('', function () {
      fail();
    });
  });
});




//RECURSIVE TESTS

describe('naiveBinarySearch (Recursive Version) Test Suite', function () {

  describe('build tests', function () {

    it('it should accept the array to be sorted', function () {
      naiveBinarySearch([1, 2, 3]);
      expect(testData.passedArray).toEqual([1, 2, 3]);
    });

    it('it should accept the value being searched for', function () {
      naiveBinarySearch([1, 2, 3], 3);
      expect(testData.searchingFor).toEqual(3);
    });

    it('it should accept the recursion option parameter', function () {
      naiveBinarySearch([1, 2, 3], 3, 'recursive');
      expect(testData.chosenProcess).toEqual('recursive');
    });

    xit('should return a integer index value that is less than the length of the array being passed in', function () {
      fail();
    });

    it('RECURSIVE ONLY - it should call itself with a new array that is the original array split at the inital division (split to the left)', function () {
      fail();
    });

    it('RECURSIVE ONLY - it should call itself with a new array that is the original array split at the inital division (split to the right)', function () {
      fail();
    });

    it('it should be able to work out the minimal number of searches required of any index', function () {
      fail();
    });

    it('the number of actual searches required should match the predicted number of searches', function () {
      fail();
    });

  });

  describe('runtime tests', function () {

    it('should do this...', function () {
      fail();
    });

    //generate large numeric array
    let hugeNumArray = [];
    for (var i = 0; i < 100000; i++) {
      hugeNumArray[i] = i + 1;
    }

    //generate large string array
    let hugeStrArray = generateWords();

    function generateWords() {
      var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
      var words = [];
      for (var w = 0; w < 100000; w++) {
        var word = '';
        for (var l = 0; l < 6; l++) {
          var num = getRndInteger(1, 26);
          var letter = letters[num];
          word = word.concat(letter);
        }
        words.push(word);
      }
      return words;
    }

    function getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    it('it should be able to process large arrays quickly', function () {
      fail();
    });

    it('it should be able to process large arrays quickly in comparison to a dumb linear algorithm', function () {
      fail();
    });

  });

  describe('error handling tests', function () {

    describe('invalid parameters', function () {

      it('something', function () {
        fail();
      });

      it('it should be able to detect unsorted arrays and ask the user for sorting parameters', function () {
        fail();
      });

      it('', function () {
        fail();
      });

    });
  });

});

