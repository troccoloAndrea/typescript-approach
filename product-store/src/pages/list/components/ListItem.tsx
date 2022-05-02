import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { Product } from '../../Product/ProductPage'

type ListItemProps = {
  product: Product
}

const ListItem = ({product}: ListItemProps) => {
  return (
    <tr>
      <td className='value align-middle'>{product.id}</td>
      <td className='value align-middle'>{product.description}</td>
      <td className='value align-middle'>{product.price}</td>
      <td className='value align-middle'>{product.stock}</td>
      <td className='value align-middle'>{product.category}</td>
      <td className='actions align-middle'><button className='purple-button  purple-button-sm'><FaEdit />Edit</button><button className='purple-button purple-button-sm purple-button-delete'><FaTrash />Delete</button></td>
    </tr>
    




  )
}

export default ListItem;