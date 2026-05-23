console.log("Video 32");
const sum = (a, b, c) => {
  console.log("run before");
  if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") {
    console.log("run empty return");
    return;
  }
  console.log("run after");
  return a + b + c;
};

console.log(sum("anh", 2, 3));
