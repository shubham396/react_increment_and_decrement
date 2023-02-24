import React, { Component } from 'react'

import axios from 'axios';

export default class ComponentClass extends Component {

    constructor(props){
        super(props);

        //initialize the state
        this.state ={ 
            renderType:'posts',
            items: [],

        };
    }

    componentDidMount(){
        console.log("componentDidMount",this.state.renderType);

        axios.get(`https://jsonplaceholder.typicode.com/${this.state.renderType}`)
        .then(res => this.setState({
            items : res.data
        }))
    }

    componentDidUpdate(prevProps, prevState){
        console.log('componentdidUpdate',this.state.renderType.type)
        console.log(this.state.items);
        if(prevState.renderType!==this.state.renderType){
            axios.get(`https://jsonplaceholder.typicode.com/${this.state.renderType}`)
            .then(res => this.setState({
                items: res.data
            }))
        }
    }

    render(){
  return (
     <div>   

    <button onClick={() =>this.setState({renderType:"posts"})}>posts</button>
    <button onClick={() =>this.setState({renderType:"comments"})}>comments</button>
    <button onClick={() =>this.setState({renderType:"users"})}>users</button>

    <div>
        <h1>
            {this.state.renderType}
        </h1>
        <table border={3}>
        <tr>
        <th> Posts</th>
        <th> comments</th>
        <th> users</th>
        </tr>
        <tr >
                <td>
        {this.state.items.map((item)=>{
            return <pre key={item.id}>{JSON.stringify(item.userId)}</pre>
        })}</td>
                <td>{this.state.items.map((item)=>{
            return <pre key={item.id}>{JSON.stringify(item.id)}</pre>
        })}</td>
                <td>{this.state.items.map((item)=>{
            return <pre key={item.id}>{JSON.stringify(item.title)}</pre>
        })}</td>
                </tr>
                </table>

{/*        
        {this.state.items.map((item)=>{
            return <pre key={item.id}>{JSON.stringify(item)}</pre>
        })}
         */}
    </div>
    
    
    
    </div>
  )
}
}