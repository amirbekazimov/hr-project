import React from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { deleteApplyedUsers } from '../../services/users'

const ApllyedUsersDelete = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const removeApply = async () => {
        deleteApplyedUsers(id);
        navigate('/applyed-users');
    }

    return (
        <div>
            <div className="card w-25 mt-5 m-auto" style={{ width: '18rem' }}>
                <div className="card-body">
                    <h5 className="card-title">Are you serious about removing this Applyed?</h5>

                    <div className='w-100 d-flex align-items-center'>
                        <button onClick={removeApply} className="btn btn-danger w-50">Yes</button>
                        <Link to={'/applyed-users'}>
                            <button className="btn btn-warning w-100 mx-2">No</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApllyedUsersDelete
