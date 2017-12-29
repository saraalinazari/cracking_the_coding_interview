const testData = {
  searches: 0
}

function naiveBinarySearch(array, searchingFor, chosenProcess) {

  testDevHelper(array, searchingFor, chosenProcess);
    
  if (chosenProcess === 'iterative') {
    testDevHelper(array, searchingFor, chosenProcess);

    let initalMiddle, middleOfArray, lowerOrHigher, dividedArray, matchedIndex;

    middleOfArray = findMiddleValue(array);
    dividedArray = array.slice(0);

    while (middleOfArray !== searchingFor && !matchedIndex) {
      testData.searches++;
      //find middle value
      middleOfArray = findMiddleValue(dividedArray);

      if (dividedArray.length > 1) {
        //check if middle value is higher or lower than searchedFor value and return remaining array
        dividedArray = compare(searchingFor, middleOfArray, dividedArray);
        //repeat these steps whilst found value != searchingFor
      }
      
      if (middleOfArray === searchingFor) {
        matchedIndex = array.indexOf(middleOfArray);
      }
      
    }

    //return index of matched
    return matchedIndex;
  }

  if (chosenProcess === 'recursive') {

    testDevHelper(array, searchingFor, chosenProcess);

    //define variables for inital start and end values
    //find middle value
    //check if middle value is higher or lower than searchedFor value
    //repeat these steps whilst found value != searchingFor
    //if found, assign to var matched
    //return index of matched
  }
};

function compare(searchingFor, middleOfArray, array) {
  return (searchingFor > middleOfArray ? ifHigher : ifLower)(array, middleOfArray);
}

function ifHigher(array, middleOfArray) {
  return array.slice(array.indexOf(middleOfArray) + 1);
}

function ifLower(array, middleOfArray) {
  return array.slice(0, array.indexOf(middleOfArray));
}

function findMiddleValue(array) {
  let middlePosition = (Math.floor(array.length / 2));
  return array[middlePosition];
}

function testDevHelper(array, searchingFor, chosenProcess) {
  //reset search counter in between test runs
  testData.searches = 0;
  
  //set parameter values for testing
  sortedArray ? testData.passedArray = array : null;
  searchingFor ? testData.searchingFor = searchingFor : null;
  chosenProcess ? testData.chosenProcess = chosenProcess : null;

  testData.maximumSearches = Math.log2(array.length);

    if (chosenProcess && chosenProcess !== 'recursive' && chosenProcess !== 'iterative') {
      throw new TypeError('The third parameter must be either \'iterative\' or \'recursive\' to run');
    }
  };

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

