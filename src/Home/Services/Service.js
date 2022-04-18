import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = (service) => {
    console.log(service)
    const { name, image, description, price } = service.service;
    const navigate = useNavigate();

    const navigateCheckOut = () => {
        navigate('/checkout');
    }
    return (
        <div className="service-card ms-5">
            <Card className='border rounded shadow-lg p-2' style={{ width: '23rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text >
                        <span className=" fs-3 fw-bolder">Fee:</span> <sapn className="fs-1">{price}</sapn>
                    </Card.Text>
                    <Button onClick={() => navigateCheckOut()} variant="info text-light fw-bolder">Check-Out</Button>
                </Card.Body>
            </Card>
        </div>

    );
};

export default Service;