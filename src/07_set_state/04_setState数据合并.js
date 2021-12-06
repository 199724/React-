import React, { Component } from 'react'

export default class App extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            message:'hello world',
            name:'coderwhy'
        }
    }
    render() {
        return (
            <div>
                 <h1>{this.state.message}</h1>
                 <h2>{this.state.name}</h2>
                <button onClick={()=>this.changeMessage()}>改变文本</button>
            </div>
        )
    }
    changeMessage(){
        this.setState({
            message:"你好啊 李银河"
        })
    }
}
