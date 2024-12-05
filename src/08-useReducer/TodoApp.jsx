import { useState, useReducer } from "react"
import { todoReducer } from "./todoReducer"
import { TodoList } from "./TodoList"
import './styles.css'
import { useForm } from "../hooks/useForm"
import { TodoModal } from "./TodoModal"

const initialState = [{
    id: new Date().getTime(),
    description: 'Recolectar la piedra del tiempo',
    done: 'Pendiente'
}, {
    id: new Date().getTime() + 100,
    description: 'Recolectar la piedra del espacio',
    done: 'En curso'
}]

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState)
  const [taskToEdit, setTaskToEdit] = useState(null)

  const { formState, onInputChange, onResetForm } = useForm({ description : '' })

  const onNewTodo = (todo) => {
    const action = {
      type: 'agregar',
      payload: todo
    }
    dispatch(action)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if(description.trim().length <= 1) return
    
    const newTodo = {
      id: new Date().getTime(),
      description: description,
      done: 'Pendiente'
    }
    onNewTodo(newTodo)
    onResetForm()
  }

  const onDeleteTodo = (id) => {
    const action = {
      type: 'eliminar',
      payload: id
    }
    dispatch(action)
  }

  const onUpdateTodo = (task) => {
    console.log('onUptateTodo task',task)
    const action = {
      type: 'actualizar',
      payload: task
    }
    dispatch(action)
  }

  const onToggleState = (id) => {
    const action = {
      type: 'toggleState',
      payload: id
    }
    dispatch(action)
  }

  // Se puede pasar a un hook useModal
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleEditTask = (task) => {
    console.log('task', task)
    setTaskToEdit(task)
    setIsModalOpen(true);
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const {description} = formState

  return (
    <>
      <div className="container">
        <TodoModal isOpen={isModalOpen} handleClose={handleCloseModal} task={taskToEdit} onUpdateTodo={onUpdateTodo}/>
        <h1 className="title">TODO App</h1>
        <hr />
        <div className="todoListContainer">
          <div className="todoList">
            <ul>
              <TodoList 
                todos={todos} 
                onDeleteTodo={onDeleteTodo} 
                onUpdateTodo={onUpdateTodo} 
                onToggleState={onToggleState}
                handleEditTask={handleEditTask}
              />
            </ul>
          </div>
          <div className="inputList">
            <form onSubmit={onSubmit}>
              <input 
                type="text"
                placeholder="Ingrese una tarea"
                name="description"
                value={description}
                onChange={onInputChange}
               />
              <button className="btn" type="submit">Agregar</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}