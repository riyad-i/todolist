import {useState} from 'react';
import './App.css';
import todosData from './data/todosData.js'
import TodoList from './components/TodoList'



function App() {
  const [todos, setTodos] = useState(todosData);
  // console.log(todos);

  return (
    <div className="App">
      <h1>Todo App</h1>

      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
