import React, { useState, useEffect } from 'react';
import AddNewTask from './AddNewTask';
import { useSelector, useDispatch } from 'react-redux';
import { getTasks } from '../actions';
import { getCollectionWhere, editTaskFB, getDocById } from '../customFunctions';
import { db } from '../firebase';

import { Button, Table, Modal, Form } from 'react-bootstrap';
import '../styles/Tasks.scss';


export default function Tasks() {
    //modal edit task state
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //for task editing
    const [edit_id, setId] = useState('');
    const [edit_title, setTitle] = useState('');
    const [edit_describe, setDescribe] = useState('');
    const [edit_status, setStatus] = useState('');

    //Saved user data in store
    const saveUserInStore = useSelector(state => state.saveUserInStore);
    const allUserTasks = useSelector(state => state.allUserTasks);

    //togle add task block
    const [showForm, setShowForn] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        db.collection('todos').where('userId', '==', saveUserInStore.id)
        .get()
        .then(snapsot => {
            const todos = snapsot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }))
            dispatch(getTasks(todos))
        })
        .catch(error => {
            console.log('error getting doc:', error)
        });
        
    }, [dispatch, saveUserInStore]);
    
    const deleteTask = (id) => {
        db.collection("todos").doc(id).delete()
        .then(() => {
            console.log("Task successfully deleted!");
            gettodos()   
        }).catch( err => {
            console.error("Error removing task: ", err);
        });
    }
    const editTask = (id) => {
        getDocById('todos', id)
        .then( res => {
            setId(id);
            setTitle(res.title);
            setDescribe(res.describe);
            setStatus(res.status);
            handleShow();
        })
        .catch( err =>{ console.log(err) })
    }

    const saveEditedTask = () => {
        editTaskFB(edit_id, edit_title, edit_describe, edit_status);
        setTimeout(() => {gettodos();handleClose();}, 500);
    }

    const gettodos = () => {
        getCollectionWhere('todos', 'userId', '==', saveUserInStore.id)
        .then(
            res => dispatch(getTasks(res))
        )
        .catch( err => console.log(err) )
    }
    const togleAddTask = (data) => {
        setShowForn(!data)
    }
    return (
        <div className='allTasks animate__animated'>
            
            <div className={showForm ? 'allTasks_Table_Active' : 'allTasks_Table'}>
                <h1 align='center'>All tasks of user - {saveUserInStore.name} {saveUserInStore.lastname}</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Describe</th>
                            <th>Status</th>
                            <th>Edit task</th>
                            <th>Delete task</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allUserTasks.map((item,index) => 
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{item.title}</td>
                                <td className='table_deskribe'>{item.describe}</td>

                                {item.status === 'in progress' ? <td className='status_progress'><b>{item.status}</b></td> : null}
                                {item.status === 'done' ? <td className='status_done'><b>{item.status}</b></td> : null}
                                {item.status === 'failed' ? <td className='status_failed'><b>{item.status}</b></td> : null}

                                <td><Button variant='warning' value={item.id} onClick={e => editTask(e.target.value)}>Edit</Button></td>
                                <td><Button variant='danger' value={item.id} onClick={e => deleteTask(e.target.value)}>Delete</Button></td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
           
            <div className={showForm ? 'allTasks_Add animate__animated animate__fadeOutRight' : 'allTasks_Add_Active animate__animated animate__fadeInRight'}>
                <AddNewTask/>
            </div>
            <div className='togleForm' onClick={()=>togleAddTask(showForm)}>{showForm ? '<' : '>'}</div>

            {/* Форма для редагування завдання*/}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Editing task</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Label>Title</Form.Label>
                        <Form.Control   
                            value={edit_title} 
                            onChange={e => setTitle(e.target.value)}
                        />

                        <Form.Label>Describe</Form.Label>
                        <Form.Control 
                            as="textarea" rows="4"  
                            value={edit_describe} 
                            onChange={e => setDescribe(e.target.value)}
                        />

                        <Form.Label>Status</Form.Label>
                        <Form.Control as="select" value={edit_status} onChange={e => setStatus(e.target.value)}>
                            <option>in progress</option>
                            <option>done</option>
                            <option>failed</option>
                        </Form.Control>
                        
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={saveEditedTask}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
