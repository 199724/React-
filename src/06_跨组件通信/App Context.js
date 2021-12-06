import React, { Component } from 'react'
//创建context组件
const UserContext=React.createContext({
    nickname:'aaa',
    level:1
})
// function Profile_header(){
//     return(
//         <div>
//             <h2>用户昵称：</h2>
//             <h2>用户等级：</h2>
//         </div>
//     )
// }
class Profile_header extends Component{
    render(){
        return(
            <div>
                <h2>用户昵称：{this.context.nickname}</h2>
             <h2>用户等级：{this.context.level}</h2>
            </div>
        )
    }
}
Profile_header.contextType=UserContext;
//属性展开
 function Profile(props) {
    return (
        <div>
            <Profile_header   />
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
        //const {nickname, level}=this.state;
        return (
            <div>
                <UserContext.Provider  value={this.state}>

                <Profile />
                
                </UserContext.Provider>
                
            </div>
        )
    }
}
