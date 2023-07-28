

function Todo(props){
    const {todo, completeTodo, editTodoText} = props;
    return (
        <div>
            <li>{todo.text}</li>
            <input type='text' onKeyDown={(e) => e.key === 'Enter' && editTodoText(todo.id, e)}/>
            
            <label>
                Complete
                <input
                    type="checkbox"
                    checked ={todo.completed}
                    onChange={() => completeTodo(todo.id)}
                />
            </label>
        </div>
    )

}


export default Todo;