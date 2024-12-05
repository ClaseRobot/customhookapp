export const todoReducer = (initialState, action) => {
    switch (action.type) {
      case 'ABC':
        throw new Error('Action.type ABC no esta implementada')
        break;

      case 'DEF':
        console.log('DEF')
        break;

      case 'agregar':
        return [...initialState, action.payload]
        break;
      
      case 'eliminar':
        return initialState.filter(todo => todo.id !== action.payload)
        break;

      case 'actualizar':
        return initialState.map(todo => {
          if (todo.id === action.payload.id) {
            return action.payload
          }
          return todo
        })
        break;
      
      // Pendiente, (Pausada), En curso, Finalizada, Test, Produccion
      // TODO Refactorizar con un diccionario los if
      // TODO cambiar los colores para cada estado
      case 'toggleState':
        return initialState.map(todo => {
          if (todo.id === action.payload) {
            // si esta en pendiente cambiar a en curso
            if (todo.done === 'Pendiente') {
              return {
                ...todo,
                done: 'En curso'
              }
            }
            // si esta en en curso cambiar a finalizada
            if (todo.done === 'En curso') {
              return {
                ...todo,
                done: 'Finalizada'
              }
            }
            // si esta en finalizada cambiar a pendiente
            if (todo.done === 'Finalizada') {
              return {
                ...todo,
                done: 'Test'
              }
            }
            if(todo.done === 'Test') {
              return {
                ...todo,
                done: 'Produccion'
              }
            }
          }
          return todo
        })
        break;

      default:
        return initialState
    }
}