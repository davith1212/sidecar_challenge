import React from 'react'
import ReviewDefaultView from '../ReviewDefaultView'
import ReviewCreateView from '../ReviewCreateView'
import './styles.css'

export default class DoctorProfile extends React.PureComponent {
    renderReviewState = () => {
        // This function generates different views dynamically depending on reviewState
        const doctor = this.props.doctor
        const editIndex = this.props.editIndex

        if (this.props.reviewState === 'Create') {
            return <ReviewCreateView 
                onCreateReview={this.props.onCreateReview}
                doctor={doctor}
                />
            } else if (this.props.reviewState === 'Edit') {
                return <ReviewCreateView 
                onCreateReview={this.props.onCreateReview}
                onRemoveReview={this.props.onRemoveReview}
                onUpdateReview={this.props.onUpdateReview}
                reviewToEdit={doctor.reviews[editIndex]}
                editIndex={editIndex}
                />
            } else {
                return <ReviewDefaultView 
                onLeaveReview={this.props.onLeaveReview}
                onEdit={this.props.onEdit}
                doctor={doctor} />
        }
    }
    render() {
        const doctor = this.props.doctor
        const reviewsCount = doctor.reviews.length
        return (
            <section>
                <div className="doctor-profile-header">
                    <img src={doctor.imageUrl} alt="profile thumb" />
                    <div className="doctor-profile-content">
                        <h1 className="blue">{doctor.name}</h1>
                        <p><span className="green">{doctor.type}</span></p>
                        <p>{reviewsCount} reviews</p>
                    </div>
                    <div className="doctor-profile-address">
                        <div className="icon-wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M21.71 11.29l-9-9c-.39-.39-1.02-.39-1.41 0l-9 9c-.39.39-.39 1.02 0 1.41l9 9c.39.39 1.02.39 1.41 0l9-9c.39-.38.39-1.01 0-1.41zM14 14.5V12h-4v3H8v-4c0-.55.45-1 1-1h5V7.5l3.5 3.5-3.5 3.5z"/></svg>
                        </div>
                        <div className="doctor-profile-address-content">
                            <p>Address</p>
                            <p className="green">{doctor.address.street}</p>
                            <p className="green">{doctor.address.city} {doctor.address.state}, {doctor.address.zip}</p>
                        </div>
                    </div>
                </div>
                <hr />
                {this.renderReviewState()}
            </section>
        )
    }
}