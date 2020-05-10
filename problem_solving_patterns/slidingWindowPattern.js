const main = (arr, size) => {
  let maxSum = 0;
  let tempSum = 0;
  if(size > arr.length) return null;
  for(let i=0; i<size; i++){
    maxSum += arr[i];
  };
  tempSum = maxSum;
  for(let i=size; i<arr.length; i++){
    tempSum = tempSum - arr[i-size] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}
console.log(main([10, 0, 0, 1, 2, 3, 4, 1, 1, 1, 1, 6], 4))