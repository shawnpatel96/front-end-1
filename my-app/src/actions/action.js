import axiosWithAuth from '../utils/axiosWithAuth'

export const ADD_LIST = "ADD_LIST"


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