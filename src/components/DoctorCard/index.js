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
    index,
    isActive
}) => {
    
    let activeClass 

    if (isActive) {
        activeClass = 'active'
    }

    return (
        <div onClick={() => onProfileSelect(index)} className={`doctor-card-container ${activeClass}`}>
            <img className="doctor-card-thumb" src={image} alt="doctor thumb" />
            <div className="doctor-card-content">
                <h3>{name}</h3>
                <p><span className={cost}>{cost}</span> {type}</p>
                <p>{address.street}</p>
                <p>{reviews.length} Reviews</p>
            </div>
        </div>
    )
}

export default DoctorCard