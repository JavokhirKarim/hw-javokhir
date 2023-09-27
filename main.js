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

// let str = "abcdefg";
// var pairs = [];

// for (var i = 0; i < str.length; i += 2) {
//   var pair = str.slice(i, i + 2);
//   if (pair.length === 1) {
//     pair += "_";
//   }
//   pairs.push(pair);
// }

// console.log(pairs);

////7-masala
// Check to see if a string has the same amount of 'x's and 'o's.
// /The method must return a boolean and be case insensitive. The string can contain any char.

// let str = "xxoxoo";
// let arr = str.split("");
// let once = arr.filter((el, tot) => el == tot);
// console.log(once);

////8-masala
// Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// let arr = ["Ryan", "Kieran", "Mark"];
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i].length === 4) {
//     newArr.push(arr[i]);
//   }
// }
// console.log(newArr);

////9-masala
// In a small town the population is p0 = 1000 at the beginning of a year.
//  The population regularly increases by 2 percent per year and moreover 50 new inhabitants per
// year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

// let p0 = 1000;
// let p = 1200;
// let count = 0;

// while (p0 < p) {
//   count++;
//   p0 += (p0 * 2) / 100 + 50;
// }
// console.log(count);

///9-masala
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// let pin = "1234";
// let neww = /^[0-9]{4}$|^[0-9]{6}$/.test(pin);
// console.log(neww);

///10-masaal
// berilgan stringni 2tadan qilib bo'lib oling,agar oxirgi harf toq 1 ta qolib ketsa o'rniga '_' qo'ying
// let str = "abcd";
// for (let i = 0; i < str.length; i++) {
//   let arr = str.split("");
//   console.log(arr[i]);
// }
