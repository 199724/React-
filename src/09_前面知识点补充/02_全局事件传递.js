import React, { PureComponent } from 'react'
import {EventEmitter} from 'events'
//事件总线
const eventBus=new EventEmitter();

class Home extends PureComponent{
    componentDidMount(){
        eventBus.addListener("sayHello",this.handleListener)
    }
    componentWillUnmount(){
        eventBus.removeListener("sayHello",this.handleListener)
    }
    handleListener(tong,wei){//接受多个参数
        console.log(tong,wei)
    }
    render() {
        return (
            <div>
                Home
                
            </div>
        )
    }
}
class Profile extends PureComponent{
    render() {
        return (
            <div>
                Profile
                <button onClick={()=>this.emmitEvent()}>点击了Profile按钮</button>
            </div>
        )
    }
    emmitEvent(){
        eventBus.emit('sayHello',"hello home",123);
    }
}
export default class App extends PureComponent {
    render() {
        return (
            <div>
                <Home />
                <Profile />
            </div>
        )
    }
}

