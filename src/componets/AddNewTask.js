import React,  { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addNewTask, getTasks } from '../actions';
import { addNewTaskToDB, getCollectionWhere } from '../customFunctions';

export default function AddNewTask() {

    
    const saveUserInStore = useSelector(state => state.saveUserInStore);

    const dispatch = useDispatch();

    const [title, setTitle] = useState("");
    const [deskribe, setDeskribe] = useState("");
  
    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(`Title - ${title}. Deskribe - ${deskribe}.`)
        const taskData = {title, deskribe, userId: saveUserInStore.id}
        dispatch(addNewTask(taskData))
        //add task to firebase
        addNewTaskToDB(saveUserInStore.id, title, deskribe);
        gettodos()
    }

    const gettodos = () => {
        const alltodos = getCollectionWhere('todos', 'userId', '==', saveUserInStore.id)
        alltodos.then(
            res => {
                console.log(res)
                dispatch(getTasks(res))
            },
            rej => {
                console.log(rej)
            }
        )
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text' 
                    placeholder='task title' 
                    value={title} 
                    onChange={e => setTitle(e.target.value)}
                />

                <input 
                    type='text' 
                    placeholder='task deskribe' 
                    value={deskribe} 
                    onChange={e => setDeskribe(e.target.value)}
                />

                <button type='submit'>Add new task</button>
            </form>
        </div>
    )
}
