import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { createHr } from '../../services/users'


const CreateHr = () => {
    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");


    const handleCreateHr = async (e) => {
        e.preventDefault();
        const hr = {
            username: username,
            first_name: firstName,
            last_name: lastName,
        };
        const response = await createHr(hr);
    };

    return (
        <div className="card w-50 p-4 mt-5 m-auto">
            <div className="card-head">
                <h3>Create HR</h3>
            </div>
            <div className="card-body">
                <Form onSubmit={(e) => handleCreateHr(e)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </Form.Group>
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
        </div>
    )
}

export default CreateHr
