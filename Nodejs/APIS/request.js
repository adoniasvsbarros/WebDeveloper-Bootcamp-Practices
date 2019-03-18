// Using HTTP requests with Nodejs "https://github.com/request/request"

/*

//ES5

var request = require('request');

request('https://jsonplaceholder.typicode.com/users/1', function (error, response, body) {
    if(!error & response.statusCode == 200){    
        var parsedData = JSON.parse(body);
        console.log(parsedData.name + ' lives in ' + parsedData.address.city);
        //console.log(parsedData['name']);
    }
});
*/


//ES6

/*
const request = require('request');

request('https://jsonplaceholder.typicode.com/users/1', (error, response, body) => {
    if(!error & response.statusCode == 200){    
        const parsedData = JSON.parse(body);
        console.log(`${parsedData.name} lives in ${parsedData.address.city}`);
        //console.log(parsedData['name']);
    }
});
*/

const rp = require('request-promise');

rp('https://jsonplaceholder.typicode.com/users/1')
    .then((body) => {
        const parsedData = JSON.parse(body);
        console.log(`${parsedData.name} lives in ${parsedData.address.city}`);
    })
    .catch((err) => {
        console.log('Error!', err);
    });