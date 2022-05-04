import React from 'react'
import { FormState, UseFormRegister } from 'react-hook-form'
import { Product } from '../../models/Product'

type FromTextInputProps = {
  register: UseFormRegister<Product>,
  formState: FormState<Product>,
  fieldName: Product,
  fieldPlaceholder: string,
  errorFeedback: string

}

const FormTextInput = ({ register, formState , errorFeedback, fieldName, fieldPlaceholder }: FromTextInputProps) => {
  return (
    <div className="mb-3">
      <label className='form-label'>{fieldName}</label>
      <input className={`form-control ${formState.errors. && 'is-invalid'}`} {...register(fieldName, { required: true })} placeholder={fieldPlaceholder} />
      {formState.errors.id && <span className='invalid-feedback'>{errorFeedback}</span>}
    </div>
  )
}

export default FormTextInput