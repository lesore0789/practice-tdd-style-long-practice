function myMap(inputArray, callback) {
  let newArr = [];

  for(let i = 0; i < inputArray.length; i++){
    let newElement = callback(inputArray[i]);
    newArr.push(newElement)
  }

  return newArr;
}

module.exports = myMap;
