let subjectsData = [
    {id: 1, name: 'Javascript'},
    {id: 2, name: 'HTML'},
    {id: 3, name: 'CSS'},
    {id: 4, name: 'Java'},
    {id: 5, name: 'Rust'},
  ]
  let newKey=subjectsData.reduce((acc,item)=>{
    if(acc[item.id]==undefined){
        acc[item.id]=item.name;
    }
    return acc
  },{})

  // code your key-value object for subjects here
  
  let students = [
    {id: 1, name: 'Prateek', subjectID: 5},
    {id: 2, name: 'Yogesh', subjectID: 2},
    {id: 3, name: 'Nrupul', subjectID: 4},
    {id: 4, name: 'Prateek', subjectID: 1},
  ]
  
  let newObj =students.reduce((acc,item)=>{
    if(acc[item.name]==undefined){
        acc[item.name]=[newKey[item.subjectID]]
    }
    acc[item.name].push(newKey[item.subjectID])
    return acc

  },{}) /* your array method here */ 
  
  console.log(newObj);
  
  /* 
  ----------------------------------
  create a new object called `newObj` using the `students` array &  
  the `subjectsData` array.
  
  Hint: consider creating an extra key-value object for quickly accessing subject names
  ----------------------------------
  
  Expected Output of `newObj`: 
  {
    Prateek: ["Rust", "Javascript"],
    Yogesh: ["HTML"],
    Nrupul: ["Java"],
  }
  */