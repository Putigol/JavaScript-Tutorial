console.log("Video 70");
const saveBtnElement = document.getElementById("saveBtn");
const nameElement = document.getElementById("name");

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//Thêm đk if để tránh lỗi ở trang video70
if (saveBtnElement) {
  saveBtnElement.addEventListener("click", () => {
    alert(nameElement.value);
    const myTodo = {
      id: getRandomInt(1, 10000),
      name: nameElement.value,
    };
    const currentTodoStr = localStorage.getItem("todo");
    //Nếu tồn tại todo trước đó
    if (currentTodoStr) {
      //Hàm parse chuyển đổi string thành object
      const currentTodo = JSON.parse(currentTodoStr);
      //push thêm todo
      currentTodo.push(myTodo);
      //Đổi lại thành string và luu với key todo
      localStorage.setItem("todo", JSON.stringify(currentTodo));
    } else {
      //Hàm stringify chuyển đổi biến object thành string (dùng [] để thành array tránh ghi đè)
      localStorage.setItem("todo", JSON.stringify([myTodo]));
    }
    window.location.href = "video70.html";
  });
}

const generateTodoTable = () => {
  //Lấy dữ liệu từ localstorage
  const todoListStr = localStorage.getItem("todo");
  //Convert sang object
  const todoList = JSON.parse(todoListStr);
  console.log(todoList);

  //Tiến hành insert data to html
  //Dấu # tượng trưng cho id
  const tbody = document.querySelector("#todoList tbody");
  //Kiểm tra xem data có rỗng không
  if (todoList && todoList.length) {
    todoList.forEach((todo, index) => {
      tbody.innerHTML += `<tr>
          <td>${todo.id}</td>
          <td>${todo.name}</td>
          <td><button>Xoá</button></td>
        </tr>`;
    });
  }
};

generateTodoTable();
