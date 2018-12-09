/** @format */

import React, {Component} from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Carousel} from 'react-responsive-carousel';
import {newyork1, newyork2, newyork3, newyork4, newyork5} from '../../images';

class EventCarousel extends Component {
  render() {
    return (
      <Carousel showArrows={true} infiniteLoop={true} showStatus={true}>
        <div>
          <img src={newyork1} />
        </div>
        <div>
          <img src={newyork2} />
        </div>
        <div>
          <img src={newyork3} />
        </div>
        <div>
          <img src={newyork4} />
        </div>
        <div>
          <img src={newyork5} />
        </div>
      </Carousel>
    );
  }
}

export default EventCarousel;
