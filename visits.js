/**
 * Created by Sanzhar on 08.02.2017.
 */

var request = require('request');
var cheerio = require('cheerio');
var URL = require('url-parse');

var pageToVisit = "URL";

var i = 0;
var interval = setInterval(function () {
    if (i == 2345) {
        clearInterval(interval);
    }
    console.log("Visiting page for the  " + i + " time");
    request(pageToVisit, function (error, response, body) {
        if (error) {
            console.log("Error: " + error);
        }
        // Check status code (200 is HTTP OK)
        console.log("Status code: " + response.statusCode);
        if (response.statusCode === 200) {
            // Parse the document body
            var $ = cheerio.load(body);
            console.log("Page title:  " + $('title').text());
            i++;
        }
    });
}, 100);
