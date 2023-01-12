const quickSort = (originalArr) => {
  if (originalArr <= 1) {
    return originalArr;
  } else {
    var left = [];
    var right = [];
    var newArray = [];
    var pivot = originalArr.pop();
    var length = originalArr.length;

    for (var i=0; i<length; i++) {
      if (originalArr[i] <= pivot) {
        left.push(originalArr[i]);
      } else {
        right.push(originalArr[i]);
      }
    }
  }

  return newArray.concat(quickSort(left), pivot, quickSort(right));
};

let myArray = [3, 4, 9, -2, 1, 10];

let sortedArray = quickSort(myArray);
console.log(sortedArray);
