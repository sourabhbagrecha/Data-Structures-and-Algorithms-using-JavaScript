const main = (arr) => {
  if(arr.length === 0) return 0;
  let i=0, j=0;
  while(j < arr.length){
    if(arr[i] !== arr[j]){
      i++;
      arr[i] = arr[j];
      j++;
    } else {
      j++;
    }
  }
  return ++i;
};

console.log(main([1,1,1,1,1,2,3,4,4,4,5,5,6,6,7]))