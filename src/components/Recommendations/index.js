import ThemeContext from "../../context/ThemeContext"
import "./index.css"

const Recommendations = ()=>(
<ThemeContext.Consumer>
        {value =>{
            const {isDarkTheme} = value
            const text = isDarkTheme ? "textDark" : "textLight"

            return(
                <div className="filters-container">
                    <h1 className={`filters-heading ${text}`}>Recommended</h1>
                </div>
            )
        }}
    </ThemeContext.Consumer>
)

export default Recommendations