import _ from 'lodash'
export default function(state, action) {
    const key = action.id
    const reviews = _.cloneDeep(state.doctors[key].reviews) 

    reviews.splice(action.editIndex, 1)

    state.doctors[key].reviews = reviews

return state
}