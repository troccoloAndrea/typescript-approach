import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FaPlus, FaTruckLoading } from 'react-icons/fa'
import List from '../list/List'
import Loading from '../../shared/Loading'





export interface Product{
  id: number,
  description: string,
  price: number,
  stock: number,
  category: number
}

const Home = () => {

  const [ products, setProducts ] = useState<Product[]>([]);

    useEffect(() => {
    console.log("use effect")
    axios.get<Product[]>('http://localhost:3004/products')
    .then(res => {
      setProducts(res.data)
    })
    .catch(err => alert(err))
  }, [])
  
  console.log('render')

  return (

    <div className="container">
        <div className='row'>
            <div className="col-sm-12 col-md-8 col-lg-10">
                <h1 className='align-middle'>Products List</h1>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-2">
                <button className="purple-button"><FaPlus/>New product</button>
            </div>
        </div>
        <div className='list'>
            {products.length == 0 ? <Loading /> :  <List products={products}/>}
        </div>
    </div>

  )
}

export default Home;