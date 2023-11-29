import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getApplyedUsersDetails } from '../../services/users'

const ApplyedUserDetails = () => {
    const { id } = useParams()
    const [applyedUser, setApplyedUser] = useState({})

    useEffect(() => {
        getApplyedUsersDetails(id).then((res) => {
            setApplyedUser(res)
            console.log(res);
        })
    }, [])

    return (
        <div className='container'>
            <div className="d-flex flex-wrap">
                <div key={applyedUser.id} className="card w-50 mt-5 m-auto" style={{ width: '18rem' }}>
                    <div className="card-body">
                        <h5 className="card-title">Username: <span className='text-success'>{applyedUser?.user?.username}</span></h5>
                        <h5 className="card-title">Email: <span className='text-success'>{applyedUser?.user?.email}</span></h5>
                        <div>
                            {applyedUser?.apply_jobs_user?.map(item => (
                                <h4 key={item.id} >
                                    <a download={true} href={item.attachment}>
                                        File
                                    </a>
                                </h4>
                            ))}
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default ApplyedUserDetails
