import React from 'react';


function onFormSubmit(event) {
    event.preventDefault();
    
    let emailHTML = document.querySelector('.email');
    // console.log(emailHTML.className);
    emailHTML.className += " is-sent";

    setTimeout(function(){ 
        emailHTML.classList.remove("is-sent"); 
     }, 3000);
}

const ServicesSingle = (props) => {


    
    return (
        <section className="newsLetterContainer">
            <div className="newsLetterDiv wrapper">
                <form className="email" onSubmit={event => onFormSubmit(event)}>
                    <input className="masthead" placeholder="Enter your email..."></input>
                    <div className="letterHead"> For news and updates </div>
                    <button type='submit' className="send"></button>
                </form>
            </div>
            
        </section>
    );

}


export default ServicesSingle;
