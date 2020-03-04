export const initialState =[
    {
        task: '',
        completed: false,
        id: 3892987589
    }

]

export const reducer = (state,action) => {
    console.log("inside the reducer", action)
    switch(action.type) {
        case "ADD_TASK":
            return [
                ...state, {
                    task:action.payload,                       
                    completed: false,
             
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