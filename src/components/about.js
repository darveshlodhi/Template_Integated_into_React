import React from 'react'

function About() {
    return (
        <div>
            {/* <h3> About</h3> */}
            <div class="layout_padding about_section ">
                <div class="container">
                    <h1 class="about_taital">About Us</h1>
                    <p class="market_text">making it look like readable English. Many desktop publishing</p>
                    <div class="about_bg">
                        <div class="row">
                            <div class="col-md-8">
                                <p class="about_long_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution o
                                    f letters, a
                                    s opposed to using 'Content h
                                    ere, content here', making it look like readable English. Many desktop publishing packages and web</p>
                                <button class="about_bt">ABOUT MORE</button>
                            </div>
                            <div class="col-md-4">
                                <div class="table_img"><img src="images/about-img.png" alt=" image3" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
