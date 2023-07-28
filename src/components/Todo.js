

function Todo(props){
    const {todo} = props;
    return (
        <div>
            <li>{todo.text}</li>
        </div>
    )

}


export default Todo;