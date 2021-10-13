export const types={
    saveTask: 'save - task'
}
const initialStore = {
    tasks: [{
        id:"1",
        name:"hola",
        description : "hola",
        dueDate: "hola",
        assignedTo: "hola",
        status:"hola"
    },{
        id:"2",
        name:"ciao",
        description : "ciao",
        dueDate: "ciao",
        assignedTo: "ciao",
        status:"ciao"
    }],

};
const StoreReducer = (state, action) => {
    console.log(action,action.payload)
    switch (action.type) {
        case types.saveTask:
            return {
                ...state,

            }
        default:
            return state;
    }
};
export {initialStore}
export default StoreReducer;