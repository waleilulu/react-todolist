// TodoList 4: todos 轉為物件陣列
import "./App.css";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "吃早餐", completed: true },
    { id: 2, text: "做體操", completed: false },
    { id: 3, text: "寫程式", completed: true },
    { id: 4, text: "辦年貨", completed: false },
    { id: 5, text: "發紅包", completed: false },
  ]);

  // 用來存放<input>的值
  const [todo, setTodo] = useState(""); // 預設初始值

  // input的onChange事件處理
  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  // 按下Add按鈕要處理的事情
  const handleClick = () => {
    if (!todo) return; // 若todo沒有資料則離開此程序

    // 取 id 值 = 目前 todos 的最大 id + 1
    // ...todos.map((t) => t.id) 得到 [1, 2, 3, 4, 5]
    // Math.max([1, 2, 3, 4, 5]) 得到 5
    const newId =
      todos.length > 0 ? Math.max(...todos.map((t) => t.id)) + 1 : 1;

    const newTodo = {
      id: newId,
      text: todo,
      completed: false,
    };

    setTodos([...todos, newTodo]);

    setTodo(""); // 將 input輸入框清空
  };

  return (
    <>
      <h1>My TodoList</h1>
      <div>
        <input type="text" value={todo} onChange={handleChange} />
        <button onClick={handleClick}>Add</button>
      </div>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              {todo.id}
              {todo.text}
              {todo.completed}
            </li>
          )
        })}
      </ul>
    </>
  );
}
export default App;
