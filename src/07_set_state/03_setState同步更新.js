import React, { Component } from 'react'

export default class App extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            message:'hello world'
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMessage()}>改变文本</button>
                <button id='btn'>改变文本2</button>
            </div>
        )
    }
    componentDidMount(){
        document.getElementById("btn").addEventListener('click',()=>{
            
            this.setState({
                message:'你好啊 理应哈'
            })
            console.log(this.state.message)
        })
    }
    changeMessage(){
        setTimeout(()=>{
            this.setState({
                message:"你好啊 理应哈"
            })
        },0);
       
    }


}
