function firstReverseTry(arr) {
    if (arr.length > 1) {
      var first = arr[0];
      arr[0] = arr[arr.length-1];
      arr[arr.length-1] = first;
    }
    return arr
  }
  console.log(firstReverseTry([1,2,3,4,5]))



  