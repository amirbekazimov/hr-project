import React from "react";
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";

const Contracts = () => {
    return <div>Contracts


        <Table className="w-100 mt-5 m-auto " striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>
                        <Link to={'/contract-details'}>
                            <button className="btn btn-success">View</button>

                        </Link>
                    </td>
                </tr>

            </tbody>
        </Table>
    </div>;
};

export default Contracts;
