const students = [
    {
        name: 'ali',
        number: 1,
        diploma: 0,
        age: 19,
        field: 24,
        gender: 'male',
    },
    {
        name: 'mohammad',
        number: 2,
        diploma: 1,
        age: 24,
        field: 23,
        gender: 'male',
    },
    {
        name: 'nila',
        number: 3,
        diploma: 2,
        age: 15,
        field: 24,
        gender: 'female',
    },
    {
        name: 'amir',
        number: 4,
        diploma: 1,
        age: 11,
        field: 24,
        gender: 'male',
    },
    {
        name: 'maryam',
        number: 5,
        diploma: 0,
        age: 11,
        field: 24,
        gender: 'female',
    },
    {
        name: 'aysan',
        number: 6,
        diploma: 1,
        age: 18,
        field: 23,
        gender: 'female',
    },
    {
        name: 'amir hasan',
        number: 7,
        diploma: 1,
        age: 39,
        field: 24,
        gender: 'male',
    },
    {
        name: 'fateme',
        number: 8,
        diploma: 1,
        age: 19,
        field: 23,
        gender: 'female',
    },
    {
        name: 'pedram',
        number: 9,
        diploma: 1,
        age: 17,
        field: 24,
        gender: 'male',
    }
]
let firstCounter = 0;
let ageCounter = 0;
let field = 0;
students.filter((items) => {
    if (items.field == 24 && items.gender == 'male') {
        firstCounter++;
    }
});
console.log('number of males & with field 24:', firstCounter);
students.filter((items) => {
    if (items.age <= 18) {
        ageCounter++
    }
});
console.log('number of under age 18:', ageCounter);
students.filter((items) => {
    if (items.field == 24) {
        field++
        percent = (field/students.length)*100;
    }
});
console.log('percent with field 24 :', percent);