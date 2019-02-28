/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1  Window binding binds the value of the 'this' keyword to the Window object
* 2. Implicit binding automatically binds 'this' to an object when one of its methods is called ex: object.method();
* 3. New binding uses the 'new' keyword to pass data into a constructor function to create a new object literal
* 4. Explicit binding defines 'this' explicitly by letting us call or apply a certain method onto any particular object
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this);

// Principle 2

// code example for Implicit Binding

const player = {
    name: 'Bob',
    age: 30,
    sport: 'baseball',
    description: function() {
        console.log(`${this.name} is ${this.age} years old and plays ${this.sport}`);
    }
}

console.log(player.description());

// Principle 3

// code example for New Binding
 
function teamMate(name, position) {
    this.name = name;
    this.position = position;
    this.introduction = function() {
        return `Bob's new teammate ${this.name} plays ${this.position}`;
    }
}

const newPlayer = new teamMate('Bill', 'second base');

console.log(newPlayer.introduction());

// Principle 4

// code example for Explicit Binding

function saysName(name) {
    return `Hello ${this.name}`;
}

console.log(saysName.apply(player));