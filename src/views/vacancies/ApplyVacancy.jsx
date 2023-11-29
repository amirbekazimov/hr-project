import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { applyVacancy } from '../../services'
import { useNavigate } from 'react-router-dom'

const ApplyVacancy = () => {
    const navigate = useNavigate()
    const { id } = useParams();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [file, setFile] = useState([]);

    const handleApplyVacancy = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('username', username);
        formData.append('email', email);
        formData.append('jobs', id);
        for (let i = 0; i < file.length; i++) {
            formData.append('uploaded_files', file[i]);
        }
        applyVacancy(formData);
        navigate('/vacancies')
    }

    return (
        <div className="card w-50 p-4 mt-5 m-auto">
            <div className="card-head">
                <h3>Apply To This Vacancy</h3>
            </div>
            <div className="card-body">
                <Form onSubmit={handleApplyVacancy}>
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
                        <Form.Label>email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="firstName"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>File</Form.Label>
                        <Form.Control
                            multiple
                            type="file"
                            placeholder="upload file"
                            onChange={(e) => setFile(e.target.files)}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Createee
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default ApplyVacancy
