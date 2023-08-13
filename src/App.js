import React from "react";
import './App.css'
import chevicon from './Icon Chevron Down.png'
import searchicon from './Search Icon.png'
import group20 from './Group 20.png'
import group19 from './Group 19.png'
import vectorimg from './Vector.png'
import group17 from './Group 17.png'
import noads from './noads.png'

const App = () => {
  return (
    <div>
   
      <header className="header">
      <div className="leftsec">
      <a href="#" target="_blank" className="logo">EDYODA</a>
      <nav className="navbar">
      <ul className="navbar-list">
        
        <li><a href="#" className="navbar-link ">Courses <img className="navimg" src={chevicon} alt="" /></a> </li>
        <li><a href="#pro" className="navbar-link">Programs <img className="navimg" src={chevicon} alt="" /> </a></li>
      </ul>
      </nav>
      </div>
    <div className="rightsec">
    <nav className="navbar">
        <ul className="navbar-list">
          <li><a href="#" className="navbar-link"><img className="navimg" src={searchicon} alt="" /> </a></li>
          <li><a href="#" className="navbar-link"> Log in </a></li>
          <li><a href="#" className="btn navbar-btn ">JOIN NOW</a></li>
        </ul>
      </nav>
    </div>
      <div className="mobile-navbar-btn">
        <ion-icon name="menu" className="mobile-nav-icon"></ion-icon>
        <ion-icon name="close" className="mobile-nav-icon"></ion-icon>
      </div>
    </header>

    <main>
      
      <section className="section section-hero content">
        <div className="container grid grid-two-column">
          <div className="hero-data">
          <h1 className="primary-heading">Access Curated Courses worth <br/> ₹ <span id="decorate">18,500</span> at Just <span id="textblue">₹ 99</span> per year.</h1>
          <div className="separator"><img src={group20} alt="" className="leftimg" /><div className="sepname"> <div className="sep">100+</div>  job relevant courses</div> </div>
          <div className="separator"><img src={group19} alt="" className="leftimg" /><div className="sepname"><div className="sep">20000+</div>  Hours of content</div></div>
          <div className="separator"><img src={vectorimg} alt="" className="leftimg" /><div className="sepname"><div className="sep">Exclusive</div>  Webinar access</div></div>
          <div className="separator"><img src={group17} alt="" className="leftimg " /><div className="sepname"><div id="sep2">Schlorship  Worth</div> <div className="sep">₹94500</div></div></div>
          <div className="separator"><img src={noads} alt="" className="leftimgsep " /><div className="sepname"><div className="sep">Adfree</div>  learning experience</div></div>
        </div> 
            <div className="hero-image">
              <div className="righthead">
                <div>
              <div className="no1" >1</div>
              <div id="notext1">Sign up</div>
            </div>
            <div>
              <div className="no2">2</div>
              <div id="notext2">Subscribe</div>
            </div>
              
              </div>
              <section className="radio-section">
                <div className="radio-list">
                  <h1>Select your subcription plan</h1>
                  <div className="radio-item "><input name="radio" id="radio1" type="radio" /><label for="radio1" style={{background:"grey" }}>12 Month Subscription <div className="permon">  Total ₹99 <sub>₹8 /mo</sub></div>   </label></div>
                  <div className="radio-item"><input name="radio" id="radio2" type="radio" checked /><label for="radio2">12 Month Subscription <div className="permon">  Total ₹179 <sub>₹15 /mo</sub></div></label></div>
                  <div className="radio-item"><input name="radio" id="radio3" type="radio" /><label for="radio3">6 Months Subscription <div className="permon">  Total ₹149 <sub>₹25 /mo</sub></div></label></div>
                  <div className="radio-item"><input name="radio" id="radio4" type="radio" /><label for="radio4">3 Months Subscription <div className="permon">  Total ₹99 <sub>₹33 /mo</sub></div></label></div>
                </div>
              <div className="bottomsec">
                <div className="toplab">
                <div className="labels">Subscription Fee</div>
                <div className="price">₹18500</div>
                </div>
                
                <div className="offer" >
                  <label ><div id="limoff">Limited Time Offer</div><div id="redprice">-₹18401</div>
                   <div className="offerdesc"> <img src="Icon Clock (2).png" alt="" id="offerclock" />Offer valid till 25th March 2023 </div>
                  </label> 
                </div>
                <div className="labels">Total (Incl. of 18% GST)</div>
                <div className="mainprice">₹149</div>
                <div className="endbtn">
               <button className="cancelbtn" >Cancel</button>
               <button className="paybtn">Proceed to Pay</button>
              </div>
              </div>
            </section>       
                    
            </div>
          </div>
      </section>
      </main>
      </div>)
 };    

export default App;
 