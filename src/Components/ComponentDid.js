import {React,Component} from 'react'
import Posts from '../Components/Posts';
import Comments from '../Components/Comments';
import Users from '../Components/Users';
import axios from 'axios';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

 
export default class ComponentClass extends Component {
    constructor(props) {
    super(props);
    this.state = {
      };
  }

onApply = (api) => {
     axios.get(`https://jsonplaceholder.typicode.com/${api}`)
     .then(res=> this.setState({
      items: res.data,
      renderType: api
     }));
    

  
}
changeState = ()=>{

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
        <>
          <center>
            <BrowserRouter>
           <Link to="/posts" ><button onClick={()=>this.onApply("posts")}>Posts</button></Link>
           <Link to= "/comments"> <button onClick={()=>this.onApply("comments")}>Comments</button></Link>
           <Link to= "/users"><button onClick={()=>this.onApply("users")}>Users</button></Link>

            
           <button onClick={()=>this.changeState()}>Reverse</button>
            
            <hr color='black'/>

<Routes>
            <Route path="/posts" element={this.state.renderType=== "posts" && <Posts items = {this.state.items} del={this.del} sorti={this.sorti} /> }/>
            <Route path="/comments" element={this.state.renderType === "comments" && <Comments items = {this.state.items}del={this.del}sorti={this.sorti}/> }/>
            <Route path="/users" element={ this.state.renderType==="users" && <Users items = {this.state.items}del={this.del}sorti={this.sorti}/>} />

            </Routes>    

            </BrowserRouter>
            </center>
            
        </>
    )
  }
}