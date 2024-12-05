import { useState } from 'react'
import './styles.css'

export const TodoModal = ({isOpen, handleClose, task , onUpdateTodo}) => {
  console.log('task modal', task)

  const [updateTask, setUpdatedTask] = useState({ ...task })
  console.log('updateTask', updateTask)

  const {id, description, done} = updateTask || {}

  const onInputChange = ({target}) => {
    const {name, value} = target
    setUpdatedTask({
      ...updateTask,
      [name]: value
    })
  }

  const submitUpdate = (e) => {
    e.preventDefault()
    if(description.trim().length <= 1) return

    const updateTodo = {
      id: id,
      description: description,
      done: done
    }
    onUpdateTodo(updateTodo)
    handleClose()
  }

  return (
    <>
      <div className={`task-modal ${isOpen ? 'is-open' : ''}`}>
        <div className="modal-content">
          <p>Ingrese la nueva descripción:</p>
          <input 
            type="text" 
            id="descripcion" 
            value={updateTask.description}  
            onChange={onInputChange}
            name="description"
          />
          <div className="btn-content">
            <button className="btn-save" onClick={submitUpdate}>Guardar</button>
            <button className='btn-cancel' onClick={handleClose}>Cancelar</button>
          </div>
        </div>
      </div>
    </>
  )
}