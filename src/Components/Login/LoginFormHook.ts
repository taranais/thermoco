import React from 'react'

// useForm functional componen
export const LoginFormHook = (callback: any, initialState: any = {}) => {
  const [values, setValues] = React.useState(initialState)

  // onChange
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  // onSubmit
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    await callback() // triggering the callback
  }

  // return values
  return {
    onChange,
    onSubmit,
    values
  }
}
