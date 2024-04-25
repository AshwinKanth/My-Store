import {Route,Routes,BrowserRouter} from "react-router-dom"


import { Component  } from "react";
import Header from "./components/Header"
import Shop from "./components/Shop"
import Home from "./components/Home"
import ProductDetails from './components/ProductDetails'
import ThemeContext from "./context/ThemeContext"
import './App.css';




class App extends Component{
  state = {isDarkTheme: false}

  toggleTheme = () =>{
    this.setState(prevState =>({isDarkTheme:!prevState.isDarkTheme}))
  }

  render(){
    const {isDarkTheme} = this.state
    return(
      <ThemeContext.Provider
      value={{isDarkTheme,toggleTheme:this.toggleTheme}}>
        <BrowserRouter>
        <Header/>
          <Routes>
            <Route exact path="/" Component={Home}/>
            <Route exact path="/products" Component={Shop}/>
            <Route exact path="/products/:id" Component={ProductDetails}/>
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    )
  }
}


export default App;
