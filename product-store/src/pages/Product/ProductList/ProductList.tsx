import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { Category } from '../../Category/CategoryPage';
import { Product } from '../models/Product';
import ProductListItem from './ProductListItem';

type ProductListProps = {
  products: Product[],
  DeleteProduct: (id:number) => void
}

const ProductList = ({ products, DeleteProduct }: ProductListProps) => {
  return (
    <>
      <table className="table table-responsive table-striped">
        <thead className='table-light' >
          <tr>
            <th className='p-3' scope="col">Id</th>
            <th className='p-3' scope="col">Description</th>
            <th className='p-3' scope="col">Price</th>
            <th className='p-3' scope="col">Stock</th>
            <th className='p-3' scope="col">Category</th>
            <th className='p-3 text-end' ></th>
          </tr>
        </thead>
        <tbody>
        {products.map((product) => <ProductListItem product={product} key={product.id} DeleteProduct={DeleteProduct} /> )}
        </tbody>
      </table>
    </>
  )
}

export default ProductList;