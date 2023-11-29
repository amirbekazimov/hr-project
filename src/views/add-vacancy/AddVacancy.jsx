import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { getJobCategories, postVacancy } from '../../services/index'

const AddVacancy = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [jobCategories, setJobCategories] = useState([])
    const [selectedJobCategory, setSelectedJobCategory] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        getJobCategories().then((res) => {
            setJobCategories(res)
            console.log(res);
        })
    }, [])

    const handleCreateVacancy = async (e) => {
        e.preventDefault();
        const vacancy = {
            title: title,
            description: description,
            job_category: selectedJobCategory,
            price: price,
        };
        postVacancy(vacancy);
        navigate('/admin-table')
    };

    return (
        <div className="card w-50 p-4 mt-5 m-auto">
            <div className="card-head">
                <h3>Create Vacancy</h3>
            </div>
            <div className="card-body">
                <Form onSubmit={(e) => handleCreateVacancy(e)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Select
                            aria-label="Default select example"
                            onChange={(e) => setSelectedJobCategory(e.target.value)}
                            value={selectedJobCategory}
                        >
                            <option>Open this select menu</option>
                            {jobCategories &&
                                jobCategories.map((item, index) => (
                                    <option key={index} value={item.id}>
                                        {item.tag}
                                    </option>
                                ))}
                        </Form.Select>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Create
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default AddVacancy
