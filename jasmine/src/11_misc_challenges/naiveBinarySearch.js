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
function binarySearch(array, searchingFor, chosenProcess) {
  testHelper.resetSearchCounter();
  array = array.sort();
  let result;

  if(chosenProcess === 'iterative') {
    result = iterativeBinarySearch(array, searchingFor);
  }

  if(chosenProcess === 'recursive') {
    result = recursiveBinarySearch(array, searchingFor);
  }

  if(chosenProcess !== 'recursive' && chosenProcess !== 'iterative') {
    throw new TypeError('Third parameter must be \'iterative\' or \'recursive\' to run function')
  }

  return result;
};

function iterativeBinarySearch(array, searchingFor) {
  let lowIndex = 0;
  let highIndex = array.length - 1;
  let middleIndex, searchGuess;
  
  while (lowIndex <= highIndex) {
    testHelper.incrementSearchCounter();
      middleIndex = Math.floor((lowIndex + highIndex) / 2);
      searchGuess = array[middleIndex];

      if (searchGuess === searchingFor) {
          return middleIndex;
      }

      //if comparator is greater than searchingFor, move new highIndex to the element below comparator
      if (searchGuess > searchingFor) {
          highIndex = middleIndex - 1;
      }

      //if comparator is less than serachedFor, move new lowIndex to the element above comparator
      if (searchGuess < searchingFor) {
          lowIndex = middleIndex + 1;
      }
  }

  return null;
};

//1. Have each recursion increment high/low index as required
//2. Have each recursion pass in the chopped array (this keeps low/high index maths the same on each run)
function recursiveBinarySearch(array, searchingFor, lowIndex, highIndex) {
  // debugger;
  var lowIndex, highIndex, middleIndex, searchGuess;
  if(!lowIndex && !highIndex) {
    lowIndex = 0;
    highIndex = array.length - 1;
    middleIndex, searchGuess;
  }

  testHelper.incrementSearchCounter();
  middleIndex = Math.floor((lowIndex + highIndex) / 2);
  searchGuess = array[middleIndex];
  array = array.sort();

  //base case
  if (searchGuess === searchingFor) {
    return middleIndex;
  }

  //recursive case
  if (searchGuess > searchingFor) {
    highIndex = middleIndex - 1;
    return recursiveBinarySearch(array, searchingFor, lowIndex, highIndex);
  }

  if (searchGuess < searchingFor) {
    lowIndex = middleIndex + 1;
    return recursiveBinarySearch(array, searchingFor, lowIndex, highIndex);
  }
};

//helper functions (not currently used)
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

