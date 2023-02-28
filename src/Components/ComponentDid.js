import React from 'react'
import Posts from '../Components/Posts';
import Comments from '../Components/Comments';
import Users from '../Components/Users';
import axios from 'axios';

///
import { BrowserRouter } from 'react-router-dom';
import {Link} from 'react-router-dom';
export default class ComponentClass extends React.Component {
    constructor(props) {
    super(props);
  
    // Initializing the state 
    this.state = {
        hello:true,
        renderType:'posts',
        items: [],
      };
  }

  componentDidMount() {  
    console.log("componentDidMountCalled",this.state.renderType);
    
    axios.get(`https://jsonplaceholder.typicode.com/${this.state.renderType}`)
      .then(res => this.setState({
        items:res.data
      }));
  }

  componentDidUpdate(prevProps,prevState){
    console.log(this.state.items);
    if(prevState.renderType!==this.state.renderType){   
    axios.get(`https://jsonplaceholder.typicode.com/${this.state.renderType}`)
        .then(res => this.setState({
        items:res.data
        }));
    }
  }
  changeState = ()=>{
    // console.log(this.state.renderType);
    axios.get(`https://jsonplaceholder.typicode.com/${this.state.renderType}`)
    .then(res => this.setState({
    items:res.data.reverse()
    }));
}

del = (id)=> {
    const newItems= this.state.items.filter(items => items.id!== id);
    this.setState({items : newItems});
}
compareBy = (key) => {
  return function(a, b) {
  if (a[key] < b[key]) return -1;
  if (a[key] > b[key]) return 1;
  return 0;
  };
};

sorti = (key) => {
  let arraycopy = [...this.state.items];
  arraycopy.sort(this.compareBy(key));
  this.setState({items: arraycopy});
}


  
  
  render() {
    return (
        <div>
          <center>
            <BrowserRouter>
           <Link to="/posts" ><button onClick={()=>this.setState({renderType:"posts"})}>Posts</button></Link>
           <Link to= "/comments"> <button onClick={()=>this.setState({renderType:"comments"})}>Comments</button></Link>
           <Link to= "/users"><button onClick={()=>this.setState({renderType:"users"})}>Users</button></Link>

            
            </BrowserRouter>
           
           

            
            <button onClick={()=>this.changeState()}>Reverse</button>
            
            <hr color='black'/>

            {this.state.renderType=== "posts" && <Posts items = {this.state.items} del={this.del} sorti={this.sorti}/> }
            {this.state.renderType === "comments" && <Comments items = {this.state.items}del={this.del}sorti={this.sorti}/> }
            { this.state.renderType==="users" && <Users items = {this.state.items}del={this.del}sorti={this.sorti}/>} 
            
            </center>
            
        </div>
    )
  }
}