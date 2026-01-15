
//console.log(myArr)

//const myArr2=new Array(6,7,8,9,10)
//console.log(myArr2[2])

//console.log(myArr.push(6))
//console.log(myArr.pop())
//console.log(myArr.unshift(0))
//console.log(myArr.shift())
//console.log(myArr.includes(3))
//console.log(myArr.indexOf(6))

//const another=myArr.join()
//console.log(another)
//console.log(myArr);

const myArr = [1, 2, 3, 4, 5];

const myArr4 = myArr.slice(1, 4);
console.log("slice:", myArr4); // [2, 3, 4]

const myArr5 = myArr.splice(1, 2);
console.log("splice:", myArr5); // [2, 3]

console.log("original array after splice:", myArr); // [1, 4, 5]


