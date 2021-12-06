import React, { PureComponent } from 'react'
import { createContext } from 'react/cjs/react.production.min';
//定义高阶组件
function withUser(Wrapper) {
    return props=>{
        return(
            <UserContext.Consumer>
                {
                    (user)=>{
                        return <Wrapper {...props} {...user}/>
                    }
                }
            </UserContext.Consumer>
        )
    }
    
}
//创建context
const UserContext=createContext({
    nickname:'默认',
    level:-1,
    区域:'中国'
})


class Home extends PureComponent{
    render() {
        return (
            <h2>Home:{`昵称：${this.props.nickname} 等级：${this.props.level} 区域：${this.props.region}` }</h2>
        )
    }
}

class About extends PureComponent{
    render() {
        return (
            <div>
                <h2>About:{`昵称：${this.props.nickname} 等级：${this.props.level} 区域：${this.props.region}` }</h2>

            </div>
        )
    }
}
class Detail extends PureComponent{
    render() {
        return (
            <div>
                <ul>
                    <li>{this.props.nickname}</li>
                    <li>{this.props.level}</li>
                    <li>{this.props.region}</li>
                </ul>
            </div>
        )
    }
}
const EnhanceHome= withUser(Home);
const EnhanceAbout=withUser(About);//对组件进行包裹
const EnhanceDetail=withUser(Detail)

 class App extends PureComponent {
    render() {
        return (
            <div>
                App:
               <UserContext.Provider value={{nickname:'why',level:18,region:188}}>
                   <EnhanceAbout/>
                   <EnhanceHome/>
                   <EnhanceDetail/>
               </UserContext.Provider>
            </div>
        )
    }
}



export default App;