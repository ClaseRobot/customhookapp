import { TodoCard } from "./TodoCard"

export const TodoList = ({todos, onDeleteTodo, onUpdateTodo, onToggleState, handleEditTask}) => {
  // console.log(todos)
  return (
    <>
      {
        todos.map((todo, index) => (
          <TodoCard 
            key={todo.id} 
            index={index}
            todo={todo} 
            onToggleState={onToggleState} 
            onDeleteTodo={onDeleteTodo} 
            onUpdateTodo={onUpdateTodo} 
            handleEditTask={handleEditTask}
          />  
        ))
      }
    </>
  )
}