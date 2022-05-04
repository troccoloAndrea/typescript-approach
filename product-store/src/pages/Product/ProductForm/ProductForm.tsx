import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import {Product} from '../models/Product'

type ProductFormProps = {
    buttonText: string,
    buttonIcon: React.ReactNode,
    SubmitHandler: (data: Product) => void
}

const ProductForm:React.FC<ProductFormProps> = ({buttonIcon, buttonText, SubmitHandler}) => {

    const { register, handleSubmit, formState: { errors } } = useForm<Product>();
    const onSubmit: SubmitHandler<Product> = data => { SubmitHandler(data) };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className='form-label'>Id</label>
          <input className={`form-control ${errors.id && 'is-invalid'}`} {...register("id", { required: true })} placeholder="Id" />
          {errors.id && <span className='invalid-feedback'>Id is required</span>}
        </div>

        <div className="mb-3">
          <label className='form-label'>Description</label>
          <input className={`form-control ${errors.description && 'is-invalid'}`} {...register("description", { required: true })} placeholder="Description" />
          {errors.description && <span className='invalid-feedback'>Description is required</span>}
        </div>

        <div className="mb-3">
          <label className='form-label'>Price</label>
          <input className={`form-control ${errors.price && 'is-invalid'}`} {...register("price", { required: true, min: 0 })} placeholder="Price" />
          {errors.price && <span className='invalid-feedback'>Price is required</span>}
        </div>

        <div className="mb-3">
          <label className='form-label'>Stock</label>
          <input className={`form-control ${errors.stock && 'is-invalid'}`}  {...register("stock", { required: true, min: 0 })} placeholder="Stock" />
          {errors.stock && <span className='invalid-feedback'>Stock is required</span>}
        </div>

        <div className="mb-3">
          <label className='form-label'>Category</label>
          <input className={`form-control ${errors.category && 'is-invalid'}`} {...register("category", { required: true })} placeholder="Category" />
          {errors.category && <span className='invalid-feedback'>Category is required</span>}
        </div>

        <div className="mb-3">
          <button type="submit" className='purple-button'>{buttonIcon}{buttonText}</button>
        </div>
      </form>

  )
}

export default ProductForm