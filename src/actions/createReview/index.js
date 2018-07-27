export default function(state, action) {
    const key = action.id
  
    state.doctors[key].reviews.push(action.payload)
    
    return state
  }