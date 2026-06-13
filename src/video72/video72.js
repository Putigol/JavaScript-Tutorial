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
          <button>Xoá</button>
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
          <button>Xoá</button>
          </td>
</tr>
`;
  // Thêm dòng vào cuối bảng
  tableBody.appendChild(newRow);
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
fetchLogs();
handleAddNewBlog();
