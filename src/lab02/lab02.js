console.log("Lab 02");
const diemToan = 9;
const diemVan = 8;
const diemAnh = 7;
const diemTrungBinh = (diemToan, diemVan, diemAnh) => {
  return (diemToan + diemVan + diemAnh) / 3;
};
let xepLoai = (diemTrungBinh) => {
  if (diemTrungBinh >= 9) {
    return "Xuất sắc";
  } else if (diemTrungBinh >= 8 && diemTrungBinh < 9) {
    return "Giỏi";
  } else if (diemTrungBinh >= 6.5 && diemTrungBinh < 8) {
    return "Khá";
  } else {
    return "Trung bình";
  }
};
console.log(`Điểm trung bình: ${diemTrungBinh(diemToan, diemVan, diemAnh)}`);
console.log(`Xếp loại: ${xepLoai(diemTrungBinh(diemToan, diemVan, diemAnh))}`);
