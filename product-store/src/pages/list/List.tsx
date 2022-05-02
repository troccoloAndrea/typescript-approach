import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { Category } from '../Category/CategoryPage';
import { Product } from '../Product/ProductPage';
import ListItem from './components/ListItem';

type ListProps = {
  products: Product[]
}

const List = ({ products }: ListProps) => {
  return (
    <>
      <table className="table table-responsive table-striped">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col">Stock</th>
            <th scope="col">Category</th>
            <th className='text-end'></th>
          </tr>
        </thead>
        <tbody>
        {products.map((product) => <ListItem product={product} key={product.id} /> )}
        </tbody>
      </table>
    </>
  )
}

export default List;