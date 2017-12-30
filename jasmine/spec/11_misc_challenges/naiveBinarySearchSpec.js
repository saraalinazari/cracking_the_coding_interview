//ITERATIVE TESTS

//define global scope test variables/funtions
init();

describe('binarySearch (Iterative Version) Test Suite', function () {

  describe('build tests', function () {

    it('should be able to find the matching value index of the original array and return this', function() {

      let result = binarySearch([1, 2, 3, 4, 5], 3, 'iterative');
      expect(result).toEqual(2);
    
      result = binarySearch([20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], 21, 'iterative');
      expect(result).toEqual(1);
    
      result = binarySearch(['a', 'b', 'c', 'd', 'e'], 'c', 'iterative');
      expect(result).toEqual(2);

      result = binarySearch([1, 2, 4, 5, 6, 8], 5, 'iterative');
      expect(result).toEqual(3);

    });

    it('it should be able to work out the minimal number of searches required of any index', function () {
      expect(testHelper.maximumSearches(4)).toEqual(2);
      expect(testHelper.maximumSearches(8)).toEqual(3);
      expect(testHelper.maximumSearches(16)).toEqual(4);
      expect(testHelper.maximumSearches(32)).toEqual(5);
      expect(testHelper.maximumSearches(64)).toEqual(6);
      expect(testHelper.maximumSearches(1024)).toEqual(10);
      expect(testHelper.maximumSearches(240000)).toEqual(18);
    });

    it('the number of actual searches required should match the predicted number of searches', function () {

      function createLargeNumArray() {
        let largeNumArray = [];
        var i = 0;
        while (i < 240000) {
          largeNumArray[i] = i;
          i++;
        }

        return largeNumArray;
      }

      function areSearchesWithinPredictedRange() {
        return rangeOfResults.includes(testHelper.searches)
      }

      let largeNumArray = createLargeNumArray();

      let rangeOfResults = [15, 16, 17, 18]


      binarySearch(largeNumArray, 1, 'iterative')
      expect(areSearchesWithinPredictedRange()).toBeTruthy();

      binarySearch(largeNumArray, 10, 'iterative')
      expect(areSearchesWithinPredictedRange()).toBeTruthy();

      binarySearch(largeNumArray, 100, 'iterative')
      expect(areSearchesWithinPredictedRange()).toBeTruthy();

      binarySearch(largeNumArray, 1000, 'iterative')
      expect(areSearchesWithinPredictedRange()).toBeTruthy();

      binarySearch(largeNumArray, 10000, 'iterative')
      expect(areSearchesWithinPredictedRange()).toBeTruthy();

      binarySearch(largeNumArray, 100000, 'iterative')
      expect(areSearchesWithinPredictedRange()).toBeTruthy();
    });

  });

  describe('runtime tests', function () {

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

    it('it should be able to detect unsorted arrays and ask the user for sorting parameters', function () {
      fail();
    });

  });
});


//RECURSIVE TESTS

describe('binarySearch (Recursive Version) Test Suite', function () {

  describe('build tests', function () {

    it('RECURSIVE ONLY - it should call itself with a new array that is the original array split at the inital division (split to the left)', function () {
      fail();
    });

    it('RECURSIVE ONLY - it should call itself with a new array that is the original array split at the inital division (split to the right)', function () {
      fail();
    });

    it('it should be able to work out the maximum number of searches required of any index', function () {
      fail();
    });

    it('the number of actual searches required should match the predicted number of searches', function () {
      fail();
    });

  });

  describe('runtime tests', function () {


    it('it should be able to process large arrays quickly', function () {
      fail();
    });

    it('it should be able to process large arrays quickly in comparison to a dumb linear algorithm', function () {
      fail();
    });

  });

  describe('error handling tests', function () {

    describe('invalid parameters', function () {

      it('it should require the user to choose iterative or recursive functionality before processing', function () {
        fail();
      });

      it('it should be able to detect unsorted arrays and ask the user for sorting parameters', function () {
        fail();
      });

    });
  });
});

function init() {
  let sortedArray = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18,
    19, 20
  ];
  
  let unsortedArray = [
    17, 2, 12, 16, 10, 6, 1, 14, 9, 
    8, 5, 11, 19, 15, 3, 7, 20, 4, 
    18, 13
  ];
  
  let largeNumArray = [];
  var i = 0;
  while (i < 240000) {
    largeNumArray[i] = i;
    i++;
  }
  
  //random array of strings generator
  function generateWords() {
    var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var words = [];
      while(!words.includes('abcd')) {
          var word = '';
          for (var l = 0; l < 4; l++) {
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
}

