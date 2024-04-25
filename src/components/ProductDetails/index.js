import { Component } from "react"
import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import "./index.css"


class ProductDetails extends Component{
    state = {productData: {}}


    componentDidMount(){
        this.getProductDetails()
    }

    getFormattedData = data =>({
        title : data.title,
        description: data.description,
        price: data.price,
        image: data.image,
        category: data.category,
        rating: data.rating.rate,
        count: data.rating.count
    })


    getProductDetails = async() =>{
        const {match} = this.props
        const {params} = match
        const {id} = params

        console.log(id)

        const apiUrl = `https://fakestoreapi.com/products/${id}`

        const options = {
            method: "GET"
        }

        const response = await fetch(apiUrl,options)
        
        if (response.ok === true){
            const updatedData = await response.json()
            console.log(updatedData)
            const fetchedData = this.getFormattedData(updatedData)

            this.setState({productData: fetchedData})
        }


    }


    renderProductDetails = () =>{
        const {productData} = this.state
        const {title,price,description,image,rating,category,count} = productData

        const productsCount = count > 150 ? "Hurry!! free delivery" : "Only few left"

        return(
            <div className="productDetailsItem-container">
                <div className="image-container">
                    <img src={image} alt={title} className="productDetailsImage"/>
                </div>
                <div className="details-container">
                    <h1 className="productTitle">{title}</h1>
                    <p className="productCategory">{`by ${category}`}</p>
                    <p className="productPrice">{`Rs ${price}/-`}</p>
                        <div className="ratings-container">
                            <p className="rating">{rating}</p>
                            <img src="https://assets.ccbp.in/frontend/react-js/star-img.png" className="starImage" alt="star"/>
                        </div>
                    <p className="count">{`(${count}) ${productsCount}`}</p>
                    <p className="productDescription">{description}</p>
                    <div className="count-container">
                        <button className="button"><BsDashSquare className="quantity-icon"/></button>
                            <p className="itemCount">0</p>
                        <button className="button"><BsPlusSquare className="quantity-icon"/></button>
                    </div>
                    <button className="add-cart-button" type="button">
                    ADD TO CART
                    </button>
                </div>
            </div>
        )
    }

    render(){
        return(
            <div className="productDetails-container">
                <hr/>
                {this.renderProductDetails()}
            </div>
        )
    }
}


export default ProductDetails
