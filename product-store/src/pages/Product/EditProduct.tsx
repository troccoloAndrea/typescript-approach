import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaArrowLeft, FaCheck } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom'
import Loading from '../../shared/Loading';
import PageHeader from '../../shared/PageHeader';
import { Product } from './models/Product';
import ProductForm from './ProductForm/ProductForm';


const EditProduct = () => {
    const [product, setProduct] = useState<Product>()
    const { id } = useParams()
    let navigate = useNavigate()

    useEffect(() => {
        id ? GetProduct(id) : alert("error");
    }, [])


    const GetProduct = async (id: string) => {
        await axios.get<Product>(`http://localhost:3004/products/${id}`)
            .then(res => {
                setProduct(res.data)
            })
            .catch(err => alert(err))
    }

    const PatchProduct = (data: Product) => {
        axios.patch(`http://localhost:3004/products/${id}`, data)
            .then((res) => {
                alert("Product edited successfully");
                navigate("/");
            })
            .catch((err) => alert(err))
    }


    return (
        <div className="container">
            <PageHeader pageTitle='Edit product' buttonIcon={<FaArrowLeft />} buttonText='back to product list' buttonLink='/' />
            {product ? <ProductForm buttonIcon={<FaCheck />} product={product} buttonText="Edit this products" SubmitHandler={PatchProduct} /> : <Loading/>}
        </div>
    )
}

export default EditProduct