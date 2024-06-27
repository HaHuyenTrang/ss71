import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addTodo} from "../store/reducer/todolistReducer"
import { deleteJob } from '../store/reducer/todolistReducer';

export default function Todolist() {
    const disPatch=useDispatch();
    const data:any=useSelector(state=>state)
    // console.log(data);
    const add=()=>{
        let newJob:any={
            id:Math.floor(Math.random()*9999999999),
            name:"code react",
        }
        disPatch(addTodo(newJob))
    }
    const deleteJ=(id:number)=>{
        disPatch(deleteJob(id))
    }
    
  return (
    <div>Todolist
        <button onClick={add}>thêm</button>
        {/* <button onClick={()=>deleteJ(job.id)}>xóa</button> */}

        <ul>
                {data.todolistReducer.jobs.map((job:any)=>{
                    return <li key={job.id}>{job.name}</li>
                })}
        </ul>
    </div>
  )
}
