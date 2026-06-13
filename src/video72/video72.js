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
fetchLogs();
