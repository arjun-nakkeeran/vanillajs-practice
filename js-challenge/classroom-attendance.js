// Destructuring Object and Array

const english = {
    hasTeachingAssistant: true,
    classList: ['Anna', 'Tule', 'Ajay', 'Oli', 'Lucas']
};

const swedish = {
    hasTeachingAssistant: false,
    classList: ['Jonas', 'Oliver', 'Oscar', 'Wilhem', 'Clara']
};

const getAttendance = (classroom) => {
    let {hasTeachingAssistant, classList} = classroom;

    let teacher, teachingAssistant, students;

    if (hasTeachingAssistant) {
        [teacher, teachingAssistant, ...students] = classList;
    } 
    else {
        [teacher, ...students] = classList;
    }

    return students;
};

let englishStudents = getAttendance(english);
let swedishStudents = getAttendance(swedish);

console.log(englishStudents);
console.table(swedishStudents);
