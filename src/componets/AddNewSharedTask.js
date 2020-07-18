import React,  { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addNewSharedTask, getTasks } from '../actions';
import { addNewSharedTaskToDB, getCollectionWhere } from '../customFunctions';
import { Button, Form } from 'react-bootstrap';
import '../styles/AddNewTask.scss'

export default function AddNewSharedTask() {
    const saveUserInStore = useSelector(state => state.saveUserInStore);

    const dispatch = useDispatch();

    const [title, setTitle] = useState("");
    const [describe, setDescribe] = useState("");
    const [shareTo, setShareTo] = useState("");
  
    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(`Title - ${title}. Describe - ${describe}.`)
        const taskData = {title, describe, userId: saveUserInStore.id, shareTo, mail: saveUserInStore.email}
        console.log(taskData)
        
        dispatch(addNewSharedTask(taskData))
        //add task to firebase
        addNewSharedTaskToDB(saveUserInStore.id, title, describe, shareTo, saveUserInStore.email);

        //redrow tasks
        gettodos();
        //clear form inputs
        setTitle('');
        setDescribe('');
        setShareTo('');
    }

    const gettodos = () => {
        getCollectionWhere('todos', 'userId', '==', saveUserInStore.id)
        .then( res => dispatch(getTasks(res)) )
        .catch( err => console.log(err) )
    }
    const checkMail = (mail) => {
        setShareTo(mail);
        if(mail.length > 5 && mail.includes('@')){
            console.log('checking...')
            getCollectionWhere('Users', 'email', '==', mail)
            .then(res => {
                if(res){console.log(res[0])}
            })
            .catch(err => {console.log(err)})
        }
    }
    return (
        <div>
           <div className="addNewTaskForm">
                <Form onSubmit={handleSubmit} className="form">
                    <Form.Label>Share to</Form.Label>
                    
                    <Form.Control 
                        type='email'
                        value={shareTo}
                        placeholder='Enter email of user'
                        onChange={e => { checkMail(e.target.value)} }
                    />
                    <Form.Label>Title</Form.Label>
                    
                    <Form.Control 
                        type='text' 
                        value={title} 
                        placeholder='Put a title to task'
                        onChange={e => setTitle(e.target.value)}
                    />
                    <Form.Label>Describe</Form.Label>

                    <Form.Control 
                        as="textarea" rows="3"  
                        value={describe} 
                        placeholder='Put a discribe to task'
                        onChange={e => setDescribe(e.target.value)}
                    />
                    <Button type='submit'>Add new task</Button>
                </Form>
            </div>
        </div>
    )
}
