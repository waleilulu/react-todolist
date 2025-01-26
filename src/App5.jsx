// TodoList 5: 切模組
import './App.css'
import { useState } from 'react'
import TodoInput from './components/pure/TodoInput'
import TodoList from './components/pure/TodoList'

function App() {

  const [todos, setTodos] = useState([
    {id: 1, text: '吃早餐', completed: true},
    {id: 2, text: '做體操', completed: false},
    {id: 3, text: '寫程式', completed: true},
    {id: 4, text: '辦年貨', completed: false},
    {id: 5, text: '發紅包', completed: false},
    {id: 6, text: '放鞭炮', completed: false},
  ]);

  // 用來存放 <input> 的值
  const [todo, setTodo] = useState('')

  // input 的 onChange 事件處理
  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  // 新增 Todo, 按下 Add 按鈕要處理的事情
  const handleClick = () => {
    if(!todo) return; // 若 todo 無資料則離開此程序
    const newId = todos.length > 0 ? Math.max(...todos.map((t) => t.id)) + 1 : 1;

    const newTodo = {
      id: newId, text: todo, completed: false
    };

    setTodos([...todos, newTodo]);

    setTodo(''); // 將 input 輸入框清空
  };

  // 更新 Todo 是否完成
  const toggleCompletion = (id) => {
    // 到 todos 找到該筆 id 資訊並將 completion 進行置換
    setTodos(
      todos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo)
    );
  }

  // 刪除 Todo
  const handleDelete = (id) => {
    // 利用 filter 來過濾不需要的資訊
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <>
      <h1>My TodoList</h1>
      <div>
        <TodoInput todo={todo} onChange={handleChange} onClick={handleClick} />
        <TodoList todos={todos} onToggleCompletion={toggleCompletion} onHandleDelete={handleDelete} />
      </div>
    </>
  )
}

export default App