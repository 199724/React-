
import React, { Component } from 'react'
import TableContral from './TableContral'
import '../04_组件通信案例/style.css'
export default class App extends Component {
    constructor(props){
        super(props);
        this.titles=['新款','精选','流行']
        this.state={
            currentTitle:'新款'
        }
    }
    render() {
        const {currentTitle}=this.state;
        return (
            <div>
                <TableContral  itemClick={e =>this.itemClick(e)} titles={this.titles} /> 
            <h2>{currentTitle}</h2>
            </div>
        )
    }
    itemClick(index){
       this.setState({
        currentTitle:this.titles[index]
       })
        // console.log(index);
    }
}
