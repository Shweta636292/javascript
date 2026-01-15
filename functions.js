console.log("s")
console.log("s")
console.log("s")
console.log("s")
console.log("s")
console.log("s")
console.log("s")

function sayMyName(){
    console.log("s")
    console.log("s")
    console.log("s")
    console.log("s")
    console.log("s")
    console.log("s")
    console.log("s")

}

sayMyName()

function addTwoNumbers(number1,number2){
    console.log(number1+number2)
}

function addTwoNumbers(number1,number2){
    let result=number1+number2
    return result
}

const result=addTwoNumbers(2,3)

console.log("result:",result)

function loginUserMessage(userName="sam"){
    if(!userName){
        console.log("please enter a username")
        return
    }
    return '${userName} just logged in'
}

console.log(loginUserMessage())

function calculateCartprice(...num1){
    return(num1)
}
 
console.log(calculateCartprice(200,400,500,600))

const user={
    userName:"shweta",
    price:566
}
function handleObject(anyObject){
    console.log(`userName is ${anyObject.UserName} and price is ${anyObject.price}`)
}

handleObject({
    userName:"sam",
    price:900
})

const myNewArray=[300,788,899]

function returnSEcondValue(getArray){
    return getArray[1]
}
console.log(returnSEcondValue(myNewArray))