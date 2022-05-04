import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FaPlus, FaTruckLoading } from 'react-icons/fa'
import ProductList from './ProductList/ProductList'
import Loading from '../../shared/Loading'
import { Product } from './models/Product'
import { Link } from 'react-router-dom'
import PageHeader from '../../shared/PageHeader'



const Home = () => {

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    GetProducts();
  }, [])

  const GetProducts = async () => {
    await axios.get<Product[]>('http://localhost:3004/products')
      .then(res => {
        setProducts(res.data)
      })
      .catch(err => alert(err))
  }


  const DeleteProduct = async (id: number) => {
    await axios.delete(`http://localhost:3004/products/${id}`)
      .then(() => {
        alert("Product successfully deleted")
        GetProducts();
      })
  }

  return (

    <div className="container">
      <PageHeader pageTitle='Products List' buttonIcon={<FaPlus/>} buttonText='New Product' buttonLink='/product/insert'/>
      <div className='list'>
        {products.length == 0 ? <Loading /> : <ProductList products={products} DeleteProduct={DeleteProduct} />}
      </div>
    </div>

  )
}

export default Home;