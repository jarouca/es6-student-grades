// Example 1 Hoisted
var exampleOneHoisted = function() {
  var output;
  if (false) {
    output = "foo";
  }
  return output;
};

exampleOneHoisted(); // undefined;

// Example 2
var exampleTwo = function() {
  if (false) {
    let output = "foo";
  }
  return output;
};

exampleTwo(); // ReferenceError raised;

// Example 3
let exampleThree = function (array) {
  let newArray = [];
  for (var i = 0, length = array.length; i < length; i++) {
    let closure = function () {
      return array[i];
    };
    newArray.push(closure);
  }
  return newArray;
};

let arrayOfClosures = exampleThree(['Eureka!']);
arrayOfClosures[0](); // undefined

// Example 3 Hoisted
let exampleThreeHoisted = function (array) {
  var i;
  let newArray = [];
  for (i = 0, length = array.length; i < length; i++) {
    let closure = function () {
      return array[i];
    };
    newArray.push(closure);
  }
  return newArray;
};

let arrayOfClosures = exampleThreeHoisted(['Eureka!']);
arrayOfClosures[0](); // undefined

// Example 4
let exampleFour = function (array) {
  let newArray = [];
  for (let i = 0, length = array.length; i < length; i++) {
    let closure = function () {
      return array[i];
    };
    newArray.push(closure);
  }
  return newArray;
};

let arrayOfClosures = exampleFour(['Eureka!']);
arrayOfClosures[0](); // 'Eureka!'

// Example 7
let countrySingers = ['Luke Bryan', 'Florida Georgia Line', 'Carrie Underwood']
for (let i = 0, length = countrySingers.length; i < length; i++) {
  console.log(countrySingers[i]);
}

// Example 8
let countrySingers = ['Luke Bryan', 'Florida Georgia Line', 'Carrie Underwood']
for (let countrySinger of countrySingers) {
  console.log(countrySinger);
}

let pokemon = ['Pikachu', 'Magikarp', 'Psyduck'];
let pikachu = pokemon[0];
let magikarp = pokemon[1];
let psyduck = pokemon[2];
pikachu; // 'Pikachu'
magikarp; // 'Magikarp'
psyduck; // 'Psyduck'

// Example 10
let pokemon = ['Pikachu', 'Magikarp', 'Psyduck'];
let [pikachu, magikarp, psyduck] = pokemon;
pikachu; // 'Pikachu'
magikarp; // 'Magikarp'
psyduck; // 'Psyduck'

// Example 11
let pokemon = ['Pikachu', 'Magikarp', 'Psyduck'];
let [pikachu, , psyduck] = pokemon;
pikachu; // 'Pikachu'
psyduck; // 'Psyduck'

// Example 14
let pokemon = ['Pikachu', 'Magikarp', 'Psyduck'];
let newPokemon = [pokemon[0], pokemon[1], pokemon[2]];
pokemon; // ['Pikachu', 'Magikarp', 'Psyduck']
newPokemon; // ['Pikachu', 'Magikarp', 'Psyduck']
pokemon === newPokemon; // false

// Example 17
let name = 'Cloud Strife';
let hitPoints = 9999;
let magicPoints = 6000;
let lvl = 99;

let cloud = {
  name: name,
  hitPoints: hitPoints,
  magicPoints: magicPoints,
  level: lvl
};

// Example 18
let name = 'Cloud Strife';
let hitPoints = 9999;
let magicPoints = 6000;
let lvl = 99;

let cloud = {
  name,
  hitPoints,
  magicPoints,
  level: lvl
};

// Example 20
let aeris = {
  firstName: 'Aeris',
  lastName: 'Gainsborough',
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
};
aeris.fullName(); // 'Aeris Gainsborough'

// Example 21
function character(prop, value) {
  return { prop: value };
}

let tifa = character('name', 'Tifa'); // { prop: 'Tifa' }

// Example 22
function character(prop, value) {
  var char = {};
  char[prop] = value;
  return char;
}

let tifa = character('name', 'Tifa'); // { name: 'Tifa' }
