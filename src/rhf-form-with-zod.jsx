import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const schema = z.object({
  email: z.string().email().min(2),
  password: z.string().min(6)
})

export default function App() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(schema)
  })

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
      {errors.email?.message && <span>{errors.email?.message}</span>}

      <input
        {...register('password', { required: true, minLength: 6 })}
        name='password'
        type='password'
      />
      {errors.password?.message && <span>{errors.password?.message}</span>}
      <button>Submit</button>
    </form>
  )
}
