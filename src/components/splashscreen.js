import React, { Component } from 'react';
import Parallax from 'parallax-js' // Now published on NPM

class SplashScreen extends Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    // this.initiateCanvas();
    let scene = document.querySelector('.landing_background .content');
    let parallax = new Parallax(scene);
    this.initiateScroll();
    // console.log(this.props.location.pathname);
  }

  initiateScroll() {

    let landing_background_height = document.querySelector('.landing_background').offsetHeight;
    let landing_background_text = document.querySelector('.landing_background .content');
    window.onscroll = function() {myFunction()};
    
    function myFunction() {
      
        // if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        //     document.getElementById("myP").className = "test";
        // } else {
        //     document.getElementById("myP").className = "";
        // }
        if (document.body.scrollTop < landing_background_height) {
          // console.log(document.body.scrollTop, 'scrollTop');
          // console.log(landing_background_height, 'backgroundHeight');
          // console.log(document.body.scrollTop/landing_background_height);
          landing_background_text.style.transform = `scale(${1 - document.body.scrollTop/ (3*landing_background_height) })`;
        }
    }

  }


  scrollToServices(){
    // console.log('scrollToServices');
    document.querySelector('.serverContainer').scrollIntoView({ 
      behavior: 'smooth' 
    });
  }

  scrollToPortfolio(){
    // console.log('scrollToPortfolio');
    document.querySelector('.masonryProjects').scrollIntoView({ 
      behavior: 'smooth' 
    });
  }

  scrollToChat(){
    // console.log('scrollToChat');
    document.querySelector('.chatScreenLogin').scrollIntoView({ 
      behavior: 'smooth' 
    });
  }

  render() {
    return (
      <section className="landing_background banner">
          <div className="wrapper">
              <header> 
                <p className="logo navInner">+dev<span className="dValue">D</span>esk <br/><span className="name">by Richard Andrews</span></p>
                <ul className="navInner">
                    <li onClick={ this.scrollToServices }>Services</li>
                    <li onClick={ this.scrollToPortfolio }>Portfolio</li>
                    <li onClick={ this.scrollToChat } className="specialButton">Get in touch</li>
                </ul>
              </header>

              <div className="content">
                <h1 className="title" data-depth="0.15">Passion For Design and Creativity.</h1>
                <h2 className="sub_title" data-depth="0.25">Delivering premium designs and services<br/>for the best price.</h2>
              </div>
            
            <img className="checkOutFurther" src="images/arrow.png" alt="Scroll" />
          </div>
      </section>
    )
  }
}

export default SplashScreen;