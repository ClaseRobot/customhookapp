import { useState } from 'react'
import { UserContext } from './UserContext'

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState()

  handleSetUser = (user) => {
    setUser(user)
  }

  return (

    <UserContext.Provider value={{ user, handleSetUser }}>
      {children}
    </UserContext.Provider>
  )
}