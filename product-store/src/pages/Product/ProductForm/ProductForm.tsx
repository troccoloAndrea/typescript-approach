import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import {Product} from '../models/Product'
import FormTextInput from './components/FormTextInput'

type ProductFormProps = {
    product?: Product,
    buttonText: string,
    buttonIcon: React.ReactNode,
    SubmitHandler: (data: Product) => void
}

const ProductForm:React.FC<ProductFormProps> = ({product, buttonIcon, buttonText, SubmitHandler}) => {

    const { register, handleSubmit, formState: { errors } } = useForm<Product>();
    const onSubmit: SubmitHandler<Product> = data => { SubmitHandler(data) };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <FormTextInput register={register} defaultValue={product? product.id.toString() : ""} fieldName="id" fieldError={errors.id} errorFeedback="Id is required" fieldPlaceholder='Id' />
        <FormTextInput register={register} defaultValue={product? product.description : ""} fieldName="description" fieldError={errors.description} errorFeedback="Description is required" fieldPlaceholder='Description' />
        <FormTextInput register={register} defaultValue={product? product.price.toString() : ""} fieldName="price" fieldError={errors.price} errorFeedback="Price is required" fieldPlaceholder='Price' />
        <FormTextInput register={register} defaultValue={product? product.stock.toString() : ""} fieldName="stock" fieldError={errors.stock} errorFeedback="Stock is required" fieldPlaceholder='Stock' />
        <FormTextInput register={register} defaultValue={product? product.category.toString() : ""} fieldName="category" fieldError={errors.category} errorFeedback="Category is required" fieldPlaceholder='Category' />
        <div className="mb-3">
          <button type="submit" className='purple-button'>{buttonIcon}{buttonText}</button>
        </div>
      </form>

  )
}

export default ProductForm