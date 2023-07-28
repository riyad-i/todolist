import {useState} from 'react';
import './App.css';
import todosData from './data/todosData.js'
import TodoList from './components/TodoList'



function App() {
  const [todos, setTodos] = useState(todosData);
  

  const addTodo = (e) => {
    const newTodo = {
      id: new Date(),
      text: e.target.value,
      completed: false,
    }
    setTodos([...todos, newTodo]);
    e.target.value =''
  }


  const completeTodo = (id) => {
    console.log(id);
  }

  return (
    <div className="App">
      <h1>Todo App</h1>

      <TodoList todos={todos} addTodo={addTodo}
      completeTodo={completeTodo}/>
    </div>
  );
}

export default App;
