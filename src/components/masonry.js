import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-responsive-modal';
import MasonrySingle from './masonry_single';

  class ServicesSingle extends Component {
      constructor(props) {
          super(props);
          this.state = { open: false, };
      }


      render() {
        
            let title = this.props.elements.title;
            let src = this.props.elements.src;
            let elements = this.props.elements;
          return (
            <section className="masonryProjectsContainer">
                <div className="masonryProjects wrapper">
                    { callAllProjectSingles(elements) }
                </div>
                
            </section>
          )
      }

  }


const callAllProjectSingles = (elements) => {
    
    const masonryContainerInner = elements.map((singleObject, index) => {
        // console.log(singleObject);
        return (
            <MasonrySingle
              singleConstant={singleObject}
              key={singleObject.id}
             />
        );
    });
    return masonryContainerInner;
}



export default ServicesSingle;
