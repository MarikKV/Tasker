import React,  { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addNewTask, getTasks } from '../actions';
import { addNewTaskToDB, getCollectionWhere } from '../customFunctions';
import { Button, Form } from 'react-bootstrap';
import '../styles/AddNewTask.scss'

export default function AddNewTask() {

    
    const saveUserInStore = useSelector(state => state.saveUserInStore);

    const dispatch = useDispatch();

    const [title, setTitle] = useState("");
    const [describe, setDescribe] = useState("");
  
    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(`Title - ${title}. Describe - ${describe}.`)
        const taskData = {title, describe, userId: saveUserInStore.id}
        dispatch(addNewTask(taskData))
        //add task to firebase
        addNewTaskToDB(saveUserInStore.id, title, describe);
        //redrow tasks
        gettodos();
        //clear form inputs
        setTitle('');
        setDescribe('');
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
           <div className="addNewTaskForm">
                <Form onSubmit={handleSubmit} className="form">
                    <Form.Label>Title</Form.Label>
                    
                    <Form.Control 
                        type='text' 
                        value={title} 
                        onChange={e => setTitle(e.target.value)}
                    />
                    <Form.Label>Describe</Form.Label>

                    <Form.Control 
                        as="textarea" rows="3"  
                        value={describe} 
                        onChange={e => setDescribe(e.target.value)}
                    />
                    <Button type='submit'>Add new task</Button>
                </Form>
            </div>
        </div>
    )
}
