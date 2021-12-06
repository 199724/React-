import React, { Component } from 'react'
import NavBar from './NavBar'
import NavBar2 from './NavBar2'
export default class App extends Component {
    render() {
        return (
            <div>
                <NavBar name='' title='' classname=''>
                    <span>tongwei</span>
                    <strong>js</strong>
                    <span>ccc</span>
                   
                </NavBar>
                <NavBar2 leftSlot={<span>aaa</span>}
                centerSlot={<strong>bbb</strong>}
                rightSlot={<span>ccc</span>}>

                </NavBar2>
                
                
                
            </div>
        )
    }
}
