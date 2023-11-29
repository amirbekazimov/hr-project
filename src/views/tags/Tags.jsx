import React, { useEffect, useState } from "react";
import { Table } from 'react-bootstrap'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { getJobCategories } from '../../services/index'


const Tags = () => {
    const [tags, setTags] = useState([])
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        getJobCategories().then((res) => {
            setTags(res)
        })
    }, [location])

    return <div>
        <h1>Tags</h1>
        <Link to={'/create-tag'}>
            <button className="btn btn-primary">Create Tag</button>
        </Link>
        <Table className="w-50 mt-5 m-auto " striped bordered hover>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>

                {tags && tags.map((item, index) => (
                    <tr key={item.id}>
                        <td>{item.tag}</td>
                        <td>
                            <Link to={`/tag-details/${item.id}`}>
                                <button className="btn btn-primary">View</button>
                            </Link>
                            <Link to={`/delete-tag/${item.id}`}>
                                <button className="btn btn-danger mx-2">Delete</button>
                            </Link>
                        </td>
                    </tr>
                ))}

            </tbody>
        </Table>
    </div>;
};

export default Tags;
