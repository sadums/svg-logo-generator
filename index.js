// Packages
const inquirer = require('inquirer');
const fs = require('fs');
const generateSVG = require('./lib/shapes');

// Inquirer questions
const questions = [
    {
        message: 'Enter text for your logo.',
        name: 'text',
    },
    {
        message: 'Enter a text color for your logo.',
        name: 'textColor'
    },
    {
        type: 'list',
        message: 'Choose a shape for your logo.',
        name: 'shape',
        choices: [
            'circle',
            'triangle',
            'square'
        ]
    },
    {
        message: 'Enter a shape color for your logo.',
        name: 'shapeColor'
    },
];


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.error(err) : console.log(`Wrote data to ${fileName}`));
}

function init() {
    inquirer
    .prompt(questions)
    .then((response) => writeToFile('./examples/logo.svg', generateSVG(response)));
}

init();