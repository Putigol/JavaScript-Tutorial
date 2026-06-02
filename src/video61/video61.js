console.log("Video 61");
console.log("1");
//hàm setTimeout sẽ được thực thi sau một khoảng thời gian nhất định, nhưng nó không chặn các lệnh tiếp theo trong code. Do đó, "3" sẽ được in ra trước khi "2" được in ra sau 2 giây.
setTimeout(() => {
  console.log("2");
}, 2 * 1000);
console.log("3");
