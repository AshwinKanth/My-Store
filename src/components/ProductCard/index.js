import {Link} from 'react-router-dom'

import ThemeContext from "../../context/ThemeContext"

import "./index.css"


const ProductCard = (props) =>{
    const {productCardDetails} = props
    const {title,category,price,rating,image,count,id} = productCardDetails

    const productsCount = count > 150 ? "Hurry!! free delivery" : "Only few left"

    return(
        <ThemeContext.Consumer>
            {value =>{
                const {isDarkTheme} = value
                const text = isDarkTheme ? "textDark" : "textLight"

                return(
                    <Link to={`/products/${id}`} className='navLink'>
                    <li className="product-item">
                        <img src={image} alt={title} className="productImage"/>
                        <h1 className={`title ${text}`}>{title}</h1>
                        <p className={`category ${text}`}>by {category}</p>
                        <div className="productDetails">
                            <p className={`price ${text}`}>{`Rs ${price}/-`}</p>
                            <div className="rating-container">
                                <p className="rating">{rating}</p>
                                <img src="https://assets.ccbp.in/frontend/react-js/star-img.png" className="starImage" alt="star"/>
                            </div>
                        </div>
                        <p className={`count ${text}`}>{`(${count}) ${productsCount}`}</p>
                    </li>
                    </Link>
                )
            }}
        </ThemeContext.Consumer>
    )
}

export default ProductCard