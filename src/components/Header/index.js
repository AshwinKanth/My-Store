import {Link} from "react-router-dom"
import {Navbar,Container,Nav} from "react-bootstrap"
import ThemeContext  from "../../context/ThemeContext";


import { IoSearch } from "react-icons/io5";
import { GrFavorite } from "react-icons/gr";
import { TbShoppingBag } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import {BsMoon, BsBrightnessHigh} from 'react-icons/bs'

import "./index.css"


const Header = () =>(
    <ThemeContext.Consumer>
        {value =>{
            const {isDarkTheme , toggleTheme} = value

            const onChangeTheme = () =>{
                toggleTheme()
            }

            const headerBgColor = isDarkTheme ? "bgDark" : "bgLight"
            const navLines = isDarkTheme ? "navLinesLight" : "navLinesDark"
            const text = isDarkTheme ? "textDark" : "textLight"
            const iconsColor = isDarkTheme ? "textDark" : "textLight"

            return(
                <div className={`header-container ${headerBgColor}`}>
                    <div className="topHeader-conatiner">
                        <div className="nav-logo-container">
                        <nav className="small-nav-container">
                            <Navbar expand="lg" className="nav-bg-body">
                                <Container>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" className={`lines ${navLines}`} />
                                    <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="me-auto">
                                        <Link to="/" className='navLink'>
                                            <Nav className={`navItem ${text}`}>Home</Nav>
                                        </Link>
                                        <Link to="/products" className='navLink'>
                                            <Nav className={`navItem ${text}`}>SHOP</Nav>
                                        </Link>
                                        <Nav className={`navItem ${text}`} href="#stories">CART</Nav>
                                        <Nav className={`navItem ${text}`} href="#about">ABOUT</Nav>
                                        <Nav className={`navItem ${text}`} href="#contactus">CONTACT US</Nav>
                                    </Nav>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                        </nav>
                        <img src="https://res.cloudinary.com/dq1ktqbtb/image/upload/v1713597113/Logo_vfw1bu.png" className="logo" alt="logo"/>
                        </div>
                        <h1 className={`headerHeading ${text}`}>LOGO</h1>
                        <div>
                            <IoSearch className={`icons ${iconsColor}`}/>
                            <Link to="/favourite" className='navLink'>
                            <GrFavorite className={`icons ${iconsColor}`}/>
                            </Link>
                            <TbShoppingBag className={`icons ${iconsColor}`}/>
                            <CgProfile  className={`icons mobileIcon ${iconsColor}`}/>
                            <button className="button icons" onClick={onChangeTheme}>
                            {isDarkTheme ? (
                            <BsBrightnessHigh color="#ffffff" />
                            ) : (
                            <BsMoon />
                            )}
                            </button>
                            <select className="select mobileIcon">
                                <option className="option" value="Eng">Eng</option>
                                <option className="option" value="Tel">Tel</option>
                                <option className="option" value="Hin">Hin</option>
                            </select>
                        </div>
                    </div>
                    <nav className="nav-container">
                    <Navbar expand="lg">
                        <Container>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                {/* <Nav.Link className={`navItem ${text}`} href="#shop">SHOP</Nav.Link> */}
                                <Link to="/" className='navLink'>
                                    <Nav className={`navItem ${text}`}>Home</Nav>
                                </Link>
                                <Link to="/products" className='navLink'>
                                    <Nav className={`navItem ${text}`}>SHOP</Nav>
                                </Link>
                                <Nav.Link className={`navItem ${text}`} href="#stories">CART</Nav.Link>
                                <Nav.Link className={`navItem ${text}`} href="#about">ABOUT</Nav.Link>
                                <Nav.Link className={`navItem ${text}`} href="#contactus">CONTACT US</Nav.Link>
                            </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    </nav>
                </div>
            )
        }}
        
    </ThemeContext.Consumer>
    
)

export default Header