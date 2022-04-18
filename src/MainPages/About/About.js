import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className='about-container'>
            <h3 className="text-info fw-bolder ps-4 mt-5">KNOW ABOUT ME</h3>
            <hr />
            <h5 className='ps-3 fw-bolder'>I am Ridwan Siddique</h5>
            <div className='img-container mt-5 pe-2'>
                <img src={require('../../image/my-bg2.png')} />
            </div>
            <div>
                <h3 className="text-info fw-bolder ps-5 mt-5">MY NEXT GOAL</h3>
                <hr />

                <div className="gaols fs-5 px-5 mx-5">
                    Many professionals set goals to build momentum in their careers. Successful goals are specific, measurable, achievable, relevant and time-bound.Every single person need to have goals in their life. As a student or a person I have some goals to achieve. I am very fond of progrmming lenguage. So I learn about different proogramming language whenever I get chance. My academic study is not related to programming but I want to make my career on programmig. I am learning web development now. My next goals are improving skills on programming ,Establishing career expectations ,Get certified,Learning a new programming language and Learning a new technology whithin next one year.
                </div>
                <hr />
            </div>
        </div>
    );
};

export default About;