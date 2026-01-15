//const arr=[5,1,3,2,6]
 //double=[10,2,6,4,12]
// triple=[15,3,9,6,18]
// binary=["101","1","11","10","110"]

// function double(x){
//     return x*2
// }
// const output=arr.map(double)
// console.log(output)

// function triple(x){
//     return x*3
// }
// const output=arr.map(triple)
// console.log(output)

// const output=arr.map((x)=> x.toString(2));
// console.log(output)


// const arr=[5,3,4,6,8]

// function greaterThan4(x){
//     return x > 4;
// }
// const output=arr.filter(greaterThan4);
// console.log(output)


// const arr=[5,3,4,6,8]

// function isOdd(x){
//     return x % 2 !== 0;
// }
// const output=arr.filter(isOdd);
// console.log(output)


// const arr=[5,3,4,6,8]

// function isEven(x){
//     return x % 2 === 0;
// }
// const output=arr.filter(isEven);
// console.log(output)


// const arr=[2,3,34,5,6];
// const output=arr.filter((x)=>x>4);
// console.log(output);


// reduce
const arr = [6,7,8,9,2];

function findMax(arr){
    let max = arr[0];
    for(let i=0; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax(arr));


// const output=arr.reduce(function(acc,curr){
//     acc=acc+curr;
//     return acc;
// },0);
// console.log(output)


const users = [
    {firstName:"shweta", lastName:"gejjihalli", age:26},
    {firstName:"sfg", lastName:"gejgfi", age:75},
    {firstName:"shwhgja", lastName:"gejjihaldfdli", age:50},    
    {firstName:"shwghta", lastName:"gejjihavxlli", age:26},
];

// acc={26:2,50:1,75:1}
const output = users.reduce(function(acc, curr){
    if(acc[curr.age]){
        acc[curr.age] = acc[curr.age] + 1;
    } else {
        acc[curr.age] = 1;
    }
    return acc;
}, {});

console.log(output);


const result = users
  .filter(x => x.age < 30)
  .map(x => x.firstName);

console.log(result);


