const fs = require('fs');

if(process.argv[2] === undefined) {
  console.log("Usage: node pets.js [read | create | update | destroy]");
}

if(process.argv[2] === 'read') {
  fs.readFile('./pets.json', 'utf8', function(err, data) {

    if(err){
      console.error(err);
    }
    else {
      // console.log(JSON.parse(data));

    let pets = JSON.parse(data);

      if(process.argv[3]){
        console.log(pets[process.argv[3]])
      } else {
        console.log(pets);
      }
    }
  });
}
if(process.argv[2] === 'create') {
  fs.readFile('./pets.json', 'utf8', function(err, data) {

    if(process.argv[5] === undefined) {
      console.log('Usage: node pets.js create AGE KIND NAME')
    } else {
      console.log('boooyyaaahhh')

      let pet = {
        age : process.argv[3],
        kind : process.argv[4],
        name : process.argv[5]
      };
      console.log(pet);
      // read parse pets.json
      let parsedPets = JSON.parse(data);
      // add pet to pets.json
      parsedPets.push(pet);
      console.log(parsedPets);
      // write pets.json
      fs.writeFile('./pets.json', JSON.stringify(parsedPets), function(err){
        if(err){
          console.error(err)
        }
      })
    }
  });
}
if (process.argv[2] === 'update') {
  fs.readFile('./pets.json', 'utf8', (err, data) => {
    if(process.argv[6] === undefined){
      console.log('Usage: node pets.js update INDEX AGE KIND NAME')
    } else {
      let pet = {
        age: process.argv[4],
        kind: process.argv[5],
        name:process.argv[6]
      }
      let parsedPets = JSON.parse(data);
      parsedPets[process.argv[3]] = pet;
      fs.writeFile('./pets.json', JSON.stringify(parsedPets))
    }
  })
}
if (process.argv[2] === 'destroy') {
  fs.readFile('./pets.json', 'utf8', (err, data) => {
    // console.log(JSON.parse(data))
    if(process.argv[3] === undefined) {
      console.log('Usage: node pets.js destroy INDEX');
    } else {
      let pets = JSON.parse(data);
      pets.splice(process.argv[3], 1);
      fs.writeFile('./pets.json', JSON.stringify(pets))
    }
  })
}
