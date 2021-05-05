import React, {Component} from 'react';
import Title from './Title';
import Fade from 'react-reveal/Fade';

class Services extends Component {
    render() {
        return (
            <section className="work_area bg_color seo_service_info" id="service">
                <div className="container seo_service_info">
                    <Title tCenter="text-center" stitle="What I do ?"
                           btitle="Innovative solutions to grow your creative projects"/>
                    <Fade bottom cascade duration={1000}>
                        <div className="row">
                            <div className="col-lg-4 col-sm-6">
                                <div className="work_item wow fadeInUp seo_service_item"
                                     data-wow-delay="0.1s">
                                    <img className="work_img"
                                         src={require(`../image/service-1.png`)} alt=""/>
                                    <h2 className="t_color">Technical Skills</h2>
                                    <p>PROFICIENT WITH: Reactjs, JavaScript, HTML, CSS, Bootstrap, Git, Tailwind Css, Blender</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="work_item wow fadeInUp seo_service_item"
                                     data-wow-delay="0.1s">
                                    <img className="work_img"
                                         src={require(`../image/service-2.png`)} alt=""/>
                                    <h2 className="t_color">Familiar Skills</h2>
                                    <p> Python, C, C++, SQL, PHP, Flutter, Android Studio, Maya, Unity, Adobe AfterEffect</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="work_item wow fadeInUp seo_service_item"
                                     data-wow-delay="0.1s">
                                    <img className="work_img"
                                         src={require(`../image/service-3.png`)} alt=""/>
                                    <h2 className="t_color">Certificates</h2>
                                    <p>Gate 2021 Qualified<br/> <br/>React Nanodegree (Udacity)</p>
                                </div>
                            </div>
                            
                        </div>
                    </Fade>
                </div>
            </section>
        )
    }
}

export default Services;
