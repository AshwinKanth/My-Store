import {Link} from 'react-router-dom'
import { GrFavorite } from "react-icons/gr";
import { MdOutlineFavorite } from "react-icons/md";

import ThemeContext from "../../context/ThemeContext"

import "./index.css"
import { Component } from 'react';


class ProductCard extends Component{
    render(){
        const {productCardDetails} = this.props
        const {title,category,price,rating,image,count,id} = productCardDetails

        const productsCount = count > 150 ? "Hurry!! free delivery" : "Only few left"
        return(
            <ThemeContext.Consumer>
            {value =>{
                const {isDarkTheme,addFavourite,removeFavourite,favouriteItem} = value
                const text = isDarkTheme ? "textDark" : "textLight"

                const isFavourite = favouriteItem.some(
                    each => each.id === productCardDetails.id
                )

                const onClickAddFavourite = () => {
                    addFavourite(productCardDetails)
                  }
        
                  const onClickremoveFavourite = () => {
                    removeFavourite(productCardDetails.id)
                  }

                return(
                    <div className='productCardContainer'>
                    <div className='favoritesButton-container'>
                        {isFavourite ? (
                            <button className='favoriteButton' type='button' onClickk={onClickAddFavourite}>
                            <MdOutlineFavorite/> save
                        </button>
                        ):(
                            <button className='favoriteButton' type='button' onClickk={onClickremoveFavourite}>
                            <GrFavorite/> not saved
                        </button>
                        )}
                    </div>
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
                    </div>
                )
            }}
        </ThemeContext.Consumer>
        )
    }
}


// const ProductCard = (props) =>{
//     const {productCardDetails,isLoveToggled} = props
//     const {title,category,price,rating,image,count,id} = productCardDetails

//     const productsCount = count > 150 ? "Hurry!! free delivery" : "Only few left"


//     return(
//         <ThemeContext.Consumer>
//             {value =>{
//                 const {isDarkTheme} = value
//                 const text = isDarkTheme ? "textDark" : "textLight"

//                 return(
//                     <div className='productCardContainer'>
//                     <div className='favoritesButton-container'>
//                         {isFavourite ? (
//                             <button className='favoriteButton' onClickk={onClickAddFavourite}>
//                             <GrFavorite/>
//                         </button>
//                         ):(
//                             <button className='favoriteButton' onClickk={onClickremoveFavourite}>
//                             <GrFavorite/>
//                         </button>
//                         )}
//                     </div>
//                     <Link to={`/products/${id}`} className='navLink'>
//                     <li className="product-item">
//                         <img src={image} alt={title} className="productImage"/>
//                         <h1 className={`title ${text}`}>{title}</h1>
//                         <p className={`category ${text}`}>by {category}</p>
//                         <div className="productDetails">
//                             <p className={`price ${text}`}>{`Rs ${price}/-`}</p>
//                             <div className="rating-container">
//                                 <p className="rating">{rating}</p>
//                                 <img src="https://assets.ccbp.in/frontend/react-js/star-img.png" className="starImage" alt="star"/>
//                             </div>
//                         </div>
//                         <p className={`count ${text}`}>{`(${count}) ${productsCount}`}</p>
//                     </li>
//                     </Link>
//                     </div>
//                 )
//             }}
//         </ThemeContext.Consumer>
//     )
// }

export default ProductCard