import React from 'react'
import { FieldError, FormState, UseFormRegister } from 'react-hook-form'
import { Product } from '../../models/Product'

export type ProductField = "id" | "description" | "stock" | "price" | "category";

type FromTextInputProps = {
  register: UseFormRegister<Product>,
  defaultValue: string,
  fieldError?: FieldError,
  fieldName: ProductField,
  fieldPlaceholder: string,
  errorFeedback: string

}

const FormTextInput = ({ register, defaultValue, fieldName, fieldError, errorFeedback, fieldPlaceholder }: FromTextInputProps) => {
  return (
    <div className="mb-3">
      <label className='form-label'>{fieldName}</label>
      <input defaultValue={defaultValue} className={`form-control ${fieldError && 'is-invalid'}`} {...register(fieldName, { required: true })} placeholder={fieldPlaceholder} />
      {fieldError && <span className='invalid-feedback'>{errorFeedback}</span>}
    </div>
  )
}

export default FormTextInput