import React, { PureComponent } from 'react'
class Home extends PureComponent{
    //即将渲染 获取时间
    componentWillUnmount(){
        this.begintime=Date.now();
       
    }
    componentDidMount(){
        this.endtime=Date.now();
        const interval=this.endtime-this.begintime;
        console.log(`Home渲染时间：${interval}`)
    }
    render() {
        return (
            <div>
                <h2>Home</h2>
            </div>
        )
    }
    //渲染完成 

} 
class About extends PureComponent{
    render() {
        return (
            <div>
                <h2>About</h2>
            </div>
        )
    }
} 
export default class App extends PureComponent {
    render() {
        return (
            <div>
                <Home />
                <About/>
            </div>
        )
    }
}
