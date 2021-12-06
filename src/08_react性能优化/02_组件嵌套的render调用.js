import React, { Component } from 'react'

//Header


 function Header() {
     return(
         <h2>我是header组件</h2>
     )
 }
 //Body
 function Body(){
     return(
        <div>Body</div>
     )
 }
//footer
function Footer(){
    return(
       <div>Footer</div>
    )
}
//Banneer
class Banner extends Component{
    render(){
        return(
          
            <h3>我是Banner组件</h3>
            
        )
    }
}
function ProductList(){
    return(
        <ul>
            <li>商品列表</li>
            <li>商品列表</li>
            <li>商品列表</li>
            <li>商品列表</li>
        </ul>
    )
}

class Main extends Component{
    render(){
        return(
           <div>
                <Banner />
            <ProductList />
           </div>
        )
    }
}

export default class App extends  Component {
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }
    render() {
        return (
            <div>
                <h2>当前计数：{this.state.count}</h2>
                <button onClick={()=>this.increament()}>+1</button>
              <Header/>
              <Main/>
              <Footer/>  
            </div>
        )
    }
    increament(){
        this.setState({
            count:this.state.count+1
        })
    }
}
