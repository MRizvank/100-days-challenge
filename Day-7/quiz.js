const words = ["one", "two", "three", "four"];
words.forEach((word) => {
  if (word.length>=3) {
    words.shift();
  }
});
console.log(words.join("").length); 

const str="iamagoodboybydavidguetta"
const myArray=str.split("")
const ans = myArray.reduce((acc, currentValue) => {
  if (currentValue!=="a" && !acc.includes(currentValue)) {
    return [...acc, currentValue];
  }
  return acc;
}, []).length;

console.log(ans);

function yes(a,b,...ar){
    b(ar,a)
  }
  
  
  yes(10,(x,y)=>{
  console.log(x.reduce((ac,cur)=>ac+cur)*10)
  },1,2,4)
  