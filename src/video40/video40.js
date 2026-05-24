console.log("Video 40");
const scores = [10, 8, 3, 7, 5];
scores.forEach((score, index) => {
  console.log(`Index: ${index}, Score: ${score}`);
});
const doubledScores = scores.map((score) => {
  return score * 2;
});
const filteredScores = scores.map((score) => score * 3);
console.log("Filtered Scores:", filteredScores);
console.log("Doubled Scores:", doubledScores);
