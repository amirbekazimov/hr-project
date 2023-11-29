import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import { getVacancies } from "../../services";
import { Link } from "react-router-dom";

const AdminTable = () => {
    const [vacancies, setVacancies] = useState([])

    useEffect(() => {
        getVacancies().then((res) => {
            console.log(res.data.results);
            setVacancies(res.data.results)
        })
    }, [])


    return <div className="w-100">
        <h1>Admin Table</h1>
        <Link to={'/create-vacancy'}>
            <button className="btn btn-primary">Add vacancy</button>
        </Link>

        <Table className="w-100 mt-5 m-auto " striped bordered hover>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Job Category</th>
                </tr>
            </thead>
            <tbody>

                {vacancies && vacancies.map((vacancy, index) => (
                    <tr key={vacancy.id}>
                        <td>{vacancy.title}</td>
                        <td>{vacancy.description}</td>
                        <td>{vacancy.price}$</td>
                        <td>{vacancy.job_category?.tag}</td>
                    </tr>
                ))}

            </tbody>
        </Table>
    </div >;
};

export default AdminTable;
