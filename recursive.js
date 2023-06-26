function chunkArrayInGroups(arr, size) {
  // Break it up.
  var mArr = [];
 
  function newChunks (arr, size, mArr){
    if (arr.length > 0 ){
      mArr.push(arr.splice(0, size));
      newChunks(arr, size, mArr);
    }

  }
  newChunks(arr, size, mArr);
  return mArr;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);
