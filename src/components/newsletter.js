import React, { Component } from 'react';
import Parallax from 'parallax-js' // Now published on NPM

function onFormSubmit(event) {
    event.preventDefault();
    
    let emailHTML = document.querySelector('.email');
    // console.log(emailHTML.className);
    emailHTML.className += " is-sent";

    setTimeout(function(){ 
        emailHTML.classList.remove("is-sent"); 
     }, 3000);
}

class ServicesSingle extends Component {
    constructor(props) {
        super(props);
    }
      
    componentDidMount() {
    // this.initiateCanvas();
    let scene = document.querySelector('.newsLetterDiv');
    let parallax = new Parallax(scene);
    // console.log(this.props.location.pathname);
    }
    
    render() {
        return (
            <section className="newsLetterContainer">
                <div className="newsLetterDiv" >
                    <div className="newsLetterImageBlurLeftOne" data-depth="0.1"></div>
                    <div className="newsLetterImageBlurRightOne" data-depth="0.1"></div>
                    <div className="newsLetterImageBlurLeft" data-depth="0.4"></div>
                    <div className="newsLetterImageBlurRight" data-depth="0.4"></div>
                    <div className="newsLetterImage" data-depth="0.85"></div>
                    {/* <form className="email" onSubmit={event => onFormSubmit(event)}>
                        <input className="masthead" placeholder="Enter your email..."></input>
                        <div className="letterHead"> For news and updates </div>
                        <button type='submit' className="send"></button>
                    </form> */}
                </div>
                <div className="emailText">
                        <a className="emailTextAnchor" href="mailto:someone@example.com?Subject=Hello%20again" target="_top">richardandrews5057@gmail.com</a>
                    </div>
            </section>
        );
    }
    

}


export default ServicesSingle;
