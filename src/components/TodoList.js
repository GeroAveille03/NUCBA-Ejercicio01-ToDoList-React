import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, toggleComplete, removeTodo}) => {
  return (
    <ul style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%"}}>
        {todos.map(todo => (
            <Todo 
            key={todo.id} 
            todo={todo} 
            toggleComplete={toggleComplete} 
            removeTodo={removeTodo}
            />
        ))}
    </ul>
  )
}

export default TodoList