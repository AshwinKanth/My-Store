import { Component } from "react";
import "./index.css"
import ProductCard from '../ProductCard'
import ThemeContext from "../../context/ThemeContext";


class Shop extends Component{
    state = {productsList : []}

    componentDidMount(){
        this.getProducts()
    }

    getProducts = async() => {
        const apiUrl = "https://fakestoreapi.com/products"
        const options = {
            method: "GET",
        }

        const response = await fetch(apiUrl,options)

        if (response.ok === true){
            const fetchedData = await response.json()
            // console.log(fetchedData)
            const updatedData = fetchedData.map(each =>({
                title: each.title,
                category: each.category,
                count: each.rating.count,
                rating: each.rating.rate,
                price: each.price,
                image : each.image,
                id : each.id,
            }))
            // console.log(updatedData)
            this.setState({productsList: updatedData})
        }
    }

    renderProducts = () =>{
        const {productsList} = this.state

        return(
            <ul className="productsList-container">
                {productsList.map(eachProduct =>(
                    <ProductCard productCardDetails={eachProduct} key={eachProduct.id}/>
                ))}
            </ul>
        )
    }

    render(){
        return(
            <ThemeContext>
                {value =>{
                    const {isDarkTheme} = value

                    const shopBgColor = isDarkTheme ? "bgDark" : "bgLight"
                    const text = isDarkTheme ? "textDark" : "textLight"

                    return(
                        <div className={`shoppingBg-container ${shopBgColor}`}>
                            <hr className={`${text}`}/>
                            {this.renderProducts()}
                        </div>
                    )
                }}
            </ThemeContext>
        )
    }
}


export default Shop