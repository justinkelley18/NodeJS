const path = require('path');
const fs = require('fs');

const chirpPath = path.join(__dirname, '../chirps.json');

const chirps = [
    {
        id: 1,
        name: 'Emma',
        chirp: 'Hey'
    },
    {
        id: 2,
        name: 'Blake',
        chirp: 'Yo'
    },
    {
        id: 3,
        name: 'Matt',
        chirp: 'Howdy'
    },
    {
        id: 4,
        name: 'Mark',
        chirp: 'Aye'
    },
    {
        id: 5,
        name: 'Aj',
        chirp: 'Sup'
    },
];

fs.writeFile(chirpPath, JSON.stringify(chirps), (err) => {
    if (err) {
        console.log('Error!');
        console.log(err);
    }
    console.log('Check out your message!');
});

fs.readFile(chirpPath, (err, chirps) => {
    if (err) console.log(err);
    const test = JSON.parse(chirps);
        console.log(test);
});