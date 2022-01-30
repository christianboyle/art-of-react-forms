import { useForm } from 'react-hook-form'

export default function RhfForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  const processForm = async (data) => {
    await fetch('/api/form', {
      method: 'POST',
      body: JSON.stringify(data)
    })

    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(processForm)}
      style={{ display: 'flex', flexDirection: 'column', width: 300 }}
    >
      <input
        {...register('email', { required: true })}
        name='email'
        type='email'
      />
      {errors.email && <span>Email is required </span>}

      <input
        {...register('password', { required: true, minLength: 6 })}
        name='password'
        type='password'
      />
      {errors.password && (
        <span>Password is required and must be at least 6 characters.</span>
      )}

      <button>Submit</button>
    </form>
  )
}
