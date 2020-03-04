export const initialState =[
    {
        task: 'Take out Trash',
        completed: false,
        id: 3892987589
    },
    {
        task: 'Take out Trash Again',                // CHANGE endpoints TO NEW BACKEND API ////////////////////////////
        completed: false,
        id: 38929875842
    }

]

export const reducer = (state,action) => {
    console.log("inside the reducer", action)
    switch(action.type) {
        case "ADD_TASK":
            return [
                ...state, {
                    task:action.payload,                       // change endpoints here /////
                    completed: false,
                    id: Date.now()
                }
            ]
        case "TOGGLE_TASK":
            return state.map(item=>{
                return item.id === action.payload ? {...item, completed: !item.completed}:item});
        case "CLEAR_TASK":
           return state.filter(item=> 
            !item.completed
            )
        default: return state;    
    }
}