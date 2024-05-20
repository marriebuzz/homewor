// მოცემულია მასივი [{name: 'Temo', age: 25},
// {name: 'Lasha', age: 21}, {name: 'Ana', age: 28}]
// ● დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს user - ების მასივს და დააბრუნებს
// ყველაზე პატარა ასაკის მქონე ადამიანის
// სახელს

function youngestInTheGroup(users) {
  if (users.length === 0) {
    return null;
  }
  let youngestUser = users[0];
  for (let i = 1; i < users.length; i++) {
    if (users[i].age < youngestUser.age) {
      youngestUser = users[i];
    }
  }
  return youngestUser.name;
}
const users = [
  { name: "Temo", age: 25 },
  { name: "Lasha", age: 21 },
  { name: "Ana", age: 28 },
];

console.log(youngestInTheGroup(users));

// დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს user ობიექტს და დააბრუნებს
// იგივე მნიშვნელობების მქონე ახალ
// (განსხვავებულ) ობიექტს, მოცემულია მასივი user=[{name: 'Temo', age: 25},
// {name: 'Lasha', age: 21}, {name: 'Ana', age: 28}]

function cloneUsers(users) {
  return users.map((users) => ({ ...user }));
}
const users = [
  { name: "Temo", age: 25 },
  { name: "Lasha", age: 21 },
  { name: "Ana", age: 28 },
];
console.log(cloneUsers(users));

// დაწერე პროგრამა, სადაც ორი a და b
// მომხმარებლები აგორებენ კამათელს
// მანამ, სანამ არ გაგორდება, რომელიც
// უფრო ნაკლებ ცდაში გააგორებს სამიანს ის
// არის გამარჯვებული

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}
function playGame() {
  let a = 0;
  let b = 0;
  let aRoll, bRoll;

  do {
    aRoll = rollDice();
    a++;
  } while (aRoll !== 3);

  do {
    bRoll = rollDice();
    b++;
  } while (bRoll !== 3);

  if (a < b) {
    console.log(`მოთამაშე A არის გამარჯვებული ${a} ცდით`);
  } else if (a > b) {
    console.log(`მოთამაშე B არის გამარჯვებული ${b} ცდით`);
  } else {
    console.log(`ფრეა ${a} ცდით`);
  }
}

playGame();
