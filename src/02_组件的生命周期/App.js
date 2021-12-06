import React, { Component } from 'react'

class Cpn extends Component{
    render() {
        return (
            <div>
                <h2>我是cpn组件</h2>
            </div>
        )
    }
    componentWillUnmount(){
        console.log("调用cpn方法")
    }
}
export default class App extends Component {
    constructor(){
        super();
        this.state={
            counter:0,
            isShow:true
        }
        console.log('this is console')
    }

    render() {
        console.log("this is console")
        return (
            <div>
                <h1>tongwei</h1>
                <h2>{this.state.counter}</h2>
                <button onClick={e=>this.increament()} >+1</button>
                <hr/>
                <button onClick={e=>this.changeShow()}>切换</button>
                {this.state.isShow&&<Cpn />}
                

            </div>
        )
    }
    changeShow(){
        this.setState({
            isShow:!this.state.isShow
        })
    }
    increament(){
        this.setState({
        counter:this.state.counter+1
        })
    }
    componentDidMount(){
        console.log('this is componedidmount')
    }
    componentDidUpdate(){
        console.log('this is update')
    }
}

