// Problem 1. complete the below function
function school(schoolName,location,established,...subjects) {
    return{
      name:schoolName,
      location:location,
      established:established,
      getGeneralInfo:function(){
        return  `${this.name} was established in ${this.established} at ${this.location }.`
        
      },
      getSubjectsInfo:function (){
        return `At ${this.name} we teach ${subjects.join(", ")}.`
      },
    }
  }
  
  // Problem 2.
  let categoriesDirectory = {
    3: "Dessert",
    1: "MainCourse",
    2: "Starter"
  };
  
  
  let areas = [
    { id: 1, name: "British" },
    { id: 2, name: "Malaysian" }
  ];
  
  
  
  let areasDirectory = areas.reduce((acc, item) => {
    acc[item.id] = item.name;
    return acc;
  }, {});
  
  let inputArray = [
    {
      idMeal: "52768",
      strMeal: "Apple Frangipan Tart",
      Category: 3,
      Area: 1,
    },
  
    {
      idMeal: "53049",
      strMeal: "Apam balik",
      Category: 3,
      Area: 2,
    },
    {
      idMeal: "52767",
      strMeal: "Bakewell tart",
      Category: 3,
      Area: 1,
    }
  ];
  
  let outputArray =inputArray.reduce((acc,item)=>{
    let obj={
      productId:item.idMeal,
      productTitle:item.strMeal,
      Category:categoriesDirectory[item.Category],
      Area:areasDirectory[item.Area],
     
    }
    acc.push(obj);
    return acc
  
  },[])
  
  export { inputArray, outputArray, school, categoriesDirectory, areas, areasDirectory };
  