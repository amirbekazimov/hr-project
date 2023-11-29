import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import { getHr, deleteHr } from '../../services/users'


const Hr = () => {
    const [hr, setHr] = useState([])
    const location = useLocation()

    useEffect(() => {
        getHr().then((res) => {
            setHr(res)
        })
    }, [])

    return (
        <div>
            <h1>Admin Table</h1>
            <Link to={'/create-hr'}>
                <button className="btn btn-primary">Add HR</button>
            </Link>

            <Table className="w-100 mt-5 m-auto " striped bordered hover>
                <thead>
                    <tr>
                        <th>UserName</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {hr && hr.map((item, index) => (
                        <tr key={item.id}>
                            <td>{item.username}</td>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>

                            <td>
                                <Link to={`/update-hr/${item.id}`}>
                                    <button className="btn btn-warning">Update</button>
                                </Link>
                                <Link to={`/delete-hr/${item.id}`}>
                                    <button className="btn btn-danger mx-2">Delete</button>
                                </Link>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </Table>
        </div>
    )
}

export default Hr
