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
            </div>
        )
    }
    componentDidUpdate(){
        console.log(this.state.message)
    }
    //方式1:获取异步更新后的数据
    //setState(更新的state,回调的函数)
    changeMessage(){
        this.setState({
            message:"你好啊 李颖河"
        },()=>{console.log(this.state.message)})
    }
    //
}
