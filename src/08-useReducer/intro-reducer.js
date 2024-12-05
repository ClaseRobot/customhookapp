import { useState, useReducer } from 'react'

console.log('hola mundo')

const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del alma',
    done: false
}]

const todoReducer = (state = initialState, action) => {
    if (action.type === 'agregar') {
        return [...state, action.payload]
    }
    return state
}

const [todos, dispatchTodo] = useReducer(todoReducer, initialState)