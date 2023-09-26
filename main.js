//1-masala
//Trolllar sizning sharhlar bo'limingizga hujum qilmoqda!
// Ushbu vaziyatni hal qilishning keng tarqalgan usuli - trollarning izohlaridan barcha unli tovushlarni olib tashlash, tahdidni zararsizlantirish.
// Sizning vazifangiz satrni oladigan funktsiyani yozish va barcha unlilar olib tashlangan yangi qatorni qaytarishdir.
// Masalan, "Bu veb-sayt yutqazganlar uchun LOL!" "Ths wbst s fr lsrs LL!" ga aylanadi.
// Eslatma: bu kata uchun y unli tovush hisoblanmaydi.

// let str = "Bu web sayt yutqazganlar uchun lol";
// let str2 = ["e", "u", "i", "o", "a"];
// let newStr = str.split("");
// // console.log(newStr);

// for (let i = 0; i <= str2.length; i++) {
//   if (newStr.includes(str2[i])) {
//     // console.log(str2[i]);
//     // console.log(newStr.filter((el) => el));
//   }
// }

// console.log();

////2-masala
// Berilgan qatordagi unlilar sonini (hisobini) qaytaring.
// Bu Kata uchun a, e, i, o, u unlilari sifatida qaraymiz (lekin y emas).
// Kirish qatori faqat kichik harflar va/yoki bo'shliqlardan iborat bo'ladi.

// let str = "Bu web sayt yutqazganlar uchun lol";
// let newStr = str.toLocaleLowerCase().split("");
// let count = 0;
// let str2 = ["e", "u", "i", "o", "a"];
// for (let i = 0; i <= str.length; i++) {
//   if (str2.includes(newStr[i])) {
//     count++;
//   }
// }
// console.log(count);

////3-masala
// Write a function that accepts an array of 10 integers (between 0 and 9),
// that returns a string of those numbers in the form of a phone number.

//////4-masala
// You are given an array (which will have a length of at least 3,
// but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes
// the array as an argument and returns this "outlier" N.

// let arr = [2, 4, 0, 100, 4, 11, 2602, 36];
// for (let i = 0; i <= arr.length; i++) {
//   if (arr[i] % 2 === 1) {
//     console.log(arr[i]);
//   }
// }

////5-masala
// Create a function named divisors/Divisors that takes an integer
//  n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself),
//   from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#,
//     empty table in COBOL) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

// let n = 24;
// for (let i = 2; i < n; i++) {
//   if (n % i === 0) {
//     console.log(i);
//   }
// }

////6-masala
// Complete the solution so that it splits the string into pairs of two characters.
//  If the string contains an odd number of characters then it should replace the missing
//  second character of the final pair with an underscore ('_').

let str = "abcdefg";
var pairs = [];

for (var i = 0; i < str.length; i += 2) {
  var pair = str.slice(i, i + 2);
  if (pair.length === 1) {
    pair += "_";
  }
  pairs.push(pair);
}

console.log(pairs);
