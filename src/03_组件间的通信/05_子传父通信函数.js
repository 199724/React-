import React, { Component } from 'react'


class Counter extends Component{
    render() {
        const {onClick}=this.props;
        return (
             
           <button onClick={onClick}>+1</button>
        )
    }
}
export default class App extends Component {
    constructor(){
        super();
        this.state={
            counter:0,

        }
    }
    render() {
        return (
            <div>
                <h2>当前计数{this.state.counter}</h2>
                <button onClick={e=>this.increament()}>+</button>
                <Counter onClick={e=>this.increament()}/>//子组件传父组件

            </div>
        )
    }
    increament(){
        this.setState({
            counter:this.state.counter+1
        })
    }
}
