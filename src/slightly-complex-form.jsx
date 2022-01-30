import { useState } from 'react'

export default function SlightlyComplexForm() {
  const [urlVisible, setUrlVisible] = useState(false)

  const handleSubmit = async (event) => {
    // Same as before
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
