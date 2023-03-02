import {React} from 'react'
// import axios from 'axios';
import UnfoldMoreDoubleIcon from '@mui/icons-material/UnfoldMoreDouble';
// import { Component } from 'react';

export default function Posts(props) {

    return (
      <div> 
        <table border={2}>
          <tbody>
            <tr>
                <th>UserId <UnfoldMoreDoubleIcon   onClick={()=>{props.sorti('userId')}}/></th>
                <th>Id <UnfoldMoreDoubleIcon onClick={()=>{props.sorti('id')}}/></th>
                <th>Title <UnfoldMoreDoubleIcon onClick={()=>{props.sorti('title')}}/></th>
                <th>Body <UnfoldMoreDoubleIcon onClick={()=>{props.sorti('body')}}/></th>
                <th>Delete</th>
            </tr>
          </tbody>

        <tbody>

          
        {props.items && props.items.map((item)=>{
          return (<tr><td>{item.userId}</td><td>{item.id}</td><td>{item.title}</td> <td>{item.body}</td><td> 
            <button onClick={()=>{props.del(item.id)}}>Delete</button> </td></tr>)

        })}
        
        </tbody>
        </table>
      </div>
    )
  }
