import React, {useContext, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {StoreContext} from '../store/Store';
import {types} from "../Reducer/StoreReducer";

const NewTask = ({}) => {
    // const [taskInfo,setTaskList] = useState();
    const params = useParams();
    const pid = params.id;
    const [store, dispatch] = useContext(StoreContext);
    let localState = {};
    let localStore = store;
    //const [state, dispatch] = useContext(Context);
    const {tasks} = store;
    console.log(tasks, "tasks")
    console.log(pid)
    const handleTaskChange = (id, val, label) => {

        localState[label] = val;
        console.log(localState, id)

        console.log(localState)

        //stores[0].tasks[0].label=val;
        //console.log(id,stores,stores[0].tasks[0],stores[0].tasks[0].label.toString(),label)
    }
    const saveTask = () => {
        console.log(localState, store)
        //console.log(LocalState)

        localState["id"] = Math.floor(Math.random() * 10).toString( )
        console.log(localState,localStore)

        localStore.tasks.push(localState);

        dispatch({
            type: types.saveTask,
            payload: localStore
        })
    }
    return (<div>

        <div>
            <div>{pid} id original</div>

            <div>{localState.id} id task</div>
            <div> Task Name</div>
            <input placeholder={"ingrese Dato"}
                   onChange={(event) => handleTaskChange(pid, event.target.value, "name")}/>
            <div> Task description</div>
            <input placeholder={"ingrese Dato"}
                   onChange={(event) => handleTaskChange(pid, event.target.value, "description")}/>
            <div>task DueDate</div>
            <input placeholder={"ingrese Dato"}
                   onChange={(event) => handleTaskChange(pid, event.target.value, "dueDate")}/>
            <div>Task assigned to</div>
            <input placeholder={"ingrese Dato"}
                   onChange={(event) => handleTaskChange(pid, event.target.value, "assignedTo")}/>
            <div>task status</div>
            <input placeholder={"ingrese Dato"}
                   onChange={(event) => handleTaskChange(pid, event.target.value, "status")}/>

            <button onClick={() => saveTask()}> Save Task</button>


        </div>
        )


        )}

    </div>)
    /* <div>
         {id}
         task comp
         {taskListProps}
         <span>
             {taskList.id}
         {taskList.name}


     </span>
         <span>
             {taskList.description}
         </span>
         <span>
             {taskList.dueDate}
         </span>
         <span>
             {taskList.assignedTo}
         </span>
         <span>
             {taskList.status}
         </span>
     </div>*/


}

export default NewTask;