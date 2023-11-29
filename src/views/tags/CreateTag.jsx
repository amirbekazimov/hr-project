import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { createTag } from "../../services/index";
import { useNavigate } from 'react-router-dom'

const CreateTag = () => {
    const [name, setName] = useState('')
    const navigate = useNavigate()

    const handleCreateTag = (e) => {
        e.preventDefault()
        createTag({ tag: name }).then((res) => {
            navigate('/tags')
        })
    }



    return <div className="card w-50 p-4 mt-5 m-auto">
        <div className="card-head">
            <h3>Create Tag</h3>
        </div>
        <div className="card-body">
            <Form onSubmit={(e) => handleCreateTag(e)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Create
                </Button>
            </Form>
        </div>
    </div>;
};

export default CreateTag;
