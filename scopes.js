let a=300
if(true){
    let a=9
    const b=89
    console.log("INNER:",a)
}
console.log(a)

function one(){
    const UserName="shweta"

    function Two(){
        const website="youtube"
        console.log(UserName)
    }
    Two()
}
one()

let userName;
let website;

if(true){
    const UserName="shweta";
    if(UserName==="shweta"){
        const website="youtube";
        console.log(UserName+ website)
    }
    console.log(website)
}
console.log(userName)

console.log(addone(5))

function addone(num){
    return num
}