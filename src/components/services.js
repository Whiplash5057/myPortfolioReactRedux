import React, { Component } from 'react';
import { servicesObject } from '../constants/services_constant';
import ServiceSingle from './services_single';


class Services extends Component {
    render() {
      return (
          <section className="backgroundBlueAnimate">
                <div className="wrapper serverContainer">
                    { callAllServiceSingles() }
                </div>
          </section>
      );
    }
}

const callAllServiceSingles = () => {
    
    
    const serverContainerInner = servicesObject().map((singleObject) => {
        // console.log(singleObject);
        return (
            <ServiceSingle
              singleConstant={singleObject}
              key={singleObject.id}
             />
        );
    });
    return serverContainerInner;
}

export default Services;