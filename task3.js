// დაწეერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს n ცალ რიცხვს (n > 2). ფუნქციამ
// უნდა დააბრუნოს 2 - ელემენტიანი მასივი,
// სადაც პირველი ელემენტია პირველი და
// მეორე პარამეტრის ჯამი, ხოლო მეორე
// ელემენტი - მესამე ელემენტიდან
// დაწყებული ყველა დანარჩენის ნამრავლი

// function calculateNums(n, ...numbers) {
//   if (n <= 2 || numbers.length !== n) {
//     return null;
//   }
//   const sumFirstTwo = numbers[0] + numbers[1];
//   let rest = 1;
//   for (let i = 2; i < numbers.length; i++) {
//     rest *= numbers[i];
//   }
//   return [sumFirstTwo, rest];
// }
// const result = calculateNums(5, 2, 3, 4, 5, 6);
// console.log(result);

// დავუშვათ გვინდა ობიექტიდან წავიკითხოთ
// შემდეგი ველი: user.banks[2].address.city.
// დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს user ობიექტს და დააბრუნებს cityს. გამოიყენე destructuring-ი. თუ ასეთი
// ველი არ არსებობს უნდა დაბრუნდეს
// undefined

// function getCity(user) {
//   return user?.banks?.[2]?.address?.city;
// }
// const user = {
//   banks: [
//     { address: { city: "batumi" } },
//     { address: { city: "tbilisi" } },
//     { address: { city: "telavi" } },
//   ],
// };
// const result = getCity(user);
// console.log(result);

// დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს ნებისმიერ ობიექტს და
// დააბრუნებს იგივე მნიშვნელობების მქონე
// ახალ (განსხვავებულ) ობიექტს
// ● გაითვალისწინე, რომ თუ ობიექტში კიდევ
// სხვა ობიექტებია იმათი ასლებიც უნდა
// შეიქმნას
// ● გამოიყენეთ (...) ოპერატორი

function deepCopy(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  if (Array.isArray(obj)) {
    return [...obj].map(deepCopy);
  }
  console.log(obj);

  const copiedObj = { ...obj };
  for (const key in copiedObj) {
    if (copiedObj.hasOwnProperty(key)) {
      copiedObj[key] = deepCopy(copiedObj[key]);
    }
  }
  return copiedObj;
}
const original = {
  name: "mari",
  age: 19,
  address: {
    city: "New York",
    zip: "10001",
  },
  hobbies: ["reading", "travelling"],
};
const cloned = deepCopy(original);
console.log(cloned);
console.log(cloned !== original);
