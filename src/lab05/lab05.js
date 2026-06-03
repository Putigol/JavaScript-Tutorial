console.log("Lab 05");
//Thực hiện gọi API với fetch (lấy danh sách users)
const fetchData = async () => {
  const res = await fetch("http://localhost:8000/users");
  const data = await res.json();
  console.log(data);
  //Tiến hành insert data to html
  //Dấu # tượng trưng cho id
  const tbody = document.querySelector("#users tbody");
  //Kiểm tra xem data có rỗng không
  if (data && data.length) {
    data.forEach((user, index) => {
      tbody.innerHTML += `<tr>
          <td>${user.id}</td>
          <td>${user.name}</td>
          <td>${user.email}</td>
        </tr>`;
    });
  }
};
fetchData();
