import React from "react"

const ThemeContext = React.createContext({
    isDarkTheme : false,
    toggleTheme : () =>{},
    favouriteItem : [],
    addFavourite: () =>{},
    removeFavourite: () =>{}

})

export default ThemeContext