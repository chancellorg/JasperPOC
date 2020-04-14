
import React from 'react';

var content = "Chance";



fetch('./Japer_POC_2020-03-26_10-06-04.html')
    .then((response) => {
        // When the page is loaded convert it to text
        return response.text();
    })
    .then((html) =>{

        const fs = require('fs')


        let data = "Learning how to write in a file."


        fs.writeFile('Chance.txt', data, (err) => {

            // In case of a error throw err.
            if (err) throw err;
        })

    })