import React from 'react'
import { deleteHr } from '../../services/users'
import { Link, useParams, useNavigate } from 'react-router-dom';

const DeleteHr = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const removeHr = async () => {
        deleteHr(id);
        navigate('/hr');
    };

    return (
        <div>
            <div className="card w-25 mt-5 m-auto" style={{ width: '18rem' }}>
                <div className="card-body">
                    <h5 className="card-title">Are you serious about removing this HR?</h5>

                    <div className='w-100 d-flex align-items-center'>
                        <button onClick={removeHr} className="btn btn-danger w-50">Yes</button>
                        <Link to={'/hr'}>
                            <button className="btn btn-warning w-100 mx-2">No</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default DeleteHr
