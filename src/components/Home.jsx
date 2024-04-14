import React, { useEffect, useRef } from 'react'
import Task from './Task'
import { useState } from 'react'
import Report from './Report'

const Home = () => {
    const intialArray = localStorage.getItem("task")
        ? JSON.parse(localStorage.getItem("task"))
        : [];
    const [task, setTask] = useState(intialArray);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const[taskDone,setTaskDone]= useState([])

    const titleHandler = (e) => {
        setTitle(e.target.value)
    }
    const descriptionHandler = (e) => {
        setDescription(e.target.value)
    }
    const titleRef = useRef(null)

    const submitHandler = (e) => {
        e.preventDefault();
        const newTodo = {
            title: title,
            description: description,
        };
        setTask([...task, newTodo]);
        setTitle("");
        setDescription("");
        titleRef.current.focus();
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            submitHandler(e);
        }
    };

    useEffect(() => {
        localStorage.setItem("task", JSON.stringify(task))
    }, [task])

    // const CompletedWorkArray = []
    const deleteTask = (index) => {
        const filteredArray = task.filter((val, i) => {
            if(i==index){
                setTaskDone(prevTaskDone => [...prevTaskDone, task[i]]);
                // setTaskDone([...taskDone,task[i]])
            }           
            return i !== index
        })
        console.log("filteredArray", filteredArray);
        // console.log("completed",taskDone);

        setTask(filteredArray)
    }
    useEffect(() => {
        console.log("completed", taskDone);
    }, [taskDone]);
    // console.log("task", task);
    // console.log(...task);
    return (
        <div className='container'>
            <h1>Daily Goals</h1>
            <form onSubmit={submitHandler}>
                <input type='text' placeholder='Title' onChange={titleHandler} value={title} ref = {titleRef}/>
                <textarea placeholder='Description' onChange={descriptionHandler} value={description} onKeyDown={handleKeyDown} ></textarea>
                <button type="submit">Add</button>
            </form>
            <Report/>
            {task.map((item, index) => (
                <div key={index}>
                    <Task title={item.title} description={item.description}
                        deleteTask={deleteTask} index={index} />
                </div>
            ))}
          



        </div>
    )
}

export default Home