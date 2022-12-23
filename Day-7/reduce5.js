let subjectsHash = {
    1: 'Javascript',
    2: 'HTML',
    3: 'CSS',
    4: 'Java',
    5: 'Rust',
  }
  
  let students = [
    {id: 1, name: 'Prateek', subjectID: 5},
    {id: 2, name: 'Yogesh', subjectID: 2},
    {id: 3, name: 'Nrupul', subjectID: 4},
    {id: 4, name: 'Prateek', subjectID: 1},
  ]
  
  let newObj =students.reduce((acc,item)=>{
    if(acc[item.name]==undefined){
        acc[item.name]=[subjectsHash[item.subjectID]];
     } else{
        acc[item.name].push(subjectsHash[item.subjectID]);
    }
    return acc

  },{}) /* your code here */
  
  console.log(newObj);
  
  /* 
  ----------------------------------
  create a new object called `newObj` using the `students` array &  
  the `subjectsHash` object.
  ----------------------------------
  
  Expected Output of `newObj`: 
  {
    Prateek: ["Rust", "Javascript"],
    Yogesh: ["HTML"],
    Nrupul: ["Java"],
  }
  */