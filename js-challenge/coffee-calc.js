// Array.Reduce

let items = [2,3,1,5];

const price = 1.25;

const expectedSum = 13.75;

let total = 0;

total = items.reduce((prev, current) => {
    console.log(`${prev} - ${current}`);
    return prev += current});


let result = `The total bill is ${total}`;

console.log(result);