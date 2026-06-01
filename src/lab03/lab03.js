console.log("Lab 03");
const sp1 = {
  name: "iPhone 14 Pro Max",
  price: 30000000,
  inStock: true,
};
const sp2 = {
  name: "Samsung Galaxy S23 Ultra",
  price: 20000000,
  inStock: false,
};
const sp3 = {
  name: "Xiaomi Mi 13 Pro",
  price: 15000000,
  inStock: true,
};
const sp4 = {
  name: "Oppo Find X5 Pro",
  price: 18000000,
  inStock: false,
};
const sp5 = {
  name: "Vivo X80 Pro",
  price: 17000000,
  inStock: true,
};
const products = [sp1, sp2, sp3, sp4, sp5];

//In ra tên của sản phẩm đầu tiên
console.log(products[0].name);
//Thay đổi giá của sản phẩm thứ 2 thành 15000000 và in ra mảng sau khi thay đổi
products[1].price = 15000000;
console.log(products);
//Thêm 1 sản phẩm mới vào cuối mảng và in ra mảng sau khi thêm
products.append = function (product) {
  this.push(product);
};
products.append({
  name: "Realme GT 2 Pro",
  price: 16000000,
  inStock: true,
});
console.log(products);
//Xóa sản phẩm cuối cùng khỏi mảng và in ra mảng sau khi xóa
products.pop();
console.log(products);
//Dùng forEach để in ra tất cả các sản phẩm trong mảng
products.forEach((product) => {
  console.log(product);
});
//Dùng map để tạo mảng mới chỉ chứa giá sản phẩm và in ra mảng mới
const prices = products.map((product) => product.price);
console.log(prices);
//Dùng filter để tạo mảng mới chỉ chứa các sản phẩm còn hàng và in ra mảng mới
const inStockProducts = products.filter((product) => product.inStock);
console.log(inStockProducts);
//Dùng for in để duyệt qua tất cả các thuộc tính của sản phẩm đầu tiên và in ra tên thuộc tính và giá trị của nó
for (const key in products[0]) {
  console.log(`${key}: ${products[0][key]}`);
}
