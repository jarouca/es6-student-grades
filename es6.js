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

// Example 25
let sephiroth = {
  name: 'Sephiroth',
  hitPoints: 400000,
  magicPoints: 680,
  level: 87
};

let name = sephiroth.name;
let magicPoints = sephiroth.magicPoints;
name; //  'Sephiroth'
magicPoints; // 680

// Example 26
let sephiroth = {
  name: 'Sephiroth',
  hitPoints: 400000,
  magicPoints: 680,
  level: 87
};

let { name, magicPoints } = sephiroth;
name; //  'Sephiroth'
magicPoints; // 680

// Example 28
let order = {
  player: 'Julian Edelman',
  size: 'Medium',
  color: 'blue'
};

let orderDefaults = {
  size: 'Select',
  color: 'blue',
  quantity: 1
};

let assign = function(target, source) {
    for (let i in source) {
        target[i] = source[i];
    }
    return target;
};

orderDefaults = assign(orderDefaults, order);
orderDefaults.player; // 'Julian Edelman'
orderDefaults.size; // 'Medium'
orderDefaults.color; // 'blue'
orderDefaults.quantity; // 1

// Example 30
let orderDefaults = {
  size: 'Select',
  color: 'blue',
  quantity: 1
};

let orderOne = {
  player: 'Tom Brady',
  size: 'Large',
  color: 'red',
  quantity: 2
};

orderDefaults = Object.assign(orderDefaults, orderOne);
let processedOrderOne = Object.assign({}, orderDefaults);

orderDefaults.quantity; // 2
orderDefaults = {
  size: 'Select',
  color: 'blue',
  quantity: 1
};

let orderTwo = {
  player: 'Julian Edelman',
  size: 'Medium',
  color: 'blue'
};

Object.assign(orderDefaults, orderTwo);
let processedOrderTwo = Object.assign({}, orderDefaults);

processedOrderOne.player; // 'Tom Brady'
processedOrderOne.size; // 'Large'
processedOrderOne.color; // 'red'
processedOrderOne.quantity; // 2

processedOrderTwo.player; // 'Julian Edelman'
processedOrderTwo.size; // 'Medium'
processedOrderTwo.color; // 'blue'
processedOrderTwo.quantity; // 1

// Example 45
let callFunction = function(callbackFunction) {
  return callbackFunction();
};

let bottle = {
  message: 'OH MY GAWD MY CODE WORKS!',
  passMessageToCallback() {
    let callbackFunctionFromBottle = function() {
      return this.message;
    };

    return callFunction(callbackFunctionFromBottle);
  }
};

bottle.passMessageToCallback(); // TypeError

// Example 46
...
  passMessageToCallback() {
    let callbackFunctionFromBottle = function() {
      return this.message;
    }.bind(this);

    return callFunction(callbackFunctionFromBottle);
  }
...
bottle.passMessageToCallback(); // 'OH MY GAWD MY CODE WORKS!'

// Example 47
...
  passMessageToCallback() {
    let callbackFunctionFromBottle = () => {
      return this.message;
    };

    return callFunction(callbackFunctionFromBottle);
  }
...
bottle.passMessageToCallback(); // 'OH MY GAWD MY CODE WORKS!'

// Example 48
let Person = function(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.fullName = function() {
  return `${this.firstName} ${this.lastName}`;
}

Person.prototype.initials = function() {
  return `${this.firstName[0]}${this.lastName[0]}`;
}

let janitor = new Person('Glenn', 'Matthews');
janitor.firstName; // 'Glenn'
janitor.lastName; // 'Matthews'
janitor.fullName(); // 'Glenn Matthews'
janitor.initials(); // 'GM'

// Example 49
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  initials() {
    return `${this.firstName[0]}${this.lastName[0]}`;
  }
}

let janitor = new Person('Glenn', 'Matthews');
janitor.firstName; // 'Glenn'
janitor.lastName; // 'Matthews'
janitor.fullName(); // 'Glenn Matthews'
janitor.initials(); // 'GM'

// Example 50
let Person = function(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.fullName = function() {
  return `${this.firstName} ${this.lastName}`;
}

Person.prototype.initials = function() {
  return `${this.firstName[0]}${this.lastName[0]}`;
}

let Doctor = function(firstName, lastName, title) {
  Person.call(this, firstName, lastName);
  this.title = title;
};

Doctor.prototype = Object.create(Person.prototype);
Doctor.prototype.constructor = Doctor;

Doctor.prototype.fullName = function() {
  return `${this.firstName} ${this.lastName}, ${this.title}`;
}

Doctor.prototype.saySomethingAwkward = function() {
  return 'Wow, never seen this before';
};

let jd = new Doctor('John', 'Dorian', 'M.D.');
jd.firstName; // 'John'
jd.lastName; // 'Dorian'
jd.title; // 'M.D.'
jd.fullName(); // 'John Dorian, M.D.'
jd.initials() // 'JD'
jd.saySomethingAwkward(); // 'Wow, never seen this before'

// Example 51
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  initials() {
    return `${this.firstName[0]}${this.lastName[0]}`;
  }
}

class Doctor extends Person {
  constructor(firstName, lastName, title) {
    super(firstName, lastName);
    this.title = title;
  }

  fullName() {
    return `${this.firstName} ${this.lastName}, ${this.title}`;
  }

  saySomethingAwkward() {
    return 'Wow, never seen this before';
  };
}

let jd = new Doctor('John', 'Dorian', 'M.D.');
jd.firstName; // 'John'
jd.lastName; // 'Dorian'
jd.title; // 'M.D.'
jd.fullName(); // 'John Dorian, M.D.'
jd.initials // 'JD'
jd.saySomethingAwkward(); // 'Wow, never seen this before'

// Example 52
class Person {
  ...
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  ...
}

class Doctor extends Person {
  ...
  fullName() {
    return `${super.fullName()}, ${this.title}`;
  }
  ...
}

jd.fullName(); // 'John Dorian, M.D.'

// Example 57 - export.js
let hi = 'hi';
let hola = 'hola';
let bonjour = 'bonjour';
export { hi, hola, bonjour };

let countrySingers = ['Luke Bryan', 'Florida Georgia Line', 'Carrie Underwood']
for (let countrySinger of countrySingers) {
  console.log(countrySinger);
}

let countrySingers = ['Luke Bryan', 'Florida Georgia Line', 'Carrie Underwood']
for (let i = 0, length = countrySingers.length; i < length; i++) {
  console.log(countrySingers[i]);
}

let pokemon = ['Pikachu', 'Magikarp', 'Psyduck'];
let pikachu = pokemon[0];
let magikarp = pokemon[1];
let psyduck = pokemon[2];
pikachu; // 'Pikachu'
magikarp; // 'Magikarp'
psyduck; // 'Psyduck'

let pokemon = ['Pikachu', 'Magikarp', 'Psyduck'];
let [pikachu, magikarp, psyduck] = pokemon;
pikachu; // 'Pikachu'
magikarp; // 'Magikarp'

psyduck; // 'Psyduck'

let pokemon = ['Pikachu', 'Magikarp', 'Psyduck'];
let newPokemon = [pokemon[0], pokemon[1], pokemon[2]];
pokemon; // ['Pikachu', 'Magikarp', 'Psyduck']
newPokemon; // ['Pikachu', 'Magikarp', 'Psyduck']
pokemon === newPokemon; // false

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

function character(prop, value) {
  return { prop: value };
}

let tifa = character('name', 'Tifa'); // { prop: 'Tifa' }

function character(prop, value) {
  var char = {};
  char[prop] = value;
  return char;
}

let tifa = character('name', 'Tifa'); // { name: 'Tifa' }let sephiroth = {
  name: 'Sephiroth',
  hitPoints: 400000,
  magicPoints: 680,
  level: 87
};

let name = sephiroth.name;
let magicPoints = sephiroth.magicPoints;
name; //  'Sephiroth'
magicPoints; // 680

let sephiroth = {
  name: 'Sephiroth',
  hitPoints: 400000,
  magicPoints: 680,
  level: 87
};

let { name, magicPoints } = sephiroth;
name; //  'Sephiroth'
magicPoints; // 680

let sephiroth = {
  name: 'Sephiroth',
  hitPoints: 400000,
  magicPoints: 680,
  level: 87
};


let { name, magicPoints } = sephiroth;
name; //  'Sephiroth'
magicPoints; // 680

let sephiroth = {
  name: 'Sephiroth',
  hitPoints: 400000,
  magicPoints: 680,
  level: 87
};

let { name, magicPoints, ...objectWithRemainingProperties } = sephiroth;
name; //  'Sephiroth'
magicPoints; // 680
objectWithRemainingProperties; // {"hitPoints":400000,"level":87}

let order = {
  player: 'Julian Edelman',
  size: 'Medium',
  color: 'blue'
};

let orderDefaults = {
  size: 'Select',
  color: 'blue',
  quantity: 1
};

let assign = function(target, source) {
    for (let i in source) {
        target[i] = source[i];
    }
    return target;
};

orderDefaults = assign(orderDefaults, order);
orderDefaults.player; // 'Julian Edelman'
orderDefaults.size; // 'Medium'
orderDefaults.color; // 'blue'
orderDefaults.quantity; // 1

let order = {
  player: 'Julian Edelman',
  size: 'Medium',
  color: 'blue'
};

let orderDefaults = {
  size: 'Select',
  color: 'blue',
  quantity: 1
};

orderDefaults = Object.assign(orderDefaults, order);
orderDefaults.player; // 'Julian Edelman'
orderDefaults.size; // 'Medium'
orderDefaults.color; // 'blue'

// Example 30
let orderDefaults = {
  size: 'Select',
  color: 'blue',
  quantity: 1
};

let orderOne = {
  player: 'Tom Brady',
  size: 'Large',
  color: 'red',
  quantity: 2
};

orderDefaults = Object.assign(orderDefaults, orderOne);
let processedOrderOne = Object.assign({}, orderDefaults);

orderDefaults.quantity; // 2
orderDefaults = {
  size: 'Select',
  color: 'blue',
  quantity: 1
};

let orderTwo = {
  player: 'Julian Edelman',
  size: 'Medium',
  color: 'blue'
};

Object.assign(orderDefaults, orderTwo);
let processedOrderTwo = Object.assign({}, orderDefaults);

processedOrderOne.player; // 'Tom Brady'
processedOrderOne.size; // 'Large'
processedOrderOne.color; // 'red'
processedOrderOne.quantity; // 2

processedOrderTwo.player; // 'Julian Edelman'
processedOrderTwo.size; // 'Medium'
processedOrderTwo.color; // 'blue'
processedOrderTwo.quantity; // 1

// Example 31
let orderDefaults = {
  size: 'Select',
  color: 'blue',
  quantity: 1
};

let orderOne = {
  player: 'Tom Brady',
  size: 'Large',
  color: 'red',
  quantity: 2
};
let processedOrderOne = Object.assign({}, orderDefaults, orderOne);

let orderTwo = {
  player: 'Julian Edelman',
  size: 'Medium',
  color: 'blue'
};
let processedOrderTwo = Object.assign({}, orderDefaults, orderTwo);

processedOrderOne.player; // 'Tom Brady'
processedOrderOne.size; // 'Large'
processedOrderOne.color; // 'red'
processedOrderOne.quantity; // 2

processedOrderTwo.player; // 'Julian Edelman'
processedOrderTwo.size; // 'Medium'
processedOrderTwo.color; // 'blue'

processedOrderTwo.quantity; // 1

// Example 32
let announceDinnerChoice = function(dinnerChoice) {
  dinnerChoice = typeof dinnerChoice !== 'undefined' ? dinnerChoice : 'a piece of cake';
  return `We are having ${dinnerChoice} for dinner!`;
};

announceDinnerChoice(); // 'We are having a piece of cake for dinner!'
// Example 33
let announceDinnerChoice = function(dinnerChoice = 'a piece of cake') {
  return `We are having ${dinnerChoice} for dinner!`;
};

announceDinnerChoice(); // 'We are having a piece of cake for dinner!'

// Example 34
let appendToStrings = function(stringToAppend, arrayOfStrings) {
  let newArray = [];
  for (let word of arrayOfStrings) {
    newArray.push(word + stringToAppend);
  }
  return newArray;
};

appendToStrings('?', ['What is love', 'Baby don\'t worry']); // ['What is love?', 'Baby don't worry?']

// Example 35
let appendToStrings = function(stringToAppend, ...arrayOfStrings) {
  let newArray = [];
  ...
};

appendToStrings('?', 'What is love', 'Baby don\'t worry'); // ['What is love?', 'Baby don't worry?']

// Example 36
function createHeader(text, options) {
  let header = options.header || 'h1';
  let className = options.className;

  let headerElement = document.createElement(header);
  let textNode = document.createTextNode(text);
  headerElement.appendChild(textNode);
  document.body.appendChild(headerElement);

  if (className) {
    headerElement.setAttribute('class', className);
  }
}

createHeader('Hi dad!', {});
// <h1>Hi dad!</h1> is appended to document body
createHeader('Hi mom!', { header: 'h2', className: 'best-class-ever' });
// <h2 class='best-class-ever'>Hi mom!</h2> is appended to document body

/ Example 41
let plusOne = (number) => {
  return number + 1;
};

plusOne(1); // 2

// Example 42
let plusOne = number => {
  number + 1
};

plusOne(1); // 2

/ Example 43
let plusOne = number => number + 1;

plusOne(1); // 2

// Example 44
let returnObject = () => ({ message: 'this is correct' });

returnObject().message; // 'this is correct'

let callFunction = function(callbackFunction) {
  return callbackFunction();
};

let bottle = {
  message: 'OH MY GAWD MY CODE WORKS!',
  passMessageToCallback() {
    let callbackFunctionFromBottle = function() {
      return this.message;
    };

    return callFunction(callbackFunctionFromBottle);
  }
};

bottle.passMessageToCallback(); // TypeError

// Example 46
...
  passMessageToCallback() {
    let callbackFunctionFromBottle = function() {
      return this.message;
    }.bind(this);

    return callFunction(callbackFunctionFromBottle);
  }
...
bottle.passMessageToCallback(); // 'OH MY GAWD MY CODE WORKS!'

// Example 48
let Person = function(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.fullName = function() {
  return `${this.firstName} ${this.lastName}`;
}

Person.prototype.initials = function() {
  return `${this.firstName[0]}${this.lastName[0]}`;
}

let janitor = new Person('Glenn', 'Matthews');
janitor.firstName; // 'Glenn'
janitor.lastName; // 'Matthews'
janitor.fullName(); // 'Glenn Matthews'
janitor.initials(); // 'GM'

// Example 49
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  initials() {
    return `${this.firstName[0]}${this.lastName[0]}`;
  }
}

let janitor = new Person('Glenn', 'Matthews');
janitor.firstName; // 'Glenn'
janitor.lastName; // 'Matthews'
janitor.fullName(); // 'Glenn Matthews'
janitor.initials(); // 'GM'

// Example 50
let Person = function(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.fullName = function() {
  return `${this.firstName} ${this.lastName}`;
}

Person.prototype.initials = function() {
  return `${this.firstName[0]}${this.lastName[0]}`;
}

let Doctor = function(firstName, lastName, title) {
  Person.call(this, firstName, lastName);
  this.title = title;
};

Doctor.prototype = Object.create(Person.prototype);
Doctor.prototype.constructor = Doctor;

Doctor.prototype.fullName = function() {
  return `${this.firstName} ${this.lastName}, ${this.title}`;
}

Doctor.prototype.saySomethingAwkward = function() {
  return 'Wow, never seen this before';
};

let jd = new Doctor('John', 'Dorian', 'M.D.');
jd.firstName; // 'John'
jd.lastName; // 'Dorian'
jd.title; // 'M.D.'
jd.fullName(); // 'John Dorian, M.D.'
jd.initials() // 'JD'
jd.saySomethingAwkward(); // 'Wow, never seen this before'
