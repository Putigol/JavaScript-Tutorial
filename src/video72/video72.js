console.log("Video 72");
// Hàm fetchLogs lấy danh sách blog
const fetchLogs = async () => {
  const res = await fetch("http://localhost:8000/blogs");
  const data = await res.json();
  //   Tiến hành insert data to html
  //   Dấu # tượng trưng cho id
  const tbody = document.querySelector("#blogs tbody");
  //   Kiểm tra xem data có rộng không
  if (data && data.length) {
    data.forEach((blog, index) => {
      tbody.innerHTML += `<tr>
          <td>${blog.id}</td>
          <td>${blog.title}</td>
          <td>${blog.author}</td>
          <td>${blog.content}</td>
          <td>
          <button class="delete-blog data-id="${blog.id}">Xoá</button>
          </td>
        </tr>`;
    });
  }
};
// Hàm addNewRowToEnd thêm dòng mô phỏng tạo một blog
const addNewRowToEnd = (blog) => {
  const tableBody = document.querySelector("#blogs tbody");
  // Tạo phần tử dòng mới
  const newRow = document.createElement("tr");
  // Gán HTML cho dòng
  newRow.innerHTML = `
<tr>
          <td>${blog.id}</td>
          <td>${blog.title}</td>
          <td>${blog.author}</td>
          <td>${blog.content}</td>
          <td>
          <button class="delete-blog" data-id="${blog.id}">Xoá</button>
          </td>
</tr>
`;
  // Thêm dòng vào cuối bảng
  tableBody.appendChild(newRow);
  //Gán sự kiện onClick cho row vừa tạo
  const btn = document.querySelector(`.data-id=${blog.id}`);
  btn.addEventListener("click", async () => {
    const id = btn.getAttribute("data-id");
    //Thêm đường dẫn id để nói với backend blog cần xoá
    const rawResponse = await fetch(`http://localhost:8000/blogs/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const data = await rawResponse.json();
    console.log("Phản hồi API delete: ", data);
    //Delete html row
    //Nút xoá nằm ở vị trí gần nhất của dòng
    const row = btn.closest("tr");
    row.remove();
  });
};
// Hàm handleAddNewBlog thêm blog vào backend
const handleAddNewBlog = () => {
  const title = document.getElementById("title");
  const author = document.getElementById("author");
  const content = document.getElementById("content");
  const saveBlogButton = document.getElementById("saveBlog");
  saveBlogButton.addEventListener("click", async () => {
    // Gọi API để tạo một blog mới
    const rawResponse = await fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title.value,
        author: author.value,
        content: content.value,
      }),
    });
    const data = await rawResponse.json();
    addNewRowToEnd(data);
    console.log("Phản hồi API create: ", data);
    // if (data) {
    //   fetchLogs();
    // }
  });
};
//
const handleDeleteBtns = () => {
  const btns = document.querySelectorAll(".delete-blog");
  console.log("btns: ", btns);
  if (btns) {
    btns.forEach((btn) => {
      btn.addEventListener("click", async () => {
        const id = btn.getAttribute("data-id");
        //Thêm đường dẫn id để nói với backend blog cần xoá
        const rawResponse = await fetch(`http://localhost:8000/blogs/${id}`, {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
        const data = await rawResponse.json();
        console.log("Phản hồi API delete: ", data);
        //Delete html row
        //Nút xoá nằm ở vị trí gần nhất của dòng
        const row = btn.closest("tr");
        row.remove();
      });
    });
  }
};
//Xử lý bất đồng bộ (chờ fetchLogs render rồi thực thi handleDeleteBtns )
fetchLogs().then(() => {
  handleDeleteBtns();
});
handleAddNewBlog();
handleDeleteBtns();
