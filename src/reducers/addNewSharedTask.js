const addNewSharedTask = (state = {}, action) => {
    switch(action.type){
        case 'ADD_SHARED_TASK': 
            state = action.payload
            return state
        default:
            return state;
    }
}

export default addNewSharedTask;