const findTheOldest = function(peopleArr) {
    let oldest_age = -1;
    let oldest_person = {}
    for (let person of peopleArr) {
        let age = 0;
        if (person.yearOfDeath === undefined) {
            age = new Date().getFullYear() - person.yearOfBirth;
        } else {
            age = person.yearOfDeath - person.yearOfBirth
        }
        if (age > oldest_age) {
            oldest_person = person;
            oldest_age = age;
        }
    }
    return oldest_person;
};

// Do not edit below this line
module.exports = findTheOldest;
