const assert = require('assert');

//*
assert.equal(
  JSON.stringify(heapSorting([2, 1, 3, 7, 6, 5, 9])),
  JSON.stringify([9, 7, 5, 1, 6, 2, 3]),

);
// */

/* 
assert.equal(
  JSON.stringify(heapSorting([9, 2, 4, 7, 1, 14, 3])),
  JSON.stringify([9, 7, 14, 2, 1, 4, 3])
);
// */

/*
assert.equal(
  JSON.stringify(heapSorting([10, 17, 19, 4, 16, 7, 2])),
  JSON.stringify([19, 16, 17, 4, 10, 7, 2])
);
// */

/*
assert.equal(
  JSON.stringify(heapSorting([2, 18, 5, 3, 11, 8, 17])),
  JSON.stringify([18, 11, 17, 2, 3, 5, 8])
);
// */

function heapSorting(arr = [], length = 7, index = 0, root = 0, ) {
  if (root > length) return arr;

  inlineSort(root, arr, index, length);

  if (!isThisLevelSorted(arr, root)) {
    return heapSorting(root, arr, index, length);
  } else {
    return heapSorting(root + 1, arr, root + 1, length);
  }
}

function isThisLevelSorted(arr = [], index = 0) {
  if (arr.length <= 2 * index + 1) return true;
  return arr[index] > arr[2 * index + 1] && arr[index] > arr[2 * index + 2];
}

function inlineSort(root, arr = [], index = 0, length = 0) {
  let current = index;
  const left = 2 * index + 1;
  const right = left + 1;
  let swapped = null;

  // left
  if (arr[current] < arr[left]) {
    swap(arr, current, left);
    swapped = left;
  }

  // right
  if (arr[current] < arr[right]) {
    swap(arr, current, right);
    swapped = right;
  }

  if (swapped != null) {
    return inlineSort(root, arr, swapped, length);
  }

  return swapped;
}

function swap(arr, left, right) {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
}
