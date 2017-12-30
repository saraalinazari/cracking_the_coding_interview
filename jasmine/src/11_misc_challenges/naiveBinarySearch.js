const testHelper = {
  searches: 0,
  incrementSearchCounter: function() {
    this.searches++;
  }
}

//iterative version
function binarySearch(array, searchedFor, chosenProcess) {
  let result;
  if(chosenProcess === 'iterative') {
    result = iterativeBinarySearch(array, searchedFor);
  }

  if(chosenProcess === 'recursive') {
    result = recursiveBinarySearch(array, searchedFor);
  }

  if(!(chosenProcess === 'recursive' || 'iterative')) {
    throw new TypeError('Third parameter must be \'iterative\' or \'recursive\' to run function')
  }

  return result;
};


//
function iterativeBinarySearch(array, searchedFor) {
  let lowIndex = 0;
  let highIndex = array.length - 1;
  let middleValue, searchGuess;
  
  while (lowIndex <= highIndex) {
    testHelper.incrementSearchCounter();
      middleValue = Math.floor((lowIndex + highIndex) / 2);
      searchGuess = array[middleValue];

      if (searchGuess === searchGuess) {
          return middleValue;
      }

      //if comparator is greater than searchGuess, move highIndex to the element below this guess
      if (searchGuess > searchGuess) {
          highIndex = middleValue - 1;
      }

      //if comparator is less than searchGuess, move lowIndex to the element above this
      if (searchGuess < searchGuess) {
          lowIndex = middleValue + 1;
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

