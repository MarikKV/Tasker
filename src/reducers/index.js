import {combineReducers} from 'redux';
import addNewTask from './addNewTask';
import isLogged from './isLogged';
import saveUserInStore from './saveUserInStore';
import allUserTasks from './allUserTasks';

const allReducers = combineReducers({
    addNewTask,
    isLogged,
    saveUserInStore,
    allUserTasks
})

export default allReducers;