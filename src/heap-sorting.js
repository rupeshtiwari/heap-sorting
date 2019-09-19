module.exports = { sort };

let counter = 0;

function sort(arr) {
  var maxLength = arr.length;
  heapify(arr, 0, maxLength);
  return arr;
}

function heapify(arr, cidx, midx) {
  while (cidx < midx) {
    var lidx = cidx * 2 + 1;
    var ridx = lidx + 1;

    if (arr[lidx] >= arr[cidx] && arr[lidx] >= arr[ridx]) {
      let temp = arr[lidx];
      arr[lidx] = arr[cidx];
      arr[cidx] = temp;
      cidx = lidx;
    } else if (arr[ridx] >= arr[cidx] && arr[ridx] >= arr[lidx]) {
      let temp = arr[ridx];
      arr[ridx] = arr[cidx];
      arr[cidx] = temp;
      cidx = ridx;
    } else return;
  }
}
