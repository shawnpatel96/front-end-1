import React, { useState, useEffect } from "react";
import axios from "axios";
import axiosWithAuth from '../utils/axiosWithAuth'
import Form from "./Form"


const List = ()=>{
    const [formList, setFormList]= useState([]);
    useEffect(()=>{
        axiosWithAuth()
        .get('/api/auth/lists')
        .then(res=>{
            console.log('this is RESPONSE from GET in List.js', res)
            setFormList(res.data)
        })
        .catch(err=>{
            console.log('this is ERROR from GET in List.js', err)
        })
    },[])
    return(
        <>
        <Form tasks={formList}/>
        </>
    )
}


export default List