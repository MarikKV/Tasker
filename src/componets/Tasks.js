import React, { useState, useEffect } from 'react';
import AddNewTask from './AddNewTask';
import { useSelector, useDispatch } from 'react-redux';
import { getTasks } from '../actions';
import { getCollectionWhere } from '../customFunctions';
import { db } from '../firebase';

import { Button, Table } from 'react-bootstrap';
import '../styles/Tasks.scss';


export default function Tasks() {
    const saveUserInStore = useSelector(state => state.saveUserInStore);
    const allUserTasks = useSelector(state => state.allUserTasks);
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
        
    }, []);
    
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
        db.collection('todos').doc(id)
        .get()
        .then( doc => {
          if (doc.exists) {
            console.log("Document data:", doc.data());
          } else {
            console.log("No such document!");
          }
        })
        .catch( err => {
          console.log("Error getting document:", err);
        });
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
    const togleAddTask = (data) => {
        console.log(data)
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
                            <th>Edit task(in procces)</th>
                            <th>Delete task</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allUserTasks.map((item,index) => 
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{item.title}</td>
                                <td>{item.describe}</td>
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
        </div>
    )
}
