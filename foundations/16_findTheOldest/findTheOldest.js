const findTheOldest = function(arr) {
    arr = arr.sort((a, b) => {
        if (!("yearOfDeath" in a)) {
            a.yearOfDeath = new Date().getFullYear();
        }

        if (!("yearOfDeath" in b)) {
            b.yearOfDeath = new Date().getFullYear();
        }

        return (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth)
    });
    console.log(arr);
    return arr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
