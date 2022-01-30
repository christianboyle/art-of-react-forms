import SimpleForm from './simple-form'
import SlightlyComplexForm from './slightly-complex-form'
import RhfForm from './rhf-form'
import RhfFormWithZod from './rhf-form-with-zod'

var Forms = function () {
  return (
    <div>
      <p>Simple Form</p>
      <SimpleForm />
      <br />
      <br />
      <p>Slightly More Complex Form</p>
      <SlightlyComplexForm />
      <br />
      <br />
      <p>React Hook Form</p>
      <RhfForm />
      <br />
      <br />
      <p>React Hook Form with Zod</p>
      <RhfFormWithZod />
    </div>
  )
}

export default Forms
