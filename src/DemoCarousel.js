import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import LotteryCart from './LotteryCart';

class DemoCarousel extends Component {
    //https://www.npmjs.com/package/react-responsive-carousel
    render() {
        var imgHeight={height:"200px"};
        return (
            <Carousel showThumbs={false}>
                <div>
                <img  alt=" " width="1170" height="400" src="/images/magicians_lottery.jpg"/>
                </div>
                <div>
                <img  alt=" " width="1170" height="400" src="/images/lottery_image2.jpg"/>
                </div>
                <div>
                <img  alt=" " width="1170" height="400" src="/images/lotto.jpg"/>
                </div>
            </Carousel>
        );
    }
};

//ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
export default DemoCarousel;