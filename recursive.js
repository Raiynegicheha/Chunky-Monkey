function chunkArrayInGroups(arr, size) {
  // Break it up.
  var mArr = [];
 
  function newChunks (arr, size, mArr){
    if (arr.length > 0 ){
      mArr.push(arr.splice(0, size));
      //splice alters the main array removing starting at index 0, 2 elements.
      newChunks(arr, size, mArr);
    }

  }
  newChunks(arr, size, mArr); //calling the function.
  return mArr;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);
