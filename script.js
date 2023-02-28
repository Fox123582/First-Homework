const ITCompany = {
    id: 12332129,
    сompanyName: 'Playtika',
    type: 'product',
    vacancies: [
        {
            frontEnd: {
                salary: 1200
            },
        },
        {
            backEnd: {
                salary: 1500
            },
        },
        {
            scramMaster: {
                salary: 500
            },
        },
        {
            tester: {
                salary: 600
            },
        }
    ]
}


let vacan = ITCompany.vacancies;
let nameVacans = [];
for (let i = 0; i < vacan.length; i++) {
    nameVacans[i] = Object.keys(vacan[i]);
}
nameVacans = nameVacans.flat(1);
for (let h = 0; h < nameVacans.length; h++) {
    nameVacans[h] = nameVacans[h].toLowerCase()
}

console.log(nameVacans)
let name;
let position;
let salary;
let flag = 0;
let error = 1;

while (error > 0) {
    let whatsWrong = '';
    error = 0;
    flag = 0;
    name = String(prompt('Name:')).trim();
    position = String(prompt('Position:(frontEnd, backEnd,scramMaster, tester)')).trim().toLowerCase();
    salary = String(prompt('Salary:')).trim();

    for (let i = 0; i < name.length; i++) {
        if ((name.charCodeAt(i) > 32 && name.charCodeAt(i) < 65) || (name.charCodeAt(i) > 90 && name.charCodeAt(i) < 97) || (name.charCodeAt(i) > 122 && name.charCodeAt(i) < 127)) {
            error++;
            whatsWrong = whatsWrong + 'Error in name\n';
            break;
        }
    }

    for (let i = 0; i < position.length; i++) {
        if ((position.charCodeAt(i) > 32 && position.charCodeAt(i) < 65) || (position.charCodeAt(i) > 90 && position.charCodeAt(i) < 97) || (position.charCodeAt(i) > 122 && position.charCodeAt(i) < 127)) {
            error++;
            whatsWrong = whatsWrong + 'Error in symbol in position\n';
            break;
        }
        if (nameVacans[i] === position.toLowerCase()) {
            flag++;
            break
        }
    }
    if (flag === 0) {
        error++;
        whatsWrong = whatsWrong + 'Dont have this position in company\n';
    }

    for (j = 0; j < salary.length; j++) {
        if ((salary.charCodeAt(j) > 32 && salary.charCodeAt(j) < 48) || (salary.charCodeAt(j) > 57 && salary.charCodeAt(j) < 127)) {
            error++;
            whatsWrong = whatsWrong + 'Error in salary\n';
            break;
        }
    }

    if (error > 0) {
        alert(`${whatsWrong}`);
    }
}

function checkEmploey(name, position, salary) {

    for (let i = 0; i < vacan.length; i++) {
        for (let j = 0; j < Object.keys(vacan[i]).length; j++) {

            let salaryValue = Object.values(vacan[i])[j].salary;
            salaryValue = String(salaryValue);
            //console.log(Object.values(vacan[i])[j]);
            if (nameVacans[i] === position) {
                if (salary <= salaryValue) {
                    let newObj = Object.create(ITCompany);
                    newObj.name = `${name}`;
                    newObj.pos = `${position}`;
                    newObj.sal = `${salary}`;
                    newObj.greeting = function () {
                        document.write(`Hello my name is ${name}, im ${position} in ${newObj.сompanyName}`);
                        return;
                    }
                    newObj.greeting();
                    //console.log(newObj);
                    return newObj;
                }
            }

        }
    }
    document.write(`${name}, you has significant skills at ${position} but we hired another developer, let's keep contact !`);
    return false;
}

checkEmploey(name, position, salary);

