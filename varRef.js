// bad
var a = 1;
var b = 2;

//good
const a2 = 1;
const b2 = 2;


// bad
var count = 1;
if (true) {
  count += 1;
}

//good
let count = 1;
if (true) {
  count += 1;
}

// bad
const myFunc = ()=>{
    let a = 1;
    const b = 1;
    var c = 1;
}

console.log(a);
console.log(b);
console.log(c);

// good --> const and let only exist in the blocks they are defined in, don't use var :)
const myFunc2 = () => {
  const a = 1;
  const b = 2;
  const c = 3;

  console.log(a);
  console.log(b);
  console.log(c);
}


//bad - Names
let x = 0;
const numerofitems = 1;

//good --> name your variables with something meaningful
let myVariable = 0;
const numberOfItems = 1;