//if or else
const isUserloggedIn=true
const temperature=41

if(temperature<50){
    console.log("less than 50")
}else{
    console.log("temperature is greater than 50")
}

console.log("execute");

//<,>,<=,>=,==,!=,===,!==

//scope

const score=200

if(score>100){
    var power="fly"
    console.log(`user power: ${power}`);
}

console.log(`user power:${power}`)
 
//nested
const balance=1000

if(balance>500) console.log("test"),console.log("test2");

if(balance<500){
    console.log("less than 500")
}else if(balance<750){
    console.log("less than 750")
}else if(balance<900){
    console.log("less than 900")
}else if(balance<1200){
    console.log("less than 1200")
}

//&&
const UserloggedIn=true
const debitCard=true
const loggedInFromGoogle=false
const loggedInFromEmail=true

if(UserloggedIn&&debitCard&&2==3){
    console.log("allow to buy course");
}
if(loggedInFromGoogle||loggedInFromEmail){
    console.log("user logged in")
}

//switch

//switch (key){
   //case value;
      //break;
   //default:
      //break;
   //}

const month=3

switch (month){
   case 1:
      console.log("january")
      break;
    case 2:
      console.log("feb")
       break;
    case 3:
      console.log("march")
      break;
    case 4:
      console.log("april")
      break;
    case 5:
      console.log("may")
      break;
   default:
      console.log("default case match")
      break;
   }

   //truth or false value

   const userEmail=" "

   if(userEmail){
    console.log("got user email")
   }else{
    console.log("dont have user email")
   }

   //if(Object.keys(emptyobj).lenght===0){
   // console.log("object is empty")
   //}

   //null

   let val1;
   val1=null??10
   console.log(val1)

   //terniary operator

   //condition?true:false

   const iceTeaPrice=100
   iceTeaPrice<=80?console.log("less than 80"):console.log("more than 80")