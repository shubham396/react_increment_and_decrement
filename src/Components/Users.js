import React from 'react'

import UnfoldMoreDoubleIcon from '@mui/icons-material/UnfoldMoreDouble';
export default class Users extends React.Component {

 changeState=()=>{
 var users=this.props.items;
 // users=users.reverse();
 console.log('reverse',users)
 this.render();
 }


 render() {
 const users= this.props.items;
 console.log(users,"hii users")
 return (
 <div> 
  <center>
  <button onClick={()=>this.changeState()}>Reverse</button>
  </center>
  <br />
  <table border={2}>
  <thead>
  <tr>
   <th>Id <UnfoldMoreDoubleIcon onClick={()=>{this.props.sorti('Id')}}/></th>
   <th>Name  <UnfoldMoreDoubleIcon onClick={()=>{this.props.sorti('name')}}/></th>
   <th>Email <UnfoldMoreDoubleIcon onClick={()=>{this.props.sorti('email')}}/></th>
   <th>Username <UnfoldMoreDoubleIcon onClick={()=>{this.props.sorti('username')}}/></th>
   <th>Phone <UnfoldMoreDoubleIcon onClick={()=>{this.props.sorti('phone')}}/></th>
   <th>Delete</th>
  </tr>
  </thead>
  <tbody>
   {users && users.map(user =><tr key={user.id}><td>{user.id}</td>
   <td>{user.name}</td><td>{user.email}</td> <td>{user.username}</td> <td>{user.phone}</td> <td>
    <button onClick={()=>{this.props.del(user.id)}}>Delete</button></td></tr>)}
  </tbody>
  </table>
  <br />
  </div>
 )
 }
}

