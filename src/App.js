import {Route,Switch} from "react-router-dom"

import {Component} from "react";
import Header from "./components/Header"
import Shop from "./components/Shop"
import Home from "./components/Home"
import ProductDetails from './components/ProductDetails'
import Favourite from './components/Favourite'
import ThemeContext from "./context/ThemeContext"
import './App.css';

class App extends Component{
  state = {isDarkTheme: false,favouriteItem:[]}

  toggleTheme = () =>{
    this.setState(prevState =>({isDarkTheme:!prevState.isDarkTheme}))
  }


  addFavourite = item => {
    const {favouriteItem} = this.state
    this.setState({
      favouriteItem: [...favouriteItem, item],
    })
  }

  removeFavourite = id => {
    const {favouriteItem} = this.state
    this.setState({
      favouriteItem: favouriteItem.filter(each => each.id !== id),
    })
  }

  render(){
    const {isDarkTheme,favouriteItem} = this.state
    return(
      <ThemeContext.Provider
      value={{isDarkTheme,favouriteItem,toggleTheme:this.toggleTheme,addFavourite:this.addFavourite,removeFavourite: this.removeFavourite}}>
        <>
        <Header/>
          <Switch>
            <Route exact path="/" Component={Home}/>
            <Route exact path="/products" Component={Shop}/>
            <Route exact path="/products/:id" Component={ProductDetails}/>
            <Route exact path="/favourite" Component={Favourite}/> 
          </Switch>
        </>
      </ThemeContext.Provider>
    )
  }
}


export default App
