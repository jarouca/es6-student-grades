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
