console.log("Video 39");
const myClass = ["Eric", "John", "Jane", "Bob"];
console.log(myClass, myClass.length);
for (let i = 0; i < myClass.length; i++) {
  console.log(myClass[i]);
}
for (let i = 1; i <= myClass.length; i++) {
  console.log("i=: " + i + " and value: " + myClass[i - 1]);
}
//for-each loop (value, index)
myClass.forEach((student) => {
  console.log(student);
});
myClass.forEach((student, index) => {
  console.log("index: " + index + " and value: " + student);
});
