import axiosWithAuth from '../utils/axiosWithAuth'

export const ADD_LIST = "ADD_LIST"
export const UPDATE_LIST_START = "UPDATE_LIST_START";
export const UPDATE_LIST_SUCCESS = "UPDATE_LIST_SUCCESS";

export const addList = list => dispatch => {
    dispatch({ type: ADD_LIST });
    
    axiosWithAuth()
        .post(`https://wunderlistbuildweek.herokuapp.com/api/lists/`, list)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err)
        });
}; 

export const updateList = (payload, id) => dispatch => {
    console.log(payload.name);
    const newId = id.toString();
    console.log("this is dynamic id", newId);
    dispatch({ type: UPDATE_LIST_START });
    axiosWithAuth()
    .put(`https://wunderlistbuildweek.herokuapp.com/api/lists/${newId}`, payload)
    .then(res => {
        dispatch ({ type: UPDATE_LIST_SUCCESS, payload: payload })
        console.log(res);
    })
    .catch(err => {
        console.log(err)
    })
}


export const deleteList = (id) => dispatch => {
    console.log(id);
axiosWithAuth()
    .delete(`https://wunderlistbuildweek.herokuapp.com/api/lists/${id}`)
    .then(res => {
        console.log(res);
    })
    .catch(err => console.log(err));
}