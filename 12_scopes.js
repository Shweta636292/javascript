const user = {
    userName: "john_doe",
    price: 100,

    welcomeMessage: function () {
        console.log(`${this.userName}, welcome to website!`);
        console.log(this);
    }
};

user.welcomeMessage();

user.userName = "jane_smith";
user.welcomeMessage();

// console.log(this);

// Normal function (this = global / window in browser, undefined in strict mode)
function testNormal() {
    let userName = "alice_wonder";
    console.log(this);
}
// testNormal();

// Arrow function (this = inherited from parent scope)
const test = () => {
    let userName = "alice_wonder";
    console.log(this);
};
test();

// Arrow function with return
const addOwo = (num1, num2) => {
    return num1 + num2;
};
console.log(addOwo(5, 10));

// Implicit return
const addTwo = (num1, num2) => (num1 + num2);
console.log(addTwo(5, 10));
