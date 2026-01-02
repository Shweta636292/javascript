const mySymbol=Symbol("id")
const webDeveloper={
    name:"Shweta",
    age:18,
    mySym:"myKey1",
    skills:["HTML","CSS","JS","REACTJS"],
    email:"shweta@example.com",
    college:"Alvas Institute of Engineering and Technology",
}
console.log(webDeveloper)

console.log(webDeveloper.age)
console.log(webDeveloper["skills"])
console.log(webDeveloper[mySymbol])

webDeveloper.email=1234567890
//Object.freeze(webDeveloper)
webDeveloper.age=19
console.log(webDeveloper)

webDeveloper.greeting=function(){
    console.log("Hello there!")
}

webDeveloper.greetingTwo=function(){
    console.log('hello js user,${this.name}')
}
//Object.freeze(webDeveloper)

console.log(webDeveloper.greeting())
console.log(webDeveloper.greetingTwo())