// function calculateAge() {
//     let birthdate = document.getElementById("birthdate").value;
//     let today = new Date();
//     let birthdateArray = birthdate.split("-");
//     let birthdateObject = new Date(birthdateArray[0], birthdateArray[1] - 1, birthdateArray[2]);
//     let ageInMilliseconds = today - birthdateObject;
//     let ageInSeconds = ageInMilliseconds / 1000;
//     let ageInMinutes = ageInSeconds / 60;
//     let ageInHours = ageInMinutes / 60;
//     let ageInDays = ageInHours / 24;
//     let ageInYears = ageInDays / 365;
//     document.getElementById("output").innerHTML = "You are " + Math.floor(ageInYears) + (ageInDays) " years old.";
// }
// function calculateAge() {
//     let birthdate = document.getElementById("birthdate").value;
//     let today =  document.getElementById("today").value;
//     let birthdateArray = birthdate.split("-");
//     let todayArray = today.split("-");
//     let birthdateObject = new Date(birthdateArray[0], birthdateArray[1] - 1, birthdateArray[2]);
//     let todayObject = new Date(todayArray[0], todayArray[1] - 1, todayArray[2]);
//     let ageInMilliseconds = todayObject - birthdateObject;
//     let ageInSeconds = ageInMilliseconds / 1000;
//     let ageInMinutes = ageInSeconds / 60;
//     let ageInHours = ageInMinutes / 60;
//     let ageInDays = ageInHours / 24;
//     let ageInYears = ageInDays / 365;
//     let totalYears = Math.floor(ageInYears);
//     let totalDays = Math.floor(ageInDays - (totalYears * 365));
//     let totalHours = Math.floor(ageInHours - (totalDays * 24 + totalYears * 365 * 24));
//     let totalMinutes = Math.floor(ageInMinutes - (totalHours * 60 + totalYears * 365 * 24));
//     document.getElementById("output").innerHTML = "You are " + totalYears + " years, " + totalDays + " days, and " + totalHours + " hours old." + totalMinutes + "Minutes Old";
// }

// Age Calculater with Year,Hours,Minutes inclunding Current date input with Birthdate Input
// function calculateAge() {
//     let birthdate = document.getElementById("birthdate").value;
//     let currentdate = document.getElementById("currentdate").value;
//     let birthdateArray = birthdate.split("T");
//     let currentdateArray = currentdate.split("T");
//     let birthdateObject = new Date(birthdateArray[0] + " " + birthdateArray[1]);
//     let currentdateObject = new Date(currentdateArray[0] + " " + currentdateArray[1]);
//     let ageInMilliseconds = currentdateObject - birthdateObject;
//     let ageInSeconds = ageInMilliseconds / 1000;
//     let ageInMinutes = ageInSeconds / 60;
//     let ageInHours = ageInMinutes / 60;
//     let ageInDays = ageInHours / 24;
//     let ageInweeks = ageInDays / 52;
//     let ageInYears = ageInDays / 365;
//     let totalYears = Math.floor(ageInYears);
//     let totalweek = Math.floor(ageInweeks - (totalYears * 365));
//     let totalDays = Math.floor(ageInDays - (totalYears * 365));
//     let totalHours = Math.floor(ageInHours - (totalDays * 24 + totalYears * 365 * 24));
//     let totalMinutes = Math.floor(ageInMinutes - (totalHours * 60 + totalDays * 24 * 60 + totalYears * 365 * 24 * 60));
//     document.getElementById("output").innerHTML = "You are " + totalYears + " years, " + totalDays + " days, " + totalHours + " hours, and " + totalMinutes + " minutes old.";
// }

// Age Calculater with Year,Week,Hours,Minutes inclunding Current date input with Birthdate Input
function calculateAge() {
    let birthdate = document.getElementById("birthdate").value;
    let currentdate = document.getElementById("currentdate").value;
    let birthdateArray = birthdate.split("T");
    let currentdateArray = currentdate.split("T");
    let birthdateObject = new Date(birthdateArray[0] + " " + birthdateArray[1]);
    let currentdateObject = new Date(currentdateArray[0] + " " + currentdateArray[1]);
    let ageInMilliseconds = currentdateObject - birthdateObject;
    let ageInSeconds = ageInMilliseconds / 1000;
    let ageInMinutes = ageInSeconds / 60;
    let ageInHours = ageInMinutes / 60;
    let ageInDays = ageInHours / 24;
    let ageInWeeks = ageInDays / 7;
    let ageInYears = ageInDays / 365;
    let totalYears = Math.floor(ageInYears);
    let totalWeeks = Math.floor(ageInWeeks - (totalYears * 365 / 7));
    let totalDays = Math.floor(ageInDays - (totalWeeks * 7 + totalYears * 365));
    let totalHours = Math.floor(ageInHours - (totalDays * 24 + totalWeeks * 7 * 24 + totalYears * 365 * 24));
    let totalMinutes = Math.floor(ageInMinutes - (totalHours * 60 + totalDays * 24 * 60 + totalWeeks * 7 * 24 * 60 + totalYears * 365 * 24 * 60));
    document.getElementById("output").innerHTML = "You are " + totalYears + " years, " + totalWeeks + " weeks, " + totalDays + " days, " + totalHours + " hours, and " + totalMinutes + " minutes old.";
}
// let currentdate = 10-03-2023;
// let currentdateArray = currentdate.split("T");
// console.log(currentdateArray)