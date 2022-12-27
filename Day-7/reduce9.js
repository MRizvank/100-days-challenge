const voters = [
  {name:'Bob' , age: 30, voted: true},
  {name:'Jake' , age: 32, voted: true},
  {name:'Kate' , age: 25, voted: false},
  {name:'Sam' , age: 20, voted: false},
  {name:'Phil' , age: 21, voted: true},
  {name:'Ed' , age:55, voted:true},
  {name:'Tami' , age: 54, voted:true},
  {name: 'Mary', age: 31, voted: false},
  {name: 'Becky', age: 43, voted: false},
  {name: 'Joey', age: 41, voted: true},
  {name: 'Jeff', age: 30, voted: true},
  {name: 'Zack', age: 19, voted: false}
];

let y=0,yv=0,m=0,mv=0,o=0,ov=0
let newobj = voters.reduce((acc,item) => {
  if(item.age>=18 && item.age<30){
  if(item.voted==true){
    acc.numYoungVotes = ++yv
  }
    acc.numYoungPeople = ++y 
  }
   if(item.age>=30 && item.age<40){
  if(item.voted==true){
    acc.numMidVotesPeople = ++mv
  }
    acc.numMidPeople = ++m 
  }
   if(item.age>=40){
  if(item.voted==true){
    acc.numOldVotesPeople = ++ov
  }
    acc.numOldsPeople = ++o 
  }
  return acc
},{})
console.log(newobj)

/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4
}
*/