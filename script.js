let name = prompt("Имя");
let surname = prompt("Фамилия");

let yearOfBirth = Number(prompt("Введите год рождения"));
let monthOfBirth = Number (prompt("Введите месяц рождения"));
let dayOfBirth = Number(prompt("Введите день рождения"));
console.log(monthOfBirth,dayOfBirth);

const thisYear = 2023;
let howOld = thisYear - yearOfBirth;

let zodiac;
let leapYear;

if((monthOfBirth === 1 && (dayOfBirth >= 20 && dayOfBirth <=31)) || (monthOfBirth === 2 && (dayOfBirth <= 18 && dayOfBirth > 0 ))) {zodiac = 'Aquarius';}
else if ((monthOfBirth === 2 && (dayOfBirth >= 19 && dayOfBirth <=29)) || (monthOfBirth === 3 && (dayOfBirth <=20 && dayOfBirth > 0) )) {zodiac = 'Pisces' ;}
else if ((monthOfBirth === 3 && (dayOfBirth >= 21 && dayOfBirth <=31)) || (monthOfBirth === 4 && (dayOfBirth <=19 && dayOfBirth > 0) )) {zodiac = 'Aries' ; }
else if ((monthOfBirth === 4 && (dayOfBirth >= 20 && dayOfBirth <=30)) || (monthOfBirth === 5 && (dayOfBirth <=20 && dayOfBirth > 0) )) {zodiac = 'Taurus' ;}
else if ((monthOfBirth === 5 && (dayOfBirth >= 21 && dayOfBirth <=31)) || (monthOfBirth === 6 && (dayOfBirth <=20 && dayOfBirth > 0) )) {zodiac = 'Gemini' ;}
else if ((monthOfBirth === 6 && (dayOfBirth >= 21 && dayOfBirth <=30)) || (monthOfBirth === 7 && (dayOfBirth <=22 && dayOfBirth > 0) )) {zodiac = 'Cancer' ;}
else if ((monthOfBirth === 7 && (dayOfBirth >= 23 && dayOfBirth <=31)) || (monthOfBirth === 8 && (dayOfBirth <=22 && dayOfBirth > 0) )) {zodiac = 'Leo' ;}
else if ((monthOfBirth === 8 && (dayOfBirth >= 23 && dayOfBirth <=31)) || (monthOfBirth === 9 && (dayOfBirth <=22 && dayOfBirth > 0) )) {zodiac = 'Virgo' ;}
else if ((monthOfBirth === 9 && (dayOfBirth >= 23 && dayOfBirth <=30)) || (monthOfBirth === 10 && (dayOfBirth <=22 && dayOfBirth > 0) )) {zodiac = 'Libra' ;}
else if ((monthOfBirth === 10 && (dayOfBirth >= 23 && dayOfBirth <=31)) || (monthOfBirth === 11 && (dayOfBirth <=21 && dayOfBirth > 0) )) {zodiac = 'Scorpio' ;}
else if ((monthOfBirth === 11 && (dayOfBirth >= 22 && dayOfBirth <=30)) || (monthOfBirth === 12 && (dayOfBirth <=21 && dayOfBirth > 0 ))) {zodiac = 'Sagittarius' ;}
else if ((monthOfBirth === 12 && (dayOfBirth >= 22 && dayOfBirth <=31)) || (monthOfBirth === 01 && (dayOfBirth <=19 && dayOfBirth > 0) )) {zodiac = 'Capricorn';}

if(yearOfBirth % 4 === 0) leapYear = 'leap year'; 
else leapYear = 'not a leap year';

document.write(`User Bio: ${name} ${surname}, ${howOld} years old (${leapYear}), ${zodiac} ;`)
