console.log("Video 63");

//fetch cho phép gọi API (fetch => raw data (response) => object)
const temp = fetch("http://localhost:8000/users");
temp.then((res) => res.json()).then((data) => console.log(data));
// Phần 1: .then((data) => data.json())
// temp.then() - temp là một Promise được trả về từ fetch(). Khi fetch hoàn thành, nó sẽ gọi hàm trong .then()
// (data) => data.json() - Đây là một arrow function (hàm mũi tên):
// data - chứa raw response từ server (dạng stream/buffer, chưa phải JSON)
// data.json() - gọi method json() để chuyển response từ format text thành object JavaScript
// Trả về - một Promise mới chứa dữ liệu JSON
// Phần 2: .then((objectData) => console.log(objectData))
// Sau khi Promise ở phần 1 hoàn thành, .then() thứ hai được gọi
// (objectData) => console.log(objectData) - arrow function nhận:
// objectData - dữ liệu JSON đã được parse (là object/array)
// console.log(objectData) - in dữ liệu ra console để xem kết quả
