import Todo from './Todo.js'
function TodoList(props){
    const {todos} = props
    console.log('from todolist', todos);
    return (
        <div>
            <h1>Todo List</h1>
            { todos.length ? (
            <>
            <h2>Todos Items</h2>
            
            <ul>
                {todos.filter(item => !item.completed)
                .map(item => <Todo todo ={item}/>)}
            </ul>
            
            <h2>Completed todos</h2>
            <ul>
                {todos.filter(item=> item.completed)
                .map(item => <Todo todo = {item}/>)}
            </ul>


            </>
            ) : (<h2>No Todos</h2>)}
        </div>
    )
}


export default TodoList;