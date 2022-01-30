import React from 'react'

/* All function / class names HAS TO BE in CAPS */

export default function SimpleForm() {
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

  return (
    <form onSubmit={handleSubmit}>
      <input name='email' type='email' required />
      <input name='password' type='password' required />
      <button>Submit</button>
    </form>
  )
}
