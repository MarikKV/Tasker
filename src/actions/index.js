export const login = () => {
    return {
        type: "SIGN_IN"
    }
}

export const addNewTask = (props) => {
    return {
        type: "ADD_TASK",
        payload: props
    }
}
export const addNewSharedTask = (props) => {
    return {
        type: "ADD_SHARED_TASK",
        payload: props
    }
}

export const saveUserInLocalStore = (props) => {
    return {
        type: "SAVE_USER_IN_STORE",
        payload: props
    }
}

export const getTasks = (props) => {
    return {
        type: "GET_ALL_USER_TASKS",
        payload: props
    }
}

export const getSharedTasks = (props) => {
    return {
        type: "GET_ALL_USER_SHARED_TASKS",
        payload: props
    }
}

