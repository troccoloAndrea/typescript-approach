import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { Product } from '../models/Product';

type ProductListItemProps = {
  product: Product,
  DeleteProduct: (id:number) => void
}

const ProductListItem = ({product, DeleteProduct}: ProductListItemProps) => {
  return (
    <tr>
      <td className='value align-middle'>{product.id}</td>
      <td className='value align-middle'>{product.description}</td>
      <td className='value align-middle'>{product.price}</td>
      <td className='value align-middle'>{product.stock}</td>
      <td className='value align-middle'>{product.category}</td>
      <td className='actions align-middle'>
        <Link to={`/product/edit/${product.id}`} className='purple-button  purple-button-sm'><FaEdit />Edit</Link>
        <button onClick={()=> DeleteProduct(product.id)} className='purple-button purple-button-sm purple-button-delete'><FaTrash />Delete</button>
      </td>
    </tr>
  )
}

export default ProductListItem;