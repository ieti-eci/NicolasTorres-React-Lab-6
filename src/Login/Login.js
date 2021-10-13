import React, {useContext, useState} from 'react';
import {useHistory, useLocation, useParams} from "react-router-dom";
import { StoreContext} from '../store/Store';
import {types} from "../Reducer/StoreReducer";

const Login= ({}) => {
    const history = useHistory();
   //para que hago validacion en local >:c
    const login=()=>{
        //console.log(localState,store)
        //console.log(LocalState)


        let path = `/todo`;
        history.push({
            pathname: path,

        });
    }
    return(<div>
        "tasl"

        <div> Task Name</div>
        <input placeholder={"ingrese email"}
               />
        <div> Task description</div>
        <input placeholder={"ingrese password"}
               />
<button onClick={()=>login()}> LOGIN </button>

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

export default Login;