import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useState } from 'react';



const InquiryForm = ({ showModal, handleClose, petId }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowConfirmation(true); // Show confirmation modal
    };

    const handleConfirmationClose = () => {
        setShowConfirmation(false);
        handleClose(); // Close both modals
    };

    return (

        <>
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Inquire about {petId}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPhone">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>

        {/* Confirmation Message Modal */}
        <Modal show={showConfirmation} onHide={handleConfirmationClose}>
        <Modal.Header closeButton>
            <Modal.Title>Thank You!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>Thank you, {formData.name}! Someone from our team will contact you soon.</p>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="primary" onClick={handleConfirmationClose}>
                Close
            </Button>
        </Modal.Footer>
    </Modal>


    </>


    );
}
 
export default InquiryForm;