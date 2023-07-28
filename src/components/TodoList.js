import Todo from './Todo.js'
function TodoList(props){
    const {todos, addTodo, completeTodo, editTodoText, deleteTodo} = props
    console.log('from todolist', todos);
    return (
        <div>
            <h1>Create Todo</h1>

            <input type='text' 
                onKeyDown={(e) => e.key === 'Enter' && addTodo(e)}
            />

            { todos.length ? (
            <>
            <h2>Todos Items</h2>
            
            <ul>
                {todos.filter(item => !item.completed)
                .map(item => <Todo todo ={item}
                    completeTodo={completeTodo}
                    editTodoText={editTodoText}
                    deleteTodo= {deleteTodo}/>)}
            </ul>
            
            <h2>Completed todos</h2>
            <ul>
                {todos.filter(item=> item.completed)
                .map(item => <Todo todo = {item} 
                    completeTodo={completeTodo}
                    editTodoText={editTodoText}
                    deleteTodo= {deleteTodo}/>)}
            </ul>


            </>
            ) : (<h2>No Todos</h2>)}
        </div>
    )
}


export default TodoList;