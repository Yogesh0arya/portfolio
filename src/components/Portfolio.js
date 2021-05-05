import React, {Component} from 'react';
import Title from './Title';
import Slider from 'react-slick';
import Projects from './Projects';
import Sdata from './Sdata';

class Portfolio extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            arrows: false,
            autoplay: true,
            pauseOnHover: true,
            autoplaySpeed: 5000,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <section className="portfolio_slider_area" id="portfolio">
                <div className="container">
                    <Title tCenter="text-center" stitle="My Pojects" btitle="Some of my latest works."/>
                    <Slider {...settings} className="portfolio_slider">

                    {Sdata.map((val, index)=>{
                        return(<Projects title={val.title} imgsrc={val.imgsrc} key={index} id={index} link={val.link} des={val.des}/>)
                        
                    })}

                      
                    </Slider>
                </div>
            </section>
        )
    }
}

export default Portfolio;
