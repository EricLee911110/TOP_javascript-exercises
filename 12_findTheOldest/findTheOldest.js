const findTheOldest = function(people) {
    let max_age = 0;
    people.forEach((profile) => {
        let age = 0;
        if ( profile.yearOfDeath ){
            age = profile.yearOfDeath - profile.yearOfBirth;
        } else {
            age = (2022 - profile.yearOfBirth);
        };
        if ( age > max_age ){
            oldestPerson = profile;
            max_age = age;
        };
    });

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;

