const testData = {};

function naiveBinarySearch(array, searchingFor, chosenProcess) {

  testDevHelper(array, searchingFor, chosenProcess);
    
  if (chosenProcess === 'iterative') {

    let iterativeMiddle = findMiddleValue;

    testDevHelper(array, searchingFor, chosenProcess);

    //find middle value
    //check if middle value is higher or lower than searchedFor value
    //if higher copy array with items past this chopped off
    //if lower and copy array with items before this chopped off
    //repeat these steps recursively, passing in the sliced array and value of searched for
    //return index of matched
  }

  if (chosenProcess === 'recursive') {

    testDevHelper(array, searchingFor, chosenProcess);

    //define variables for inital start and end values
    //find middle value
    //check if middle value is higher or lower than searchedFor value
    //if higher, make new end value this value
    //if lower, make new start value this value
    //repeat these steps whilst found value != searchingFor
    //if found, assign to var matched
    //return index of matched
  }
};

function testDevHelper(array, searchingFor, chosenProcess) {
  
  sortedArray ? testData.passedArray = array : null;
  searchingFor ? testData.searchingFor = searchingFor : null;
  chosenProcess ? testData.chosenProcess = chosenProcess : null;

    if (chosenProcess && chosenProcess !== 'recursive' && chosenProcess !== 'iterative') {
      throw new TypeError('The third parameter must be either \'iterative\' or \'recursive\' to run');
    }
  };

function findMiddleValue(array) {
  let middlePosition = (Math.floor(array.length / 2)) - 1;
  return array[middlePosition];
}


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