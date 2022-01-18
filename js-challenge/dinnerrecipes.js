const dinners = [
    {
        name: 'Margerita pizza',
        vegetarian: true
    },
    {
        name: 'Bromma pasta',
        vegetarian: false
    },
    {
        name: 'Egg biriyani',
        vegetarian: false
    },
    {
        name: 'Channa masala',
        vegetarian: true
    },
    {
        name: 'Pani puri',
        vegetarian: true
    },
    {
        name: 'Paroota chalna',
        vegetarian: false
    },
    {
        name: 'Poha',
        vegetarian: true
    }
];

console.log(dinners);

let vegDinners = dinners.filter((value) => value.vegetarian);
console.log(vegDinners);