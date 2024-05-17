// დაწერე ფუნქცია, რომელიც მიიღებს a და b
// პარამეტრებს და დააბრუნებს ტექსტს
// “ტოლია” თუ a უდრის b-ს, ხოლო
// წინააღმდეგ შემთხვევაში, დააბრუნებს “არ
// არის ტოლი”
// ● გაითვალისწინე, რომ a და b ყოველთვის
// ერთი და იგივე ტიპის არ არის

function compareNumbs(a, b) {
  if (typeof a !== typeof b) {
    return "ვერ შევადარებთ";
  } else if (a == b) {
    return "ტოლია";
  } else {
    return "არ არის ტოლი";
  }
}
console.log(compareNumbs(3, 5));
console.log(compareNumbs(66, 33));
console.log(compareNumbs(22, 54));
console.log(compareNumbs("ajsj", 5));
console.log(compareNumbs(5, 5));

// დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს ტემპერატურას ფარენჰეიტებში და
// დააბრუნებს ტემპერატურას ცელსიუსში
// ● თუ პარამეტრი არ არის რიცხვითი მონაცემი
// დააბრუნე - false

function temperatureToCelsius(temperature) {
  if (typeof temperature !== "number") {
    return false;
  }
  return (temperature - 32) * (5 / 9);
}
console.log(temperatureToCelsius(100));
console.log(temperatureToCelsius(244));
console.log(temperatureToCelsius(44));
console.log(temperatureToCelsius("dds"));

// დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს a (პირველი რიცხვი), b (მეორე
// რიცხვი) და operation (+, -, *, /) და
// დააბრუნებს ახალ მნიშვნელობას,
// რომელიც მიიღება ამ ორ რიცხვზე operation
// ცვლადში განსაზღვრული ოპერაციით
// ● თუ a და b არ არიან რიცხვები, ან თუ
// operation ცვლადში არის უცნობი, ოპერაცია
// დააბრუნე - false

function calculate(a, b, operation) {
  if (
    typeof a !== "number" ||
    typeof b !== "number" ||
    typeof operation !== "string"
  ) {
    return false;
  }
  if (operation === "+") {
    return a + b;
  } else if (operation === "-") {
    return a - b;
  } else if (operation === "*") {
    return a * b;
  } else if (operation === "/") {
    return a / b;
  } else {
    return false;
  }
}
console.log(calculate(3, 9, "*"));
console.log(calculate(20, 45, "-"));
console.log(calculate(10, 0, "/"));
console.log(calculate(3, 9, "6"));
