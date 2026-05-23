console.log("Video 29");
for (let i = 1; i < 10; i++) {
  console.log(i);
  if (i === 5) {
    break; //thoát khỏi vòng lặp hoàn toàn
  }
}

for (let i = 1; i < 10; i++) {
  if (i === 5) {
    continue; //thoát khỏi vòng lặp hiện tại
  }
  console.log(i);
}
