import React, { useState, useEffect } from 'react';
import AddNewTask from './AddNewTask';
import { useSelector, useDispatch } from 'react-redux';
import { getTasks } from '../actions';
import { getCollectionWhere } from '../customFunctions';
import { Button, Table } from 'react-bootstrap';
import { db } from '../firebase';


export default function Tasks() {
    const saveUserInStore = useSelector(state => state.saveUserInStore);
    const allUserTasks = useSelector(state => state.allUserTasks);
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
        .then(function() {
            console.log("Task successfully deleted!");
            gettodos()   
        }).catch(function(error) {
            console.error("Error removing task: ", error);
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
    return (
        <div>
            <h1 align="center">Tasks</h1>
            {console.log(allUserTasks)}
            <AddNewTask/>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Deskribe</th>
                        <th>Delete task</th>
                    </tr>
                </thead>
                <tbody>
                    {allUserTasks.map((item,index) => 
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{item.title}</td>
                            <td>{item.deskribe}</td>
                            <td><Button variant="danger" value={item.id} onClick={e => deleteTask(e.target.value)}>Delete</Button></td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    )
}
