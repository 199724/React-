import React, { PureComponent } from 'react'
//定义高阶组件
function enhanceRegion(WrapperComponent) {
    return props=>{
        return <WrapperComponent {...props} region='中国' />
    }
    
}
class Home extends PureComponent{
    render() {
        return (
            <div>
                <h2>Home:{`昵称：${this.props.nickname} 等级：${this.props.level} 区域：${this.props.region}` }</h2>

            </div>
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
const EnhanceHome= enhanceRegion(Home);
const EnhanceAbout=enhanceRegion(About);//对组件进行包裹
 class App extends PureComponent {
    render() {
        return (
            <div>
                App:
                <EnhanceAbout nickname="coder" level={90}  />
                <EnhanceHome nickname="kobe" level={99} />
            </div>
        )
    }
}



export default App;