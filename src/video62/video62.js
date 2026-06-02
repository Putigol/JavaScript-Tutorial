console.log("Video 62");
console.log("1");
console.log("3");
//Tạo 1 promise để mô phỏng 1 tác vụ mất thời gian
const myPromise = () => {
  return new Promise((resolve, reject) => {
    // setTimeout: 1 hàm bất đồng bộ, nó sẽ không dừng chương trình ở đây
    setTimeout(() => {
      console.log("2 with promise"); //Dòng này sẽ được thực thi sau cùng
      //Resolve báo thành công
      resolve("Done");
    }, 5000);
  });
};
//Dễ bị pending
const test = myPromise();
console.log(test);
console.log("=====================");
//Hàm then thực thi khi promise hoàn thành, tạo cảm giác bất đồng bộ thành đồng bộ
console.log("1");
myPromise().then((data) => {
  console.log("data: " + data);
  console.log("3");
});
