import React, { useState, useEffect } from 'react'
import { getVacancies } from '../../services'
import { Link } from 'react-router-dom'

const Vacancies = () => {
    const [vacancies, setVacancies] = useState([])

    useEffect(() => {
        getVacancies().then((res) => {
            setVacancies(res)
            console.log(res);
        })
    }, [])

    return (
        <div className='container'>
            <Link to={'/login'}>
                <button className='btn btn-success'>login</button>
            </Link>
            <div className="d-flex flex-wrap">
                {vacancies.map(item => (
                    <div key={item.id} className="card m-2" style={{ width: '18rem' }}>
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{item.created_at}</h6>
                            <p className="card-text">{item.description}</p>
                            <p className="card-text">Price: {item.price}</p>
                            <Link to={`/apply-vacancy/${item.id}`}>
                                <button className="btn btn-primary">Apply</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Vacancies
