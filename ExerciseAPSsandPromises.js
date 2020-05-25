// Q1 Make a postman call that uses the 5-day forecast from OWM (hint: use the documentation here - 
// https://openweathermap.org/forecast5)

// this was done in postman

const readline = require('readline');
const axios = require("axios");
const { weatherApiKey } = require("./config/Keys");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askQuestion(question) {
    let answer;

    return new Promise((resolve, reject) => {
        rl.question(question, (ans) => {
            resolve(ans);
        })
    });
}

// Q2 Create a function that takes an argument that is a string representing a City and returns 
// the OWN forecast5 result for that city.

async function Program() {
    let city = await askQuestion("Which City do you want the current weather for: ");
    let response = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${weatherApiKey}`)
    for (let i = 0; i < response.data.list.length; i++) {
    const temp = response.data.list[i].main.temp_max;
    console.log(temp - 273.1);
    }
}

// Q3 Make a console app that asks the user to enter a city and returns the 5 day forecast 
// for that city. Make sure the temperature is in degrees celsius 
// (Hint: don't log everything, try to keep it to the most relevant data).

async function Program() {
    let city = await askQuestion("Which City do you want the 5 day forecast for? ");
    let response = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${weatherApiKey}`)
    for (let i = 0; i < response.data.list.length; i++) {
    const temp = response.data.list[i].main.temp_max;
    console.log(temp - 273.1);
    }
}

Program().then(() => {
    process.exit(0);
});
