import updateReview from '../actions/updateReview'
import createReview from '../actions/createReview'
import removeReview from '../actions/removeReview'
import {
  UPDATE_REVIEW,
  REMOVE_REVIEW,
  CREATE_REVIEW
} from '../constants/actions'

const initialState = {
  doctors: [
    {
      id: 1,
      imageUrl: 'https://www.carwreckdoctor.com/hs-fs/hubfs/Car%20Accident%20Chiropractor%20.png?t=1532574648921&width=120&name=Car%20Accident%20Chiropractor%20.png',
      name: 'Alice Chang',
      cost: 'FAIR',
      type: 'Family Practice',
      address: {
        street: '5400 W Rosecrans Ave',
        city: 'Hawthorn',
        state: 'CA',
        zip: '90250'
      },
      reviews: [
        {
          date: 'June 10 2018',
          displayName: 'Jim Henson',
          review: 'She is a wonderful doctor! Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          isAuthor: false
        }
      ],
    },
    {
      id: 2,
      imageUrl: 'https://mk0similima57rg8gkp8.kinstacdn.com/wp-content/uploads/2016/09/lady-doctor.jpg',
      name: 'Elva Dreisbach',
      cost: 'HIGH',
      type: 'Internal Medicine',
      address: {
        street: '516 W 219th St',
        city: 'Calabasas',
        state: 'CA',
        zip: '90250'
      },
      reviews: [
        {
          date: 'June 10 2018',
          displayName: 'Sandy Colfax',
          review: 'Very professional and detail oriented! Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          isAuthor: false
        }
      ],
    },
    {
      id: 3,
      imageUrl: 'https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?resize=256%2C256&quality=100&ssl=1',
      name: 'Michael Genova Md',
      cost: 'FAIR',
      type: 'Dentist',
      address: {
        street: '2175 Park Place',
        city: 'Lincoln Heights',
        state: 'CA',
        zip: '90250'
      },
      reviews: [
        {
          date: 'June 10 2018',
          displayName: 'Bob Dole',
          review: 'I can not stop smiling, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          isAuthor: false
        }
      ],
    },
    {
      id: 4,
      imageUrl: 'https://www.apolloclinic.com/assets/images/doctors/7545_DrGADITYA.jpg',
      name: 'Mikki Manson',
      cost: 'LOW',
      type: 'General Practice',
      address: {
        street: '2175 Park Place',
        city: 'Santa Monica',
        state: 'CA',
        zip: '90250'
      },
      reviews: [
        {
          date: 'June 10 2018',
          displayName: 'Betty White',
          review: 'Fit as a fiddle after just one visit! Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          isAuthor: false
        }
      ],
    },
    {
      id: 5,
      imageUrl: 'http://assets.boundingintocomics.com/content/uploads/2018/03/Doctor-Strange.jpg',
      name: 'Stephen Strange',
      cost: 'LOW',
      type: 'Internal Medicine',
      address: {
        street: '516 W 219th St',
        city: 'Fresno',
        state: 'CA',
        zip: '90250'
      },
      reviews: [
        {
          date: 'June 10 2018',
          displayName: 'Peter Vankman',
          review: 'He was brilliant but rude... Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          isAuthor: false
        }
      ],
    },
    {
      id: 6,
      imageUrl: 'https://e3.365dm.com/17/10/1096x616/skynews-bradley-walsh-jodie-whittaker_4135901.jpg?bypass-service-worker&20171023085442',
      name: 'Howard Who',
      cost: 'FAIR',
      type: 'Oncology',
      address: {
        street: '516 W 219th St',
        city: 'Westwood',
        state: 'CA',
        zip: '90250'
      },
      reviews: [
        {
          date: 'June 10 2018',
          displayName: 'John Smith',
          review: 'Thankful for him. I still do not know what he looks like. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          isAuthor: false
        }
      ],
    },
  ]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_REVIEW:
      return updateReview(state, action)

    case REMOVE_REVIEW:
      return removeReview(state, action)

    case CREATE_REVIEW:
      return createReview(state, action)

    default:
      return state
  }
}