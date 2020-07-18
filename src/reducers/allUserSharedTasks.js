const allUserSharedTasks = (state = [], action) => {
    switch(action.type){
        case 'GET_ALL_USER_SHARED_TASKS':
            state = action.payload
            return state
        default:
            return state;
    }
}

export default allUserSharedTasks;