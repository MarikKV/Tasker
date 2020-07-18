import {combineReducers} from 'redux';
import addNewTask from './addNewTask';
import isLogged from './isLogged';
import saveUserInStore from './saveUserInStore';
import allUserTasks from './allUserTasks';
import allUserSharedTasks from './allUserSharedTasks';

const allReducers = combineReducers({
    addNewTask,
    isLogged,
    saveUserInStore,
    allUserTasks,
    allUserSharedTasks
})

export default allReducers;