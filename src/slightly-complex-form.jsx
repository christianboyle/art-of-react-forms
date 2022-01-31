import { useState } from 'react'

export default function SlightlyComplexForm() {
  const [urlVisible, setUrlVisible] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    // Use FormData to get the input values
    const formData = new FormData(event.target)
    // Optionally, convert FormData into an object
    const dataObject = Object.fromEntries(formData)
    // Process the data
    await fetch('/api/form', {
      method: 'POST',
      body: JSON.stringify(dataObject)
    })
    // Clear the form
    event.target.reset()
  }

  const handleEmailChange = (event) => {
    setUrlVisible(Boolean(event.target.value.length))
  }

  const handlePasswordBlur = (event) => {
    event.target.reportValidity()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name='email' type='email' required onChange={handleEmailChange} />
      <input
        name='password'
        type='password'
        minlength='6'
        onBlur={handlePasswordBlur}
        required
      />
      {urlVisible && <input name='url' type='url' required />}
      <button>Submit</button>
    </form>
  )
}
