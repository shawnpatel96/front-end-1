import React, { useState } from 'react';
import { connect } from 'react-redux';
import {addList} from '../actions/action'
import {Link} from 'react-router-dom';

const AddList = (props) =>{
    const [list, setList] =useState({name:""})
     
    const listAdd=e=>{
        e.preventDefault();
        props.addList(list)
        setList({
            name:""
        })

    }
    const handleChange = e =>{
        setList({
            ...list,
            [e.target.name] : e.target.value
        })
    }
    return(
        <div>
            
            <form onSubmit={listAdd}>
                <h1>Add A List Here:</h1>
                <input type="text" name="name" value={list.name} onChange={handleChange}/>
                <button>Add Your List</button>
                
            </form>
            
        </div>
    )

}


const mapStateToProps = state=>{
    return{
        name:state.name
    }
}

export default connect(
    mapStateToProps,
    {addList}
)(AddList)
