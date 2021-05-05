import React, {Component} from 'react';
import Clientsliders from 'react-slick';
import Title from './Title';

class Clients extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            arrows: false,
            slidesToShow: 6,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
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
            <section className="clients_logo_area_two bg_color" id="clients">
                <div className="container">
                    <Title tCenter="text-center" stitle="Quick links... "
                           btitle="Follow me on social media plateforms."/>
                    <Clientsliders {...settings} className="clients_slider">
                        <div className="item">
                            <a href="https://www.linkedin.com/in/yogesh08arya/" target="_blank"><img src={require('../image/new/linkedin.png')} alt=""/></a>
                        </div>
                        <div className="item">
                            <a href="https://github.com/Yogesh0arya" target="_blank"><img src={require('../image/new/github.jpg')} alt=""/></a>
                        </div>
                        <div className="item">
                            <a  href="https://www.facebook.com/yogesh8Arya" target="_blank"><img src={require('../image/new/facebook.png')} alt=""/></a>
                        </div>
                        <div className="item">
                            <a  href="https://twitter.com/YogeshA81511036" target="_blank"><img src={require('../image/new/twitter.png')} alt=""/></a>
                        </div>
                        <div className="item">
                            <a  href="https://www.instagram.com/yogesh_aka_yo/" target="_blank"><img src={require('../image/new/instagram.png')} alt=""/></a>
                        </div>
                       
                    </Clientsliders>
                </div>
            </section>
        );
    }

}

export default Clients;
