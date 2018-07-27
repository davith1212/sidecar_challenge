import React from 'react'
import './styles.css'

const ReviewCard = ({
    date,
    displayName,
    review,
    isAuthor,
    onEdit,
    index
}) => {
    return (
        <section>
            <p>{date}</p>
            { // This allows only the author of the review to edit the review
                isAuthor ? <a onClick={() => onEdit(index)} className="edit-link">Edit</a> : null
            }
            <h3 className="bold">{displayName}</h3>
            <p>{review}</p>
            <hr className="review-break" />
        </section>
    )
}

export default ReviewCard