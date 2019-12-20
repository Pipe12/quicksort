//Functions

function swap(array, indexOne, indexTwo) {
  let temp = array[indexOne];
  array[indexOne] = array[indexTwo];
  array[indexTwo] = temp;
  return array;
}

function partition(unsortedArray) {

  console.log("Start partion function");

  let indexSmaller = 0;
  let indexGreater = 0;
  let indexPivot = unsortedArray.length - 1;

  console.log("The pivot is: " + unsortedArray[indexPivot]);
  console.log("This is the unsortedArray: " + unsortedArray);

  for (let indexUnknow = 0; indexUnknow < indexPivot; indexUnknow++) {
    if (unsortedArray[indexUnknow] < unsortedArray[indexPivot]) {
      unsortedArray = swap(unsortedArray, indexGreater, indexUnknow);
      indexGreater++;
    }
  }

  unsortedArray = swap(unsortedArray, indexGreater, indexPivot);

  let answerPartition = [unsortedArray, indexGreater];

  console.log("This the new rerange array: " + answerPartition[0] + " and the new index of pivot = " + answerPartition[1]);
  console.log("End partion function");

  return answerPartition;
}

function quicksort(unsortedArray) {
  console.log("Start Quicksort function");

  let initialIndex = 0;
  let endIndex = unsortedArray.length -1;

  if (initialIndex >= endIndex) { return unsortedArray }

  let answerPartition = partition(unsortedArray);
  let rerangeArray = answerPartition[0];
  let breakPoint = answerPartition[1];

  let leftArray = rerangeArray.slice(0, breakPoint);
  let rightArray = rerangeArray.slice(breakPoint + 1, answerPartition[0].length);

  leftArray = quicksort(leftArray);
  rightArray = quicksort(rightArray);

  console.log("This is the leftArray = " + leftArray);
  console.log("This is the rightArray = " + rightArray);

  unsortedArray = leftArray.concat(unsortedArray[breakPoint], rightArray);

  console.log("This is the unsortedArray = " + unsortedArray);
  console.log("End Quicksort function");

  return unsortedArray;
}

let array = [12, 7, 14, 9, 10, 11];

//partition(array);

let sortedArray = quicksort(array);

console.log(sortedArray);
