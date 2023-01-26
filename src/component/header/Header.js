import React from 'react';
import { NavLink } from 'react-router-dom';

function Header(props) {
    return (
        <>
            {/* ***** Header Area Start ***** */}
            <header className="header-area header-sticky">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav">
                                {/* ***** Logo Start ***** */}
                                <a href="index.html" className="logo">
                                    <img src="assets/images/logo.png" />
                                </a>
                                {/* ***** Logo End ***** */}
                                {/* ***** Menu Start ***** */}
                                <ul className="nav">
                                    <li className="scroll-to-section"><NavLink exact to="/" >Home</NavLink></li>
                                    <li className="scroll-to-section"><NavLink exact to="/man">Men's</NavLink></li>
                                    <li className="scroll-to-section"><NavLink exact to="/women">Women's</NavLink></li>``
                                    <li className="scroll-to-section"><NavLink exact to="/kid">Kid's</NavLink></li>
                                    <li className="submenu">
                                        <a href="javascript:;">Pages</a>
                                        <ul>
                                            <li><NavLink exact to="/aboutus">About Us</NavLink></li>
                                            <li><a href="products.html">Products</a></li>
                                            <li><a href="single-product.html">Single Product</a></li>
                                            <li><NavLink exact to="/Contectus">Contact Us</NavLink></li>
                                        </ul>
                                    </li>
                                    <li className="submenu">
                                        <a href="javascript:;">Features</a>
                                        <ul>
                                            <li><a href="#">Features Page 1</a></li>
                                            <li><a href="#">Features Page 2</a></li>
                                            <li><a href="#">Features Page 3</a></li>
                                            <li><a rel="nofollow" href="https://templatemo.com/page/4" target="_blank">Template Page 4</a></li>
                                        </ul>
                                    </li>
                                    {/* <li className="scroll-to-section"><a href="#explore">Explore</a></li> */}
                                    <li className="submenu">
                                        <a href="javascript:;">Sign up</a>
                                        <ul>
                                            <li className="scroll-to-section"><NavLink exact to="/User">sign up form1</NavLink></li>
                                            <li className="scroll-to-section"><NavLink exact to="/userconditional">sign up form2</NavLink></li>
                                            <li><a href="single-product.html">Single Product</a></li>
                                            <li><NavLink exact to="/Contectus">Contact Us</NavLink></li>
                                        </ul>
                                    </li>
                                    {/* <li className="scroll-to-section"><NavLink exact to="/User">Signup</NavLink></li> */}
                                    <li className="scroll-to-section"><NavLink exact to="/reactForm">React Form</NavLink></li>
                                    {/* <li className="scroll-to-section"><NavLink exact to="/reactForm22">React Form 22</NavLink></li> */}

                                    {/* Prectice */}
                                    <li className="submenu">
                                    <a href="javascript:;">Prectice</a>
                                    <ul>
                                        <li><NavLink exact to="/first1">Conditional rendering 1</NavLink></li>
                                        <li><NavLink exact to="/secound1">Formic And Yup</NavLink></li>
                                        <li><NavLink exact to="/sliderArrow1">Slider Arrow</NavLink></li>
                                        <li><a href="#">Features Page 2</a></li>
                                        <li><a href="#">Features Page 3</a></li>
                                        <li><a rel="nofollow" href="https://templatemo.com/page/4" target="_blank">Template Page 4</a></li>
                                    </ul>
                                </li>
                                </ul>
                                <a className="menu-trigger">
                                    <span>Menu</span>
                                </a>

                               
                                {/* ***** Menu End ***** */}
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            {/* ***** Header Area End ***** */}

        </>
    );
}

export default Header;