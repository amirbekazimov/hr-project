import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import { getVacancies } from '../../services/index'

const UserTable = () => {
    const BASE_URL = 'https://prounity.uz/jobs/';
    const [vacancies, setVacancies] = useState([]);

    useEffect(async () => {
        const vacancies = await getVacancies();
        setVacancies(vacancies);
    }, [])

    // const getVacancies = async () => {
    //     const token = localStorage.getItem('token');
    //     const response = await fetch(BASE_URL + '/enrolls/api/vacancy/', {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': `Bearer ${token}`,
    //         }
    //     });
    //     const data = await response.json();
    //     setVacancies(data);
    //     setVacancies(data);
    //     console.log(data);
    // }

    const applyVacancy = async (id) => {
        console.log(id);
    }

    return <div className="w-100">
        <h1>Vacancies</h1>
        <Table className="w-100 mt-5 m-auto " striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Vacancy name</th>
                    <th>Vacancy content</th>
                    <th>Image</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {vacancies.map((vacancy, index) => (
                    <tr key={vacancy.id}>
                        <td>{index + 1}</td>
                        <td>{vacancy.name}</td>
                        <td>{vacancy.content}</td>
                        <td>
                            <img style={{ width: 130 }} src={`${BASE_URL}${vacancy.img}`} alt="Vacancy Image" />
                        </td>
                        <td>
                            <button onClick={() => applyVacancy(vacancy.id)} className="btn btn-success">Apply</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    </div >;
};

export default UserTable;
