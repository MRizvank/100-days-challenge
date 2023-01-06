// let inputArray = [
//     {
//       idMeal: "52768",
//       strMeal: "Apple Frangipan Tart",
//       Category: 3,
//       Area: 1,
//     },
  
//     {
//       idMeal: "53049",
//       strMeal: "Apam balik",
//       Category: 3,
//       Area: 2,
//     },
//     {
//       idMeal: "52767",
//       strMeal: "Bakewell tart",
//       Category: 3,
//       Area: 1,
//     }
//   ];

  
  
let areas = [
    { id: 1, name: "British" },
    { id: 2, name: "Malaysian" },
    {id:3,name:"Europe"}
  ];
  

function school(schoolName,location,established,...subjects){
    return {
        // name:schoolName,
        // location:location,
        // year:established,
        getGeneralInfo:function (){
            return( `${schoolName} was established in ${established} in ${location}`)
        },
        getSubjectsInfo:function(){
            return(` At ${schoolName} we teach ${subjects.join(',')}`)
        }
        
    }
}
let abc=school('abcd','delhi',1236,'english','hindi','science');
 console.log(abc.getGeneralInfo())
console.log(abc.getSubjectsInfo())