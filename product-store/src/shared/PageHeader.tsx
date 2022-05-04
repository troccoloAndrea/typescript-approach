import React from 'react'
import { IconType } from 'react-icons';
import { FaPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'

type PageHeaderProps = {
    pageTitle: string,
    buttonIcon:React.ReactNode;
    buttonText: string,
    buttonLink: string,
}

const PageHeader:React.FC<PageHeaderProps> = ({ pageTitle, buttonIcon, buttonText, buttonLink}) => {
    return (
        <div className='main-page'>
            <div className='row'>
                <div className="col-l col-sm-12 col-md-8 col-lg-8">
                    <h1 className='align-middle'>{pageTitle}</h1>
                </div>
                <div className="col-r col-sm-12 col-md-4 col-lg-4">
                    <Link to={buttonLink} className="purple-button">{buttonIcon}{buttonText}</Link>
                </div>
            </div>
        </div>
    )
}

export default PageHeader