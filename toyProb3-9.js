function firstReverseTry(arr) {
    if (arr.length > 1) {
      var first = arr[0];
      arr[0] = arr[arr.length-1];
      arr[arr.length-1] = first;
    }
    return arr
  }
  console.log(firstReverseTry([1,2,3,4,5]))



  function firstReverseTry(arr) {
    //coding and coding..
    // if the array is empty
    if(arr.length === 0){
      // return the array
      return arr
    }
    
    // find the values
      // find the first value ([])
      const first = arr[0];
      
    // find the last value ([])
      // find the last index (arr.length)
      const lastIndex = arr.length -1;
      const last = arr[lastIndex];
      
    // swap the values
      // set the first value to the last
      arr[0] = last;
      // set the last value to the first 
      arr[lastIndex] = first;
      
    // return the arr
    return arr;
  }
  
  // Clarify 
  // Create Sample Solutions
    // [0, 2, 3] > [3, 2, 0]
    // [0, 2] > [2, 0]
    // [] > []
  // Psuedo code (Tools I can use)
  // Code 