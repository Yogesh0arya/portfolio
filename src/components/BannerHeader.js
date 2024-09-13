import React from 'react';
import Reveal from 'react-reveal/Reveal/';
import WaterWave from 'react-water-wave';
import useTypewriter from "react-typewriter-hook"
import {useState, useEffect, useRef} from "react";

const MagicOcean = [
    "React, Nextjs Web Developer",
    "Front End Web Developer",
    // "React Native App Developer",
    "Full Stack Web Developer",
    "Rising-Talent Freelancer on Upwork",
    // "React nanodegree Certified Developer",
    // "Backend Developer with Firebase frameworks",
    "Competitive Programmer",
    "2024 Gate Qualified",
];
let index = 0;

function BannerHeader() {
    const [magicName, setMagicName] = useState("Web Developer on Upwork");
    const intervalRef = useRef({});
    const name = useTypewriter(magicName);
    useEffect(
        () => {
            intervalRef.current = setInterval(() => {
                index = index > 5 ? 0 : ++index;
                setMagicName(MagicOcean[index]);
            }, 6000);
            return function clear() {
                clearInterval(intervalRef.current);
            };
        },
        [magicName]
    );
    return (
        <section id="home">
            <WaterWave interactive={true} strength={0} className="banner_area "
                       style={{width: '100%', height: '100%', backgroundSize: 'cover'}}
                       imageUrl={require("../image/new/fordjpg.jpg")}
                        dropRadius={15}
                        perturbance={0.03}
                        resolution={700}
                       >
                {() => (
                    <div className="container">
                        <div className="banner_content text-left">
                            <Reveal effect="fadeInUp" duration={1500}>
                                <h2 className="wow fadeInLeft animated">Hi, I'm Yogesh Arya</h2>
                            </Reveal>
                            <Reveal effect="fadeInUp" duration={2200}>
                                <h4 className="wow fadeInUp anoimated cursor">{name} &zwnj;</h4>
                            </Reveal>
                            <div className="banner_para"><p>I recently completed Data Science from IIT Madras and also done computer science and enginnering btech undergraduate at MANIT Bhopal.</p></div>
                        </div>
                    </div>
                )}
            </WaterWave>
        </section>
    );
}

export default BannerHeader;
