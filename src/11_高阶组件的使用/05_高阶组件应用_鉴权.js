import React, { PureComponent } from 'react'
//高阶组件进行包裹，进行鉴权
function withAuthth(Wrapper) {
   return props=>{
       const {isLogin}=props;//接受props传过来的islogin参数
       if(isLogin){
           return <Wrapper {...props}/>
       }
       else
       {
           return <LoginPage />
       }
   }
    
}
class LoginPage extends PureComponent{
    render() {
        return (
            <div>
                <h2>this is login page</h2>
            </div>
        )
    }
}
class Cart extends PureComponent{
    render() {
        return (
           <h2>this is cart page</h2>
        )
    }
}

const AuthCartPage=withAuthth(Cart);
export default class App extends PureComponent {
    render() {
        return (
            <div>
                <AuthCartPage isLogin={false} />
            </div>
        )
    }
}
