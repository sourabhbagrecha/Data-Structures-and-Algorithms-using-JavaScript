const validAnagram = (str1, str2) => {
  if(str1.length !== str2.length) return false;
  
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  const frequencyCounter1 = {};
  const frequencyCounter2 = {};
  
  str1.split("").forEach(s => {
    frequencyCounter1[s] = (frequencyCounter1[s] || 0) + 1;
  });
  str2.split("").forEach(s => {
    frequencyCounter2[s] = (frequencyCounter2[s] || 0) + 1;
  });
  for (key in frequencyCounter1){
    if(frequencyCounter1[key] !== frequencyCounter2[key]){
      return false;
    }
  };
  return true;
}

console.log(validAnagram("Sourbhbbb", "BBBharsou"));