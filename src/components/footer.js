import React from 'react'
import {BrowserRouter as  Link} from 'react-router-dom'

function Footer() {
    return (
        <div>
            {/* <h3> Footer </h3> */}
            <div class="footer_section layout_padding">
		<div class="container">
			<div class="row">
				
			   
			    <div class="col-md-12">
			    	<div class="useful_main border_right0">
			    		<h2 class="useful_text">Menus</h2>
			    		<ul >
			    			<li><a href="/">
                                            <Link to="/">Home</Link>
                                            </a>
							</li>
			    			<li><a href=" About">
                                            <Link to="/About">About</Link>
                                            </a>
							</li>
			    			{/* <li><a href="company.html">Company</a></li> */}
			    			<li><a href=" Furnitures">
                                            <Link to="/Furnitures">Furnitures</Link>
                                            </a>
							</li>
			    			<li><a href=" Contact">
                                            <Link to="/Contact">Contact us</Link>
                                            </a>
							</li>
			    		</ul>
			    		
			    		
			    		
			    		
			    		
			    	</div>
			    </div>
			    <div class="col-lg-6 col-md-6 col-sm-6 ">
				   <h2 class="useful_text">Address</h2>
                     <ul class="location">
			    			<li><img src="images/map-icon.png"alt="image6"/>Locations</li>
			    			
			    			<li><img src="images/call-icon.png" alt="image6"/><a href="company.html">+71 89078493</a></li>
			    			<li><img src="images/email-icon.png" alt="image6"/><a href="furnitures.html">demo@gmail.com</a></li>
			    			
			    		</ul>
                       

			    </div>
			     <div class="col-lg-6 col-md-6 col-sm-6 ">
			    	<h2 class="useful_text">Newsletter</h2>
			    	<div class="form-group">
                        <input type="text" class="address_send" placeholder="Address" name="Email"/>
                    <button class="subscribe_bt">Subscribe</button>
                     </div>
			    </div>
			</div>
		</div>
	</div>
        </div>
    )
}

export default Footer
