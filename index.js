
const result = 5 + 5 + "5";
console.log(result);
console.log(typeof result);

const userEmail = "svatoslavkalugin@gmail.com";
const isEmailHavingAt = userEmail.includes("@");
if (isEmailHavingAt === true) {
  console.log("Це пошта");
} else {
  console.log("Це не пошта");
}

const wordMy = "My";
const wordName = "name";
const wordIs = "is";
const fullName = `${wordMy} ${wordName} ${wordIs}`;
console.log(`${fullName} Viktor`);

const userName = "Олександро";
const payment = 300;
alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`);