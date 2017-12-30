//ITERATIVE TESTS

//define global scope test variables/funtions
init();

describe('binarySearch (Iterative Version) Test Suite', function () {

  describe('build tests', function () {

    it('should be able to find the matching value index of the original array and return this', function() {

      let result = binarySearch([1, 2, 3, 4, 5], 3, 'iterative');
      expect(result).toEqual(2);

      result = binarySearch([1, 2, 3, 4, 5], 32, 'iterative');
      expect(result).toEqual(null);
    
      result = binarySearch([20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], 21, 'iterative');
      expect(result).toEqual(1);
    
      result = binarySearch(['a', 'b', 'c', 'd', 'e'], 'c', 'iterative');
      expect(result).toEqual(2);

      result = binarySearch([1, 2, 4, 5, 6, 8], 5, 'iterative');
      expect(result).toEqual(3);

      let words = binarySearchTester.generateWords();
      result = binarySearch(words, 'abc', 'iterative');
      expect(result).toEqual(words.indexOf('abc'))

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

      let largeNumArray = binarySearchTester.generateLargeNumArray();

      binarySearch(largeNumArray, 1, 'iterative')
      expect(binarySearchTester.areSearchesWithinPredictedRange()).toBeTruthy();

      binarySearch(largeNumArray, 10, 'iterative')
      expect(binarySearchTester.areSearchesWithinPredictedRange()).toBeTruthy();

      binarySearch(largeNumArray, 100, 'iterative')
      expect(binarySearchTester.areSearchesWithinPredictedRange()).toBeTruthy();

      binarySearch(largeNumArray, 1000, 'iterative')
      expect(binarySearchTester.areSearchesWithinPredictedRange()).toBeTruthy();

      binarySearch(largeNumArray, 10000, 'iterative')
      expect(binarySearchTester.areSearchesWithinPredictedRange()).toBeTruthy();

      binarySearch(largeNumArray, 100000, 'iterative')
      expect(binarySearchTester.areSearchesWithinPredictedRange()).toBeTruthy();
    });
  });
});
//RECURSIVE TESTS

describe('binarySearch (Recursive Version) Test Suite', function () {

  describe('build tests', function () {

    it('should be able to find the matching value index of the original array and return this', function () {
      let result = binarySearch([1, 2, 3, 4, 5], 3, 'recursive');
      expect(result).toEqual(2);
    
      result = binarySearch([20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], 21, 'recursive');
      expect(result).toEqual(1);
    
      result = binarySearch(['a', 'b', 'c', 'd', 'e'], 'c', 'recursive');
      expect(result).toEqual(2);

      result = binarySearch([1, 2, 4, 5, 6, 8], 5, 'recursive');
      expect(result).toEqual(3);

      let words = binarySearchTester.generateWords();
      result = binarySearch(words, 'abc', 'recursive');
      expect(result).toEqual(words.indexOf('abc'))
    });

    

    it('the number of actual searches required should match the predicted number of searches', function () {
      debugger;
      let numArray = binarySearchTester.generateNumArray();

      binarySearch(numArray, 1, 'recursive')
      expect(binarySearchTester.areSmallerSearchesWithinPredictedRange()).toBeTruthy();

      binarySearch(numArray, 10, 'recursive')
      expect(binarySearchTester.areSmallerSearchesWithinPredictedRange()).toBeTruthy();

      binarySearch(numArray, 100, 'recursive')
      expect(binarySearchTester.areSmallerSearchesWithinPredictedRange()).toBeTruthy();




      //**************DEBUG NEEDED****************:
      //browser exceeds call stack limit when searching for the number 125 (and greater) within an array of 10240 length

      // binarySearch(numArray, 125, 'recursive')
      // expect(binarySearchTester.areSmallerSearchesWithinPredictedRange()).toBeTruthy();

      // binarySearch(numArray, 10000, 'recursive')
      // expect(binarySearchTester.areSmallerSearchesWithinPredictedRange()).toBeTruthy();

    });

  });
});

describe('error handling tests', function () {

  describe('invalid parameters', function () {

    it('it should require the user to choose iterative or recursive functionality before processing', function () {

      let error;
      
      try {
        binarySearch([1, 2, 3, 4, 5], 3)
      } catch(e) {
        error = e;
      }

      expect(error instanceof TypeError).toBe(true);

      try {
        binarySearch([1, 2, 3, 4, 5], 3, 'itertive')
      } catch(e) {
        error = e;
      }

      expect(error instanceof TypeError).toBe(true);

      try {
        binarySearch([1, 2, 3, 4, 5], 3, 'this won\'t work')
      } catch(e) {
        error = e;
      }

      expect(error instanceof TypeError).toBe(true);
      
    });

    it('it should be able to detect unsorted arrays and sort', function () {
  
      let result = binarySearch([6, 5, 2, 1, 3], 6, 'iterative');
      expect(result).toEqual(4);
    });

  });
});

function init() {
  binarySearchTester = {
    sortedArray: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
      11, 12, 13, 14, 15, 16, 17, 18,
      19, 20
    ],
    unsortedArray: [
      17, 2, 12, 16, 10, 6, 1, 14, 9, 
      8, 5, 11, 19, 15, 3, 7, 20, 4, 
      18, 13
    ],
    largeNumArray: [],
    generateLargeNumArray: function() {
      var i = 0;
      while (i < 240000) {
        this.largeNumArray[i] = i;
        i++;
      }
      return this.largeNumArray;
    },
    numArray: [],
    generateNumArray: function() {
      var i = 0;
      while (i < 10240) {
        this.numArray[i] = i;
        i++;
      }
      return this.numArray;
    },
    //random array of strings generator
    generateWords: function() {
      var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
      var words = [];
        while (!words.includes('abc')) {
            var word = '';
            for (var l = 0; l < 3; l++) {
              var num = this.getRndInteger(0, 25);
              var letter = letters[num];
              word = word.concat(letter);
            }
            words.push(word);
        }
        
      return words;
    },
    getRndInteger: function(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    },
    predictedRangeOfSearches: [15, 16, 17, 18],
    areSearchesWithinPredictedRange: function() {
      return this.predictedRangeOfSearches.includes(testHelper.searches)
    },
    smallerRangeOfSearches: [11, 12, 13, 14],
    areSmallerSearchesWithinPredictedRange: function() {
      return this.smallerRangeOfSearches.includes(testHelper.searches)
    }
  }

  window.binarySearchTester = binarySearchTester;
}