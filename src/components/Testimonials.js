import React, {Component} from 'react';
import Title from './Title';
import Fade from 'react-reveal/Fade';
import Slider from 'react-slick';

class Testimonials extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }

    next() {
        this.slider.slickNext();
    }

    previous() {
        this.slider.slickPrev();
    }

    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 5000,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return (
            <div className="testimonial_area_two" id="testimonial">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <Title stitle="My Education" btitle="What is my education background.."/>
                            <Fade bottom cascade>
                                <div className="wow fadeInUp" data-wow-delay="0.3s">
                                    <p>"Passionate about learning new things! Loves Programming, playing with codes, and combinig creativity along with Web development knowledge to solve real life problems.Hard work and lokes to Hustle!"</p>
                                </div>
                                <div className="slider_nav">
                                    <i className="arrow_carrot-left_alt2 prev" onClick={this.previous}></i>
                                    <i className="arrow_carrot-right_alt2 next" onClick={this.next}></i>
                                </div>
                            </Fade>
                        </div>
                        <div className="col-lg-6">
                            <div className="testimonial_slider_info">
                                <div className="stratup_testimonial_info d-flex align-items-center">
                                    <Slider ref={c => (this.slider = c)}
                                            className="testimonial_slider_four" {...settings}>
                                        
                                        <div className="item">
                                            <div className="author_img">
                                                <img src={require('../image/new/iit.png')} alt=""/>
                                            </div>
                                            <p>"Indian institutes of technology, IIT Madras"</p>
                                            <h5>BSc Data Science</h5>
                                            <h6>2021 |Madras, India</h6>
                                        </div>

                                        <div className="item">
                                            <div className="author_img">
                                                <img src={require('../image/new/nit.png')} alt=""/>
                                            </div>
                                            <p>"Maulana Azad National Institute of Technology, Bhopal"</p>
                                            <h5>Btech Computer Science And Engineering</h5>
                                            <h6>2018-2022 |Bhopal, India</h6>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Testimonials;
