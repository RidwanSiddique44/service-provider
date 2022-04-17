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
            <div >
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block banner w-100"
                            src={require("../image/pic44.png")}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block banner w-100"
                            src={require("../image/pic55.png")}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block banner w-100"
                            src={require("../image/pic66.png")}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className='card-container m-5 w-100'>
                {
                    services.map(service => <Service key={service.id}
                        service={service}
                    ></Service>
                    )
                }

            </div>

        </div >
    );
};

export default Home;