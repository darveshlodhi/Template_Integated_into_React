import React from 'react'
import {BrowserRouter as  Link} from 'react-router-dom'

function Header() {
    return (

        <div >
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-12 col-lg-3">
                        <div class="logo"> <a href="/"> <img src="images/logo.png" alt=" image2" /></a></div>
                    </div>
                    <div class="col-sm-4 col-lg-5">
                        <div class="menu-area">
                            <nav class="navbar navbar-expand-lg ">
                               
                                <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <i class="fa fa-bars"></i>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class="navbar-nav mr-auto">
                                        <li class="nav-item active">
                                            {/* <a class="nav-link active" href="index.html">Home<span class="sr-only">(current)</span></a> </li> */}

                                            <a href="/">
                                            <Link to="/">Home</Link>
                                            </a>
                                        
                                         </li>
                                        <li class="nav-item nav-link">
                                            <a href=" About">
                                            <Link to="/About">About</Link>
                                            </a>
                                        
                                         </li>
                                        {/* <li class="nav-item">
                                            <a class="nav-link" href="company.html">Company</a></li> */}
                                            
                                        <li class="nav-item nav-link" >
                                        <a href=" Furnitures">
                                            <Link to="/Furnitures">Furnitures</Link>
                                            </a>
                                            </li>
                                        <li class="nav-item nav-link">
                                        <a href=" Contact">
                                            <Link to="/Contact">Contact us</Link>
                                            </a>
                                            </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                    <div class="col-sm-8 col-lg-4">
                        <div class="togle_3">
                            <div class="left_main">
                                <div class="menu_main">
                                   
                                </div>
                            </div>
                            <div class="middle_main">
                                <div class="shoping_bag"><img src="images/search-icon.png" alt=" image2" /></div>
                            </div>
                            <div class="right_main"><p>1</p>
                                <div class="togle_main"><img src="images/shopping-bag.png"  alt=" image2" />1</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            </div>

            )
}

            export default Header
