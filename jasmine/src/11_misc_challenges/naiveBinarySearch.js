const testHelper = {
  searches: 0,
  incrementSearchCounter: function() {
    this.searches++;
  },
  resetSearchCounter: function() {
    this.searches = 0;
  },
  maximumSearches: function(arrayElements) {
    return Math.round(Math.log2(arrayElements));
  }
}

//iterative version
function binarySearch(array, searchedFor, chosenProcess) {
  testHelper.resetSearchCounter();
  let result;
  if(chosenProcess === 'iterative') {
    result = iterativeBinarySearch(array, searchedFor);
  }

  if(chosenProcess === 'recursive') {
    result = recursiveBinarySearch(array, searchedFor);
  }

  if(chosenProcess !== 'recursive' && chosenProcess !== 'iterative') {
    throw new TypeError('Third parameter must be \'iterative\' or \'recursive\' to run function')
  }

  return result;
};

function iterativeBinarySearch(array, searchedFor) {
  let lowIndex = 0;
  let highIndex = array.length - 1;
  let middleIndex, searchGuess;
  
  while (lowIndex <= highIndex) {
    testHelper.incrementSearchCounter();
      middleIndex = Math.floor((lowIndex + highIndex) / 2);
      searchGuess = array[middleIndex];

      if (searchGuess === searchedFor) {
          return middleIndex;
      }

      //if comparator is greater than searchedFor, move new highIndex to the element below comparator
      if (searchGuess > searchedFor) {
          highIndex = middleIndex - 1;
      }

      //if comparator is less than serachedFor, move new lowIndex to the element above comparator
      if (searchGuess < searchedFor) {
          lowIndex = middleIndex + 1;
      }
  }

  return null;
};


function recursiveBinarySearch(array, searchedFor) {

};

//helper functions
function findMiddle(array) {
  let middleValuedlePosition = (Math.floor(array.length / 2));
  return array[middleValuedlePosition];
}

function compare(searchingFor, array) {
  return (searchingFor > findMiddle(array) ? ifHigher : ifLower)(array);
};

function ifHigher(array) {
  return array.slice(array.indexOf(findMiddle(array)));
}

function ifLower(array) {
  return array.slice(0, array.indexOf(findMiddle(array)));
}

