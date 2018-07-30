import React from 'react'
import './style.css'

export default class ReviewCreateView extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            review: '',
            displayName: ''
        }
    }
    componentDidMount() {
        // This pre-populates the fields when editing/updating

        if (this.props.reviewToEdit) {
            this.setState({
                review: this.props.reviewToEdit.review,
                displayName: this.props.reviewToEdit.displayName
            })
        }
    }
    onFieldUpdate = val => {
        this.setState({
            [val.target.name]: val.target.value
        })
    }
    onCreateReview = () => {
        const newReview = {
            review: this.state.review,
            displayName: this.state.displayName
        }

        this.props.onCreateReview(newReview, this.props.doctor.id)
    }
    onUpdateReview = () => {
        const updatedReview = {
            review: this.state.review,
            displayName: this.state.displayName
        }

        this.props.onUpdateReview(updatedReview, this.props.editIndex)
    }
    onRemoveReview = () => {
        this.props.onRemoveReview(this.props.editIndex)
    }
    render() {
        return (
            <section className="review-create-container">
                <h1 className="blue">Provide your feedback</h1>
                <form>
                    <fieldset>
                        <legend className="green">Your review</legend>
                        <textarea 
                            id="review-textarea" 
                            name="review"
                            value={this.state.review}
                            onChange={this.onFieldUpdate}/>
                    </fieldset>
                    <hr id="review-create-break"/>
                    <fieldset>
                        <legend className="green">Your display name</legend>
                        <input 
                            id="review-input"
                            name="displayName"
                            value={this.state.displayName}
                            onChange={this.onFieldUpdate}/>
                    </fieldset>
                    <hr id="review-create-break"/>
                </form>
                <div id="button-container">
                    { // This only allows the author to remove their own reviews
                        this.props.reviewToEdit ? <div onClick={this.onRemoveReview} id="review-remove">Remove</div> : null
                    }
                    <div 
                        id="review-update"
                        onClick={this.props.reviewToEdit ? this.onUpdateReview : this.onCreateReview}>
                        Update <img id="review-arrow" src="https://www.portalguard.com/images/icons/right-arrow.png" alt="arrow icon" /></div>
                </div>
            </section>
        )
    }
}