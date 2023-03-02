import React from 'react'
import UnfoldMoreDoubleIcon from '@mui/icons-material/UnfoldMoreDouble';

export default function Users(props){
  return (
 <> 
   <br />
  <table border={2}>
  <thead>
  <tr>
   <th>Id <UnfoldMoreDoubleIcon onClick={()=>{props.sorti('Id')}}/></th>
   <th>Name  <UnfoldMoreDoubleIcon onClick={()=>{props.sorti('name')}}/></th>
   <th>Email <UnfoldMoreDoubleIcon onClick={()=>{props.sorti('email')}}/></th>
   <th>Username <UnfoldMoreDoubleIcon onClick={()=>{props.sorti('username')}}/></th>
   <th>Phone <UnfoldMoreDoubleIcon onClick={()=>{props.sorti('phone')}}/></th>
   <th>Delete</th>
  </tr>
  </thead>
  <tbody>
   {props.items && props.items.map(user =><tr key={user.id}><td>{user.id}</td>
   <td>{user.name}</td><td>{user.email}</td> <td>{user.username}</td> <td>{user.phone}</td> <td>
    <button onClick={()=>{props.del(user.id)}}>Delete</button></td></tr>)}
  </tbody>
  </table>
  <br />
  </>
 )
 }

