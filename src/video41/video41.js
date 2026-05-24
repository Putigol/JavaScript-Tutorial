console.log("Video 41");
const ages = [18, 31, 14, 25, 40];
const adults = ages.filter((age) => age === 18);
const adults2 = ages.filter((age) => {
  return age >= 18;
});
console.log(adults);
