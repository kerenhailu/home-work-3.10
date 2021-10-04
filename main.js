// -----------------------------1-----------------------------
// const AGES=[12,15,71,26,33,18,22]
// const AGES_UP20=[]
// AGES.forEach((age)=>{
//   if(age>20) AGES_UP20.push(age)
// })
// console.log(AGES_UP20);
// -----------------------------2-----------------------------
// const CAR_OBJ={color:"yellow",year:2000,Company:"honda"}
// for(carKey in CAR_OBJ){
// console.log(`${carKey} : ${CAR_OBJ[carKey]}`);
// }
// -----------------------------3-----------------------------דרך 1
// let NUM_UP=0
// const ARRAY=["keren","yafit","eden","tikva"]
// const NEW_ARRAY=[]
// ARRAY.forEach((itemInArray)=>{
//    NEW_ARRAY.push(`${NUM_UP++} :${itemInArray}`)
// })
// console.log(NEW_ARRAY);
// -----------------------------4-----------------------------דרך 2
// const NEW_ARRAY2=[]
// let NUM_UP2=0
// for(let itemARRAY in NEW_ARRAY){
//     NEW_ARRAY2.push(`${NUM_UP2++} :${itemARRAY}`)
// }
// console.log(NEW_ARRAY2);

// -----------------------------5-----------------------------דרך 1
// const NUMBERS = [5, 14, 36, 75, 99, 88];
// const NUMBERS_EVEN = [];
// NUMBERS.forEach((num) => {
//   if (num % 2 == 0) {
//     num = "even";
//   }
//   NUMBERS_EVEN.push(num);
// });
// console.log(NUMBERS_EVEN);
// -----------------------------6-----------------------------דרך 2
// const NUMBERS2 = [5, 14, 36, 75, 99, 88];
// const NUMBERS_EVEN2 = [];
// for (num of NUMBERS2) {
 
//   if (num % 2 == 0) {
//       num="even";
    
//   } NUMBERS_EVEN2.push(num);
// }
// console.log(NUMBERS_EVEN2);
// -----------------------------7-----------------------------
// const OBJECT={name:"keren", famName:"hailu" , age:22}
// for(itemObjKey in OBJECT){
//     document.write(`${itemObjKey} : ${OBJECT[itemObjKey]} `)
// }
// -----------------------------8-----------------------------
// const OBJ={name:"dan", famName:"cohen" , age:30}
// const NEW_OBJ=[{}]
// for(itemKey in OBJ){
//     NEW_OBJ.push(`${itemKey} : ${OBJ[itemKey]}hi`)
// }
// console.log(NEW_OBJ);
// -----------------------------9-----------------------------?
// let PUPILS_ARRAY=[{name:"gil", class:"a" , age:30},
//     {name:"avi", class:"c" , age:15},
//     {name:"haim", class:"e" , age:20},
//     {name:"dana", class:"b" , age:16},
//     {name:"tal", class:"d" , age:28},]
 
//     let PUPILS_ARRAY_NEW=[{}]
//     PUPILS_ARRAY.forEach((objPupils)=>{
//         PUPILS_ARRAY_NEW.push(objPupils)
//       for(let KeyObj in objPupils){
//           if(objPupils[KeyObj]=="name"){objPupils[KeyObj]=`sir+${objPupils[KeyObj]}`}
//       }
//     })
// console.log(PUPILS_ARRAY_NEW); 

// -----------------------------10-----------------------------
// -----------------הכניס לי רק את הגילאים-------------------
// const PUPILS=[{name:"gil", class:"a" , age:30},
//     {name:"avi", class:"c" , age:15},
//     {name:"haim", class:"e" , age:20},
//     {name:"dana", class:"b" , age:16},
//     {name:"tal", class:"d" , age:28},]
//     const PUPILS_UP=[]
//     PUPILS.forEach((objP)=>{
//         for(let itemKey in objP){
//             if(objP[itemKey]>18){
//                 PUPILS_UP.push(`${itemKey} :${objP[itemKey]}`)
//             }
//         }
//     })
//     console.log(PUPILS_UP);


