// TodoList 3: 狀態維護(useState)與事件處理(click)
import "./App.css";
import { useState } from "react";

function App() {
  // const todos = ["吃早餐", "做體操", "寫程式", "辦年貨"];
  const [todos, setTodos] = useState( ["吃早餐", "做體操", "寫程式", "辦年貨", "發紅包"]); // 渲染網頁
  const [todo, setTodo] = useState('') // 預設初始值

  // input的onChange事件處理
  const handleChange = (event) => {
    setTodo(event.target.value);
  }
  
  // 按下Add按鈕要處理的事情
  const handleClick = () =>{
    // 舊版: 使用 concat來加入新的 todo
    // setTodos(todos.concat(todo));

    // 新版:使用展開運算子來加入新的todo
    setTodos([...todos, todo])
  }

  return (
    <>
      <h1>TodoList</h1>
      <div>
        <input type="text" value={todo} onChange={handleChange} />
        <button onClick={handleClick}>Add</button>
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
