import React from 'react';
import { connect } from 'react-redux'
import moment from 'moment'
import DoctorCard from '../../components/DoctorCard';
import DoctorProfile from '../../components/DoctorProfile';
import Header from '../../components/Header'
import {
  UPDATE_REVIEW,
  REMOVE_REVIEW,
  CREATE_REVIEW
} from '../../constants/actions'
import './App.css';

class App extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      currentDoctor: 0,
      reviewState: 'View',
      editIndex: 0,
      search: ''
    }
  }

  onSearch = val => {
    this.setState({
      search: val.target.value
    })
  }

  onLeaveReview = (val) => {
    this.setState({
        reviewState: 'Create'
    })
  }

  onProfileSelect = val => {
    this.setState({
      currentDoctor: val,
      reviewState: 'View'
    })
  }

  onLeaveReview = (val) => {
    this.setState({
      reviewState: 'Create'
    })
  }
  onCreateReview = (newReview, id) => {
    const date = moment().format("MMM DD, YYYY")

    this.props.dispatch({
      type: CREATE_REVIEW,
      id: id - 1,
      payload: {date, review: newReview.review, displayName: newReview.displayName, isAuthor: true}
    })

    this.setState({
      reviewState: 'View'
    })
  }

  onRemoveReview = editIndex => {
    this.props.dispatch({
      type: REMOVE_REVIEW,
      id: this.state.currentDoctor,
      editIndex
    })

    this.setState({
      reviewState: 'View'
    })
  }

  onUpdateReview = (newReview, editIndex) => {
    const date = moment().format("MMM DD, YYYY")

    this.props.dispatch({
      type: UPDATE_REVIEW,
      id: this.state.currentDoctor,
      editIndex,
      payload: {date, review: newReview.review, displayName: newReview.displayName, isAuthor: true}
    })

    this.setState({
      reviewState: 'View'
    })
  }

  onEdit = val => {
    this.setState({
      reviewState: 'Edit',
      editIndex: val
    })
  }

  render() {
    // This lets us dynamically search doctors
    let filteredDoctors = this.props.doctors.filter(doctor => {
      return doctor.name.toLowerCase().indexOf(this.state.search) !== -1
    })

    // This defines the doctor to view
    const currentDoctor = filteredDoctors[this.state.currentDoctor]

    return (
      <div className="App">
        <Header onSearch={this.onSearch} />
        <section className="left-content">
          {filteredDoctors.map((doctor, index) => {
            let isActive = false

            if (currentDoctor && currentDoctor.id === doctor.id) {
              isActive = true
            }
            
            return <DoctorCard 
              id={doctor.id}
              image={doctor.imageUrl} 
              name={doctor.name}
              address={doctor.address}
              type={doctor.type}
              cost={doctor.cost}
              reviews={doctor.reviews}
              onProfileSelect={this.onProfileSelect}
              index={index}
              isActive={isActive}
              key={index} />
          })}
        </section>

        <section className="right-content">
        { // This checks to for a doctor to display or prints error message
          currentDoctor ?
          <DoctorProfile 
            onLeaveReview={this.onLeaveReview}
            reviewState={this.state.reviewState}
            onCreateReview={this.onCreateReview}
            onUpdateReview={this.onUpdateReview}
            onRemoveReview={this.onRemoveReview}
            onEdit={this.onEdit}
            editIndex={this.state.editIndex}
            doctor={currentDoctor} />
          : <h3 className="no-search-results">No Search Results</h3>}
        </section>
      </div>
    );
  }
}

function mapProps(state) {
  return {
    doctors: state.doctorState.doctors
  }
}

export default connect(mapProps, dispatch => ({ dispatch }))(App)
