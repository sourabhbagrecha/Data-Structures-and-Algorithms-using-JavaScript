const main = (arr1, arr2) => {
  if(arr1.length !== arr2.length) return false;
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};
  for (let item of arr1){
    frequencyCounter1[item] = (frequencyCounter1[item] || 0) + 1;
  };
  for (let item of arr2){
    frequencyCounter2[item] = (frequencyCounter2[item] || 0) + 1;
  };
  for (let key in frequencyCounter1){
    if(!(key ** 2 in frequencyCounter2)){
      return false;
    }
    if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
      return false;
    }
  };
  return true;
}

console.log(main([1, 2, 3, 4, 5], [1, 4, 9, 16, 25]));