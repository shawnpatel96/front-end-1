import React, { useState } from 'react';
import { connect } from 'react-redux';
import {addList} from '../actions/action'
import {Link} from 'react-router-dom';
import NavBar from './NavBar'
import ReactDOM from "react-dom";
import {
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardIcon,
  CardFieldset,
  CardInput,
  CardOptionsItem,
  CardOptions,
  CardOptionsNote,
  CardButton,
  CardLink
} from "./styles";

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
            <NavBar/>
            <CardWrapper>
                <CardBody>
            <CardHeader><CardHeading>Add A List Here!</CardHeading></CardHeader>
            <form onSubmit={listAdd}>
            <CardFieldset>
                <CardInput type="text" name="name" value={list.name} onChange={handleChange} placeholder="Add your own Custom List Here"/>
            </CardFieldset>  <br></br>
                <CardButton>Add Your List</CardButton>
                
            </form>
                </CardBody>
            </CardWrapper>
            
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
