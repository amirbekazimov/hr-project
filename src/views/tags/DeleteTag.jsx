import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { deleteTag } from "../../services/index";

const DeleteTag = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const removeTag = async () => {
        deleteTag(id);
        navigate('/tags');
    }

    return <div>
        <div className="card w-25 mt-5 m-auto" style={{ width: '18rem' }}>
            <div className="card-body">
                <h5 className="card-title">Are you serious about removing this Tag?</h5>

                <div className='w-100 d-flex align-items-center'>
                    <button onClick={removeTag} className="btn btn-danger w-50">Yes</button>
                    <Link to={'/tags'}>
                        <button className="btn btn-warning w-100 mx-2">No</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>;
};

export default DeleteTag;
