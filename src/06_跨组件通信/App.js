import React, { Component } from 'react'

function Profile_header(props){
    return(
        <div>
            <h2>用户昵称：{props.nickname}</h2>
            <h2>用户等级：{props.level}</h2>
        </div>
    )
}
//属性展开
 function Profile(props) {
    return (
        <div>
            <Profile_header {...props}  />
            <ul>
                <li>设置1</li>
                <li>设置2</li>
                <li>设置3</li>
                <li>设置4</li>
            </ul>
        </div>
    )
}


export default class App extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            nickname:'coderwhy',
            level:99
        }
    }
    render() {
        const {nickname, level}=this.state;
        return (
            <div>
                
                <Profile {...this.state}/>
            </div>
        )
    }
}
