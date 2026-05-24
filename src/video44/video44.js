console.log("Video 44");
const sv1 = {
  username: "user1",
  score: 7,
};
const sv2 = {
  username: "user2",
  score: 9,
};
const sv3 = {
  username: "user3",
  score: 5,
};
const sinhvien = [sv1, sv2, sv3];
console.log(sinhvien);
//In ra tên của từng sinh viên
sinhvien.forEach((sv) => {
  console.log(sv.username);
});
//Duyệt qua từng thuộc tính (for in)
const person = {
  email: "abc@gmail.com",
  name: "John",
  age: 30,
};
//key: email, name, age
//person[key]: person["email"], person["name"], person["age"]
for (let key in person) {
  console.log(key, person[key]);
}
//Duyệt qua các giá trị (for of)
for (let value of Object.values(person)) {
  console.log(value);
}
//Duyệt qua các cặp key-value (for of)
for (let [key, value] of Object.entries(person)) {
  console.log(key, value);
}
