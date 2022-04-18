import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Checkout = () => {
    return (
        <div className='container w-50 mx-auto'>
            <Form>
                <h2 className='text-info text-center mt-5'>Please give the information</h2>
                <Form.Group className="mb-3" controlId="formBasicText">

                    <Form.Control type="text" placeholder="Enter Your Name" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">

                    <Form.Control type="text" placeholder="Enter Your Phone Number" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">

                    <Form.Control type="text" placeholder="Enter Your Adress" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">

                    <Form.Control type="text" placeholder="Enter Your Occupation" />

                </Form.Group>


                <Button variant="info fw-bolder text-light" type="submit">
                    Proceed Checkout
                </Button>
            </Form>
        </div>
    );
};

export default Checkout;