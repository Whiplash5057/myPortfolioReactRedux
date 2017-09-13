import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectTestimonial } from '../actions/index.js';
import { bindActionCreators } from 'redux';

class Testimonial extends Component {

constructor(props) {
    super(props);

    this.testChange = this.testChange.bind(this);

    this.state = {testimonialSelectNo: 0};
    }


renderList() {
    // return this.props.testimonials.map((singleObject) => {
        // console.log(singleObject);
    let returnJsx = [];
    let allMsgs = this.props.testimonials;
    let currentTestimonialNo = this.state.testimonialSelectNo;
    // console.log(currentTestimonialNo);
    
    for (var index = -1; index < 2; index++) {
        let selectedValue = currentTestimonialNo + index;
        if (currentTestimonialNo + index < 0) {
            selectedValue = 6;
        }
        else if (currentTestimonialNo + index > 6) {
            selectedValue = 0;
        }

        if (index == -1 && document.querySelector('.prevnameTrigger'))
            document.querySelector('.prevnameTrigger').innerHTML = allMsgs[selectedValue].name;

        if (index == 1 && document.querySelector('.nextnameTrigger'))
            document.querySelector('.nextnameTrigger').innerHTML = allMsgs[selectedValue].name;

        returnJsx.push(
            <li
                key={index}
                className='testListLI'>
                <div className="testimentMain">
                    <div className="imgNameDesig">
                        <div className="imgLi"><img className="imgLiInner" src={allMsgs[selectedValue].imgSrc} /></div>
                        
                        <div className="nameDesig">
                            <span className="nameLi">{allMsgs[selectedValue].name}</span>
                            <span className="desigLi">{allMsgs[selectedValue].designation}</span>
                        </div>
                    </div>
                    <div className="msgLi">{allMsgs[selectedValue].message}</div>
                </div>
            </li>
            );
        
    }
    
    return returnJsx;
    // });
}

testChange(event) {



    let isNextOrPrev = event.target.classList.contains("nextTestArrow")
    // console.log(isNextOrPrev);

    
    if(isNextOrPrev){
        if (this.state.testimonialSelectNo + 1 > 6)
            setTimeout(()=>{ this.setState({testimonialSelectNo: 0}); }, 800);
        else
            setTimeout(()=>{ this.setState({testimonialSelectNo: this.state.testimonialSelectNo + 1}) }, 800);

    } else {
        if (this.state.testimonialSelectNo - 1 < 0)
            setTimeout(()=>{ this.setState({testimonialSelectNo: 6}); }, 800);
        else
            setTimeout(()=>{ this.setState({testimonialSelectNo: this.state.testimonialSelectNo - 1}); }, 800);

    }

    let testimentHTML = document.getElementsByClassName('testimentMain');
    let nameNxt = document.querySelector('.nextnameTrigger');
    let namePrev = document.querySelector('.prevnameTrigger');

    nameNxt.className += " activeChange";
    namePrev.className += " activeChange";
    for (var i = 0; i < testimentHTML.length; ++i) {
        var item = testimentHTML[i];  
        item.className += " blurring";
    }

    setTimeout(function(){ 
        nameNxt.classList.remove("activeChange");
        namePrev.classList.remove("activeChange");
        for (var i = 0; i < testimentHTML.length; ++i) {
            var item = testimentHTML[i];  
            item.classList.remove("blurring"); 
        }
    }, 2000);
}

render() {
    return (
        <section className="testimonialwrapper">
            <div className="innerTestContainer wrapper">
                <div className="prevTest">
                    <span className="prevTestArrow arrow" onClick={this.testChange}></span>
                    <span className="prevnameTrigger nameTrigger"> Richard Andrews </span>
                </div>
                <ul className='testListUL'>
                { this.renderList() }
                </ul>
                <div className="nextTest">
                    <span className="nextTestArrow arrow" onClick={this.testChange}></span>
                    <span className="nextnameTrigger nameTrigger"> Rachel Andrews </span>
                </div>
            </div>            
        </section>
      
    );
  }
}

function mapStateToProps(state) {
  //Whatever is returned will show up as props
  return {
    testimonials: state.testimonials,
  };
}

//Anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
  //Whenever selectBook is called, the result book would be called to all our reducers
  return bindActionCreators({ selectTestimonial: selectTestimonial }, dispatch);
}

//Promotes BookList from Component to Container -
// it needs to know about this new dispatch method selectBook.
//Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(Testimonial); //producers a container
