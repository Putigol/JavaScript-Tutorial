console.log("Lab 01");
const fullName = "Nguyễn Phúc Thịnh";
const birthYear = 2005;
let isStudent = true;
const today = new Date();
const currentYear = today.getFullYear();
const age = currentYear - birthYear;
console.log(`Tên: ${fullName}`);
console.log(`Năm sinh: ${birthYear}`);
console.log(`Tuổi: ${age}`);
console.log(`Là sinh viên: ${isStudent}`);
console.log("============");
console.log(`
Họ và tên: ${fullName}
Năm sinh: ${birthYear}
Tuổi: ${age}
Là sinh viên: ${isStudent}
`);
