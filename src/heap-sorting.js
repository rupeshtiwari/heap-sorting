module.exports = { heapSorting };

function heapSorting(arrayOfNumbers) {
  const length = arrayOfNumbers.length;
  const heapDepth = Math.floor(Math.sqrt(length), 10);
  swapToMakeHeap(arrayOfNumbers, heapDepth, 0, heapDepth);
  console.log('heap sorting is done', arrayOfNumbers);
  return arrayOfNumbers;
}

function swapToMakeHeap(
  arrayOfNumbers,
  heapDepth,
  currentIndex = 0,
  maximumDepth
) {
  const leftIndex = currentIndex * 2 + 1;
  const rightIndex = currentIndex * 2 + 2;

  if (heapDepth > 1) {
    swapToMakeHeap(arrayOfNumbers, heapDepth - 1, leftIndex, maximumDepth);
    swapToMakeHeap(arrayOfNumbers, heapDepth - 1, rightIndex, maximumDepth);
  }

  const currentValue = arrayOfNumbers[currentIndex];

  const leftValue = arrayOfNumbers[leftIndex];

  const rightValue = arrayOfNumbers[rightIndex];

  const values = [currentValue, leftValue, rightValue];

  const indexList = [currentIndex, leftIndex, rightIndex];

  const maximumValueIndex = indexList[values.indexOf(Math.max(...values))];

  if (maximumValueIndex === 0) {
    return;
  }

  arrayOfNumbers[currentIndex] = arrayOfNumbers[maximumValueIndex];
  arrayOfNumbers[maximumValueIndex] = currentValue;

  if (heapDepth === maximumDepth) {
    if (heapDepth > 1) {
      swapToMakeHeap(arrayOfNumbers, heapDepth - 1, leftIndex, maximumDepth);
      swapToMakeHeap(arrayOfNumbers, heapDepth - 1, rightIndex, maximumDepth);
    }
  }
}
