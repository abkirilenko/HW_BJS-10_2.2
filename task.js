function getAnimalSound(animal) {
    if (typeof animal == 'undefined' || Object.keys(animal).length < 1) return null;
    let sound = animal.sound;
    return sound;
}

function getAverageMark(marks) {
    if (marks.length == 0) return 0;
    
    let sumMarks = 0;
    for (let i = 0; i < marks.length; i++) {
        sumMarks += marks[i];
    }
    let average = sumMarks / marks.length;
    
    let roundedAverage = parseFloat(average.toFixed(0));
    return roundedAverage;
}


function checkBirthday(birthday) {
    let sumLeapYears = 0;
    let sumRegYears = 0;
    if ((new Date).getFullYear() % 4 < 1 && (new Date).getMonth() < 2) {
        sumLeapYears -= 1;
        sumRegYears += 1;
    }
    for (let i = (new Date).getFullYear(); i > birthday.getFullYear(); i--) {
        if (i % 4 < 1) sumLeapYears += 1;
        else sumRegYears += 1;
    }
    
    let now = Number(new Date());
    birthday = Number(birthday);
    let diff = now - birthday;
    
    let age = diff / ((31536000000 * sumRegYears + 31622400000 * sumLeapYears) / (sumLeapYears + sumRegYears));
    if (age >= 18) return true;
    else return false;
}