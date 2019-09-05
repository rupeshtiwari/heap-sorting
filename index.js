const assert = require('assert');
const heap = createHeap([2, 1, 3, 7, 6, 5, 9]);
console.log(heap);
assert
    .equal(JSON.stringify(heap))
    .toEqual(JSON.stringify([9, 7, 5, 1, 6, 2, 3]));

function createHeap(arr, current) {
    let current = 0;
    let left = 2 * current + 1;
    let right = 2 * current + 2;

    while (left < arr.length) {
        createHeap(arr, left);

        if (arr[current] < arr[left]) {
            let temp = arr[current];
            arr[current] = arr[left];
            arr[left] = temp;
        }
    }

    while (right < arr.length) {
        createHeap(arr, right);

        if (arr[current] < arr[right]) {
            let temp = arr[current];
            arr[current] = arr[right];
            arr[right] = temp;
        }
    }
    return arr;
}
