import React, {useContext, useState} from 'react';

import {Link, useHistory} from "react-router-dom";

import {Context, StoreContext} from '../store/Store';
import Task from "../Tasks/Task";

export const Todo= ({})=> {
    const history = useHistory();
    const [store,dispatch] =useContext(StoreContext);
    const createTask = ()=>{
        let allTasks = store;
        let path = `/newtask`;
        history.push({
            pathname: path,

        });
    }
    const routeChange = (task) =>{

        let path = `/task/${task.id}`;
        history.push({
            pathname: path,

        });
    }
console.log(store.tasks)
    return(


            <div>
            asd
                {store.tasks.map((task,index)=>{
                    return(
                        <div>

                            <button   onClick={()=>routeChange(task)}>

                                {task.id}
                                {task.name}
                                <Task


                                />
                            </button >


                        </div>


                    )


                })}
                <button   onClick={()=>createTask()}>

                        Agregar tarea
                </button >
            </div>


)

};


export default Todo;