export default function(state, action) {
    const key = action.id

    state.doctors[key].reviews[action.editIndex] = action.payload

return state
}