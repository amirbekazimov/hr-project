import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { updateHr } from '../../services/users';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateHr = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const { id } = useParams()
    const navigate = useNavigate()

    const handleUpdateHr = async (e) => {
        e.preventDefault();
        const updatedHr = {
            first_name: firstName,
            last_name: lastName,
        };
        const response = await updateHr(id, updatedHr);
        navigate('/hr')
    };

    return (
        <div className="card w-50 p-4 mt-5 m-auto">
            <div className="card-head">
                <h3>Udate HR</h3>
            </div>
            <Form onSubmit={(e) => handleUpdateHr(e)}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>FirstName</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>LastName</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Create
                </Button>
            </Form>
        </div>
    )
}

export default UpdateHr
