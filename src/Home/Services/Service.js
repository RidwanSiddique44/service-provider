import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Service = (service) => {
    console.log(service)
    const { name, image, description } = service.service;
    return (
        <div className="card-container">
            <Card className='border rounded shadow-lg p-2' style={{ width: '23rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>

    );
};

export default Service;