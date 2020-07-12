import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import '../styles/Landing.scss'


export default function Landing() {
    const isLogged = useSelector(state => state.isLogged);
    const saveUserInStore = useSelector(state => state.saveUserInStore);
    const allUserTasks = useSelector(state => state.allUserTasks);

    const [numOfTasks, setNumOfTusk] = useState(0);
    const [completed, setCompleted] = useState(0);
    const [inProgres, setInProgres] = useState(0);
    const [failed, setFailed] = useState(0);

    const taskInfo = () =>{
        setNumOfTusk(allUserTasks.length)
        let completed = 0;
        let inProgres = 0;
        let failed = 0;

        allUserTasks.map(task => {
            console.log(task)
            if(task.status === 'done'){
                completed++
            } if(task.status === 'in progress'){ 
                inProgres++
            } if(task.status === 'failed') {
                failed++
            }
        })
        setCompleted(completed)
        setInProgres(inProgres)
        setFailed(failed)
    }
    
    useEffect(() => taskInfo(),[])
    return (
        <div>
            {console.log(allUserTasks)}
            {!isLogged 
                ? 
                <h1 align='center'>Please sign in</h1>
                : 
                <div className='mainInfoBlock animate__animated animate__bounceInUp'>
                <div className='infoBlock'>
                    <h1>Welcome back {saveUserInStore.name} {saveUserInStore.lastname}!</h1>
                    <h2>
                        You have {numOfTasks} tasks:<br/>
                        <div className='lime'>{completed} - completed</div> 
                        <div className='yellow'>{inProgres} - in progress</div>
                        <div className='red'>{failed} - failed</div>
                    </h2>
                    <br/>
                    <Button type='allert'>Show my tasks</Button>
                </div>
                </div>
                }
        </div>
    )
}
