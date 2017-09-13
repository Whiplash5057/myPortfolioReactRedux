import React, { Component } from 'react';
import Splashscreen from './splashscreen';
import Services from './services';
import Masonry from './masonry';
import Testimonial from './testimonial';
import LiveChat from './livechat';
import NewsLetter from './newsletter';
import { masonryObject } from '../constants/services_constant';

//temp
import ServicesConstant from '../constants/services_constant';



export default class App extends Component {
  
  render() {
    return (
      <div>
        <Splashscreen />
        <Services />
        <Masonry elements= {masonryObject()} />
        <Testimonial />
        <LiveChat />
        <NewsLetter />
      </div>
    );
  }
}
