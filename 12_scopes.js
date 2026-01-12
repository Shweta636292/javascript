const user={
    userName:"john_doe",
    price:100,

    welcomeMessage:function(){
        console.log(` ${this.userName}, welcome to website!`);
        console.log(this)
    }
}
user.welcomeMessage();
user.userName="jane_smith";
user.welcomeMessage();
// console.log(this);

//function test(){
    //let userName="alice_wonder";
    //console.log(this);
//}
////test()

//const test=function(){
    //let userName="alice_wonder";
    //console.log(this);
//}
//test();

const test=()=>{
    let userName="alice_wonder";
    console.log(this);
}
test();

const addOwo=(num1,num2)=>{
    return num1+num2
}
console.log(addOwo(5,10));

const addTwo=(num1,num2)=> (num1+num2);
console.log(addTwo(5,10));