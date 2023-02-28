import React from 'react'
import axios from 'axios';
import UnfoldMoreDoubleIcon from '@mui/icons-material/UnfoldMoreDouble';

export default class Posts extends React.Component {
    constructor(props) {
    super(props);
  
    // Initializing the state 
    this.state = {
        renderType:'posts',
        items: [],
        // revData:false
      };
  }
  
  // changeState = ()=>{
  //   axios.get(`https://jsonplaceholder.typicode.com/${this.state.renderType}`)
  //   .then(res => this.setState({
  //     items:res.data.reverse()
  //   }));
  // }

  





  render() {
    const Posts = this.props.items;
    return (
      <div> 
        <center>
        {/* <button onClick={()=>this.changeState()}>Reverse</button> */}
        <h1> {this.state.renderType} </h1>
        </center>


        <table border={2}>
          <tbody>
            <tr>
                <th>UserId <UnfoldMoreDoubleIcon   onClick={()=>{this.props.sorti('userId')}}/></th>
                <th>Id <UnfoldMoreDoubleIcon onClick={()=>{this.props.sorti('id')}}/></th>
                <th>Title <UnfoldMoreDoubleIcon onClick={()=>{this.props.sorti('title')}}/></th>
                <th>Body <UnfoldMoreDoubleIcon onClick={()=>{this.props.sorti('body')}}/></th>
                <th>Delete</th>
            </tr>
          </tbody>

        <tbody>

          
        {Posts && Posts.map((item)=>{
          return (<tr><td>{item.userId}</td><td>{item.id}</td><td>{item.title}</td> <td>{item.body}</td>  <td> 
            <button onClick={()=>{this.props.del(item.id)}}>Delete</button> </td></tr>)

        })}
        
        </tbody>
        </table>
      </div>
    )
  }
}