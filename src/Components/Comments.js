import React from 'react'
// import { Component } from 'react';
// import axios from 'axios';
import UnfoldMoreDoubleIcon from '@mui/icons-material/UnfoldMoreDouble';
export default function Comments(props) {
    return (
      <> 
        <table border={2} >
          <thead>
            <tr>
                <th>PostId <UnfoldMoreDoubleIcon onClick={()=>{props.sorti('postId')}}/></th>
                <th>Id <UnfoldMoreDoubleIcon onClick={()=>{props.sorti('Id')}}/></th>
                <th>Name <UnfoldMoreDoubleIcon onClick={()=>{props.sorti('name')}}/></th>
                <th>Email <UnfoldMoreDoubleIcon onClick={()=>{props.sorti('email')}}/></th>
                <th>Delete </th>
            </tr>
          </thead>

        <tbody>

        {props.items && props.items.map((item)=>{
          return (<tr><td>{item.postId}</td><td>{item.id}</td><td>{item.name}</td><td>{item.email}</td>  <td> 
            <button onClick={()=>{props.del(item.id)}}>Delete</button> </td></tr>)
         })}
        </tbody>
        </table>
      </>
    )
  }
