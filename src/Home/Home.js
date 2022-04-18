import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import Service from './Services/Service';
import './Home.css';

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(
        () => {
            fetch('data.json')
                .then(res => res.json())
                .then(data => setServices(data))
        }, []);

    return (
        <div >
            {/*--------------- banner carousel------------------ */}
            <div >
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block banner w-100"
                            src={require("../image/pic11 (1).png")}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Start living a glowin life</h3>
                            <p>Start a maintained life with your favourite healthcoach.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block banner w-100"
                            src={require("../image/pic55.png")}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Eat healthy ,Be fit</h3>
                            <p> Eat the right amount of calories for how active you are</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block banner w-100"
                            src={require("../image/pic66.png")}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Exercise, execise and exercise</h3>
                            <p>Make personalized plans to improve your physical health</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            {/*---------------- service section------------------ */}
            <h3 className="text-info fs-1 fw-bolder mt-5">SERVICES</h3>
            <div id='services' className='card-container my-5 w-100'>

                {
                    services.map(service => <Service key={service.id}
                        service={service}
                    ></Service>
                    )
                }

            </div>
            {/*------------------- extra section ------------------- */}
            <div className="extra-container">
                <div className='part-1'> <img className='rounded-circle w-75' src={require('../image/pic77.png')} /></div>
                <div className='part-2 text-light rounded'>
                    <h2 className='common mt-3'>Why to prefer?</h2>
                    <div className='text-start ms-5'>
                        <p>  <span className="common fw-bold">Spiritual development.</span> The practice of yoga develops the body to the level of mental mobility so that both the body and mind become mobile.</p>
                        <p>  <span className="common fw-bold">Improving health.</span>

                            Health is given to man from birth, but, unfortunately, modern man forgets that the stock of this health is finite, and continues to behave as if he is eternal.</p>
                        <p>  <span className="common fw-bold"> Getting rid of stress and nervous disorders.</span> Yoga is today one of the best remedies for neuropsychiatric disorders, that helps to believe in yourself.</p>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Home;