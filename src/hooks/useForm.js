import {useState} from 'react'

export const useForm = ( initialForm = {} ) => {
  const [formState, setFormState] = useState(initialForm)

  const onInputChange = ({target}) => {
    const {name, value} = target
    if(value.length > 50) {
      value = value.slice(0, 50);
    }
    setFormState({
      ...formState,
      [name]: value
    })
  }

  const onResetForm = () => {
    setFormState(initialForm)
  }

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm
  }
}