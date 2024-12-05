import './styles.css'
import { TodoModal } from './TodoModal'

// Pendiente, (Pausada), En curso, Finalizada, Test, Produccion

export const TodoCard = ({todo, onDeleteTodo, onUpdateTodo, onToggleState, index, handleEditTask}) => {
  const {description, done} = todo
  // console.log(description)
  

  return (
    <>
      <li className="card">
        <div className="card-content">
          <div className='card-header'>
            <h3>Task {index + 1}</h3>
            <p>18-10-2024</p>
          </div>
          <p>{description}</p>
          <button data-state={todo.done} onClick={ () => onToggleState(todo.id) } className='state-task state-color'>{todo.done}</button>
        </div>
        <div className="card-actions">
          <button onClick={ () => onDeleteTodo(todo.id) } className="btn-delete">Eliminar</button>
          {/* <button onClick={ () => onUpdateTodo(todo.id) } className="btn-update">Editar</button> */}
          <button onClick={ () => handleEditTask(todo) } className="btn-update">Editar</button>
        </div>
      </li>
    </>
  )
}