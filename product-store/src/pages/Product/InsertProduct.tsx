import React from 'react'
import { FaArrowLeft, FaCheck } from 'react-icons/fa'
import PageHeader from '../../shared/PageHeader'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Product } from './models/Product';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import ProductForm from './ProductForm/ProductForm';


const InsertProduct = () => {

  let navigate = useNavigate();

  const PostProduct = (data:Product) => {
    axios.post('http://localhost:3004/products', data)
    .then((res) => {
      alert("Product entered successfully");
      navigate("/");
    })
    .catch((err) => alert(err))
  };

  return (
    <div className="container">
      <PageHeader pageTitle='Insert new product' buttonIcon={<FaArrowLeft />} buttonText='back to product list' buttonLink='/' />
      <ProductForm buttonIcon={<FaCheck />} buttonText="Insert this products" SubmitHandler={PostProduct}/>
    </div>
  )

}

export default InsertProduct;