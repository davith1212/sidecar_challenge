import React from 'react'
import './styles.css'

const DoctorCard = ({
    name,
    type,
    address,
    cost,
    reviews,
    image,
    onProfileSelect,
    index
}) => {
    
    return (
        <div onClick={() => onProfileSelect(index)} className="doctor-card-container">
            <img className="doctor-card-thumb" src={image} alt="doctor thumb" />
            <div className="doctor-card-content">
                <h3>{name}</h3>
                <p><span className={cost}>{cost}</span> {type}</p>
                <p>{address.street}</p>
                <p>{reviews.length} Reviews</p>
            </div>
            <hr />
        </div>
    )
}

export default DoctorCard