import React from 'react'
import About from './about'
import Furnitures from './furnitures'
import Contact from './contact'

function Home() {
    return (
		<>
		
        <div>
            {/* <h3> Home</h3> */}

            <div class="banner_section layout_padding">
			<div class="container-fluid">
		<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="row">
				    <div class="col-sm-1">
				    	<p class="number_tetx">02/3</p>
				    	<div class="line"><img src="images/linr-icon.png" alt=" image1" /></div>
				    	<p class="number_tetx">02/3</p>
				    	<div class="left_img"><img src="images/img-2.png"alt=" image1" /></div>
				    </div>
				    <div class="col-sm-5">
				    	<h1 class="furniture_text">2019</h1>
				    	<h1 class="trends_text">TRENDS</h1>
				    	<h1 class="furniture_text">FURNITURE</h1>
				    	<p class="lorem_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, </p>
				    	<button class="more_bt">MORE INFO</button>
				    	<button class="furniture_bt">FURNITURE</button>
				    </div>
				    <div class="col-sm-6">
				    	<div><img src="images/img-1.png"alt=" image1" /></div>
				    </div>
			    </div>
    </div>
    <div class="carousel-item">
      <div class="row">
				    <div class="col-sm-1">
				    	<p class="number_tetx">02/3</p>
				    	<div class="line"><img src="images/linr-icon.png" alt=" image1" /></div>
				    	<p class="number_tetx">02/3</p>
				    	<div class="left_img"><img src="images/img-2.png" alt=" image1" /></div>
				    </div>
				    <div class="col-sm-5">
				    	<h1 class="furniture_text">2019</h1>
				    	<h1 class="trends_text">TRENDS</h1>
				    	<h1 class="furniture_text">FURNITURE</h1>
				    	<p class="lorem_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, </p>
				    	<button class="more_bt">MORE INFO</button>
				    	<button class="furniture_bt">FURNITURE</button>
				    </div>
				    <div class="col-sm-6">
				    	<div><img src="images/img-1.png" alt=" image1" /></div>
				    </div>
			    </div>
    </div>
    <div class="carousel-item">
      <div class="row">
				    <div class="col-sm-1">
				    	<p class="number_tetx">02/3</p>
				    	<div class="line"><img src="images/linr-icon.png"alt=" image1" /></div>
				    	<p class="number_tetx">02/3</p>
				    	<div class="left_img"><img src="images/img-2.png" alt=" image1" /></div>
				    </div>
				    <div class="col-sm-5">
				    	<h1 class="furniture_text">2019</h1>
				    	<h1 class="trends_text">TRENDS</h1>
				    	<h1 class="furniture_text">FURNITURE</h1>
				    	<p class="lorem_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, </p>
				    	<button class="more_bt">MORE INFO</button>
				    	<button class="furniture_bt">FURNITURE</button>
				    </div>
				    <div class="col-sm-6">
				    	<div><img src="images/img-1.png" alt=" image1" /></div>
				    </div>
			    </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
				
			</div>
		</div>
	</div>
	<About/>
	<Furnitures/>
	<Contact/>
	

       </>     
       
    )
}

export default Home
