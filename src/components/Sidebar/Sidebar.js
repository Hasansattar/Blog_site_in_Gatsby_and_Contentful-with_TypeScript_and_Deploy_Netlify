import React from 'react'
import './sidebar.css'
import 'aos/dist/aos.css'
import img from './../../assets/blog1.png'

export default function Sidebar() {
    return ( <>  
   
            <div className="site-content">
                <div className="posts">
                    <div className="post-content" data-aos="zoom-in" data-aos-delay="200">
                        <div className="post-image">
                            <div>
                                <img src={img} className="img" alt="blog1"/>
                            </div>
                            <div className="post-info flex-row">
                                <span><i className="fas fa-user text-gray"></i>&nbsp;&nbsp;Admin</span>
                                <span><i className="fas fa-calendar-alt text-gray"></i>&nbsp;&nbsp;January 14, 2019</span>
                                <span>2 Commets</span>
                            </div>
                        </div>
                        <div className="post-title">
                            <a href="#">Why should boys have all the fun? it's the women who are making india an
                                alcohol-loving contry</a>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptas deserunt beatae
                                adipisci iusto totam placeat corrupti ipsum, tempora magnam incidunt aperiam tenetur a
                                nobis, voluptate, numquam architecto fugit. Eligendi quidem ipsam ducimus minus magni
                                illum similique veniam tempore unde?
                            </p>
                            <button className="btn post-btn">Read More &nbsp; <i className="fas fa-arrow-right"></i></button>
                        </div>
                    </div>
        </div>
        </div>
        

     {/*  sidebar */}
        
        <div className="sidebar" >
        <div className="category" id="category-section">
            <h2>Category</h2>
                        <ul className="category-list">
                            <li className="list-items" data-aos="fade-left" data-aos-delay="100">
                                <a href="http://www.google.com/">Software</a>
                                <span>(05)</span>
                            </li>
                            <li className="list-items" data-aos="fade-left" data-aos-delay="200">
                                <a href="http://www.google.com/">Techonlogy</a>
                                <span>(02)</span>
                            </li>
                            <li className="list-items" data-aos="fade-left" data-aos-delay="300">
                                <a href="http://www.google.com/">Lifestyle</a>
                                <span>(07)</span>
                            </li>
                            <li className="list-items" data-aos="fade-left" data-aos-delay="400">
                                <a href="http://www.google.com/">Shopping</a>
                                <span>(01)</span>
                            </li>
                            <li className="list-items" data-aos="fade-left" data-aos-delay="500">
                                <a href="http://www.google.com/">Food</a>
                                <span>(08)</span>
                            </li>
                        </ul>
        </div>
        </div>

        
     
        </> )
}
