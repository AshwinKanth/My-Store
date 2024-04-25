import Recommendations from "../Recommendations"
import Filters  from "../Filters"
import Shop from "../Shop"
import ThemeContext from "../../context/ThemeContext"

import "./index.css"

const Home = () =>(
    <ThemeContext.Consumer>
        {value =>{
            const {isDarkTheme} = value

            const homeBgColor = isDarkTheme ? "bgDark" : "bgLight"
            const text = isDarkTheme ? "textDark" : "textLight"

            return(
                <div className={`homeBg-container ${homeBgColor}`}>
                    <hr className={`${text}`}/>
                <div className="heading-des-container">
                    <h1 className={`homeHeading ${text}`}>DISCOVER OUR PRODUCTS</h1>
                    <p className={`description ${text}`}>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
                </div>
                <hr className={`${text}`}/>
                <div className="filters-recommendations-totalItems-container">
                    <div className="filters-recommendations-container">
                        <p className={`totalItems ${text}`}>3423 ITEMS</p>
                        <Filters/>
                        <Recommendations/>
                    </div>
                </div>
                <Shop/>
                </div>
            )
        }}
    </ThemeContext.Consumer>

)

export default Home