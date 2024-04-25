import "./index.css"
import ThemeContext from "../../context/ThemeContext"
import ProductCard from "../ProductCard"
// import ProductDetails from "../ProductDetails"


const renderFavourites = (favouriteItem) =>{
    if (favouriteItem.length === 0) {
        return (
          <ThemeContext.Consumer>
            {value => {
              const {isDarkTheme} = value
              const fontColor = isDarkTheme ? 'fontBlack' : 'fontWhite'
              const textColor = isDarkTheme ? 'colorWhite' : 'colorBlack'
    
              return (
                <div className="saved-container">
                  <img
                    alt="no favourites"
                    className="noSaved_image"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  />
                  <h1 className={`saveHeading ${textColor}`}>
                    No favourites found
                  </h1>
                  <p className={`saveDescription ${fontColor}`}>
                    Save your favourites by clicking a love symbol
                  </p>
                </div>
              )
            }}
          </ThemeContext.Consumer>
        )
      }
      return(
        <ThemeContext.Consumer>
            {value =>{
                const {isDarkTheme} = value

                const textColor = isDarkTheme ? 'colorWhite' : 'colorBlack'
                return(
                    <div className="fav-container">
                        <h1 className={`favHeading ${textColor}`}>Favourites</h1>
                        {favouriteItem.map(each =>(
                            <ProductCard productCardDetails={each} key={each.id}/>
                        ))}
                    </div>
                )
            }}
        </ThemeContext.Consumer>
      )

}

const Favourite = () =>(
        <ThemeContext.Consumer>
            {value =>{
                const{isDarkTheme,favouriteItem} = value
                return(
                    <div>
                        {renderFavourites(favouriteItem)}
                    </div>
                )
            }}
        </ThemeContext.Consumer>
    )



export default Favourite