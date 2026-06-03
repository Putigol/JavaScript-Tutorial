console.log("Video 64");
const doSomething = () => {
  const a = 19,
    b = 0;
  if (b === 0) {
    throw new Error("b phai khac 0");
  }
  console.log(a / b);
};
try {
  doSomething();
} catch (error) {
  console.log("Có lỗi xây ra ", error);
} finally {
  console.log("Finally");
}
//Dùng finally() để tiếp tục thực thi chương trình
