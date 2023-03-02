import React from 'react'
import EnglishLanguage from './English';
import HindiLanguage from './Hindi';

export default class User extends React.Component { 
    constructor() {
        super();
        this.state = {
            count: 0,
        }

    }
    ment(value) {
        this.setState({
            
            count: value === 1 ? this.state.count+1 :  this.state.count-1})

        // if(value === 1) {
        //     this.setState({count: this.state.count+1})
        // }
        // else {
        //     this.setState({count: this.state.count-1})
    
        // }
    };
    // decrement() {
    //     if(this.state.count>0){
    //         this.setState({count: this.state.count-1})
    //     }
    //     else {
    //         <h1>first increment some values</h1>
           
    //     }
    // }

    changelanguage() {
        this.setState({
            greet:! this.state.greet
        })
    }
    reset(){

        // this.refs.field.value="";
         this.setState({count: 0})

//         //////////
//         <button ref={(button) => { this.button = button; }}>Click me!</button>


// this.resetButtonValue(this.button);

    };
        
            render(){
        return (
            <>
            <div className="center">
                <h1>{this.state.greet ?<EnglishLanguage />: <HindiLanguage />}</h1>
                <button onClick={()=> this.changelanguage()}>Change Language</button>
            <h1>{this.state.count}</h1>
            <button onClick={()=>this.ment(1) } my-2>Increment</button>
            
            <button onClick={()=>this.ment(0)} my-2>Decrement</button>
            <button  onClick={()=> this.reset()} >Reset</button>
            {/* <button ref={(button)} => {this.button = button;}}></button> */}
            </div>
            </>
        )
    }

}