import React, { useState, useEffect } from 'react'
import { getApplyedUsers } from '../../services/users'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ApplyedUsers = () => {
    const [applyedUsers, setApplyedUsers] = useState([])

    useEffect(() => {
        getApplyedUsers().then((res) => {
            setApplyedUsers(res)
            console.log(res);
        })
    }, [])
    return (
        <div>
            <Table className="w-100 mt-5 m-auto " striped bordered hover>
                <thead>
                    <tr>
                        <th>UserName</th>
                        <th>Email</th>
                        <th>Created At</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {applyedUsers && applyedUsers.map((item, index) => (
                        <tr key={item.id}>
                            <td>{item.user.username}</td>
                            <td>{item.user.email}</td>
                            <td>{item.created_at}</td>


                            <td>
                                <Link to={`/applyed-users-details/${item.id}`}>
                                    <button className="btn btn-primary mx-2">View</button>
                                </Link>
                                <Link to={`/applyed-users-delete/${item.id}`}>
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

export default ApplyedUsers
