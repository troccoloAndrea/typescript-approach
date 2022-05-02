import React from 'react'
import './Footer.css'

import {FaHeart} from 'react-icons/fa'

type Props = {}

export default function Footer({}: Props) {
  return (
    <div className='footer'>
        <p className="navbar-brand">ProductsStore</p>
        <p>Made with <FaHeart color="red"/> by Andrea</p>
    </div>


  )
}