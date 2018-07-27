import React from 'react'
import ReviewCard from '../ReviewCard'

const ReviewDefaultView = ({
    doctor,
    onLeaveReview,
    onEdit
}) => {
    return (
        <div>
            <div className="review-container">
                {doctor.reviews.map((review, index) => {
                    return <ReviewCard 
                    date={review.date}
                    displayName={review.displayName}
                    review={review.review}
                    isAuthor={review.isAuthor}
                    onEdit={onEdit}
                    index={index}
                    key={index}
                    />
                })}
            </div>
            <div 
                className="leave-review-button"
                onClick={onLeaveReview}
                >
                Leave Review
                <img id="review-arrow" src="https://www.portalguard.com/images/icons/right-arrow.png" alt="arrow icon" />
            </div>
        </div>
    )
}

export default ReviewDefaultView