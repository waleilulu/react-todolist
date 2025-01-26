// TodoList 3: 狀態維護(useState)與事件處理(click)
import "./App.css";
import { useState } from "react";

function App() {
  // const todos = ["吃早餐", "做體操", "寫程式", "辦年貨"];
  const [todos, setTodos] = useState( ["吃早餐", "做體操", "寫程式", "辦年貨", "發紅包"]); // 渲染網頁

  return (
    <>
      <h1>TodoList</h1>
      <div>
        <input type="text" />
        <button>Add</button>
      </div>
      <ul>
        {todos.map((todo, index) => {
          return <li key={index}>{todo}</li>;
        })}
      </ul>
    </>
  )
}
export default App;
