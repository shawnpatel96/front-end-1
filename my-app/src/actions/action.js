import axiosWithAuth from '../utils/axiosWithAuth'

export const ADD_LIST = "ADD_LIST"
export const UPDATE_START = "UPDATE_START";
export const UPDATE_SUCCESS = "UPDATE_SUCCESS";

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
    dispatch({ type: UPDATE_START });
    axiosWithAuth()
    .put(`https://wunderlistbuildweek.herokuapp.com/api/lists/${id}`, payload)
    .then(res => {
        dispatch ({ type: UPDATE_SUCCESS, payload: payload })
        console.log(res);
    })
    .catch(err => {
        console.log(err)
    })
}


export const deleteList = (id) => dispatch => {
   
axiosWithAuth()
    .delete(`https://wunderlistbuildweek.herokuapp.com/api/lists/${id}`)
    .then(res => {
        console.log(res);
    })
    .catch(err => console.log(err));
}