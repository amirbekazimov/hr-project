import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getTagDetails } from "../../services/index";
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const TagDetails = () => {
    const { id } = useParams();
    const [tags, setTags] = useState([])

    useEffect(() => {
        getTagDetails(id).then((res) => {
            setTags(res)
            console.log(res);
        })
    }, [])


    return <div>TagDetails : {id}

        <Table className="w-50 mt-5 m-auto " striped bordered hover>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Apllyed Count</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{tags && tags.tag && tags.tag[0] && tags.tag[0].tag}</td>
                    <td>{tags?.count_job}</td>
                </tr>
            </tbody>
        </Table>

    </div>;
};

export default TagDetails;
