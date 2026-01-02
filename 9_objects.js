const tinder=new Object()
console.log(tinder)

tinder.name="Tinder"
tinder.year=2012
tinder.available=true
tinder.users=45000000
tinder.features=["swipe","match","chat"]
console.log(tinder)

const realMadrid={
    name:"Real Madrid",
    fullname:{
        userfullname:{
            firstname:"Real",
            lastname:"Madrid"
        }
        
    }
    }
console.log(realMadrid.fullname.userfullname.firstname)

const obj1={a:10,b:20,c:30}
const obj2={1:"one",2:"two",3:"three"}

const obj3=Object.assign({},obj1,obj2)
console.log(obj3)


console.log(tinder)

console.log(Object.keys(tinder))
console.log(Object.values(tinder))
console.log(Object.entries(tinder))

console.log(tinder.hasOwnProperty("name"))



