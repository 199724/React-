import React, { Component } from 'react'

class ChildCpn extends Component{
    
    render() {
        return (
            <div>
                <h2>子组件展示：{this.props.name}</h2>
            </div>
        )
    }
}
export default class App extends Component {
    constructor(){
        super()
    }
    render() {
        return (
            <div>
               <ChildCpn name='tongwei' /> 
            </div>
        )
    }
}
