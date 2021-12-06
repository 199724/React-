import { PureComponent,memo } from "react";

const MemoHeader= memo(function Header(){
    console.log("Header被调用");
    return <h2>我是header组件</h2>
})

class Banner extends PureComponent{
    render() {
        console.log("Banner render 函数被调用")
        return (
            <h2>我是Banner组件</h2>
        )
    }
}
function ProductList(){
    console.log("Productlist被调用");
    return(
        <ul>
            <li>商品列表</li>
            <li>商品列表</li>
            <li>商品列表</li>
            <li>商品列表</li>
        </ul>
    )
}
class Main extends PureComponent{
    render() {
        console.log("Main render 函数被调用");
        return (
            <div>
                <Banner />
                <ProductList />

            </div>
        )
    }
}

const MemoFooter=memo( function Footer(){
    console.log("Footer 被调用");
    return <h2>我是Footer组件</h2>
}
)



export default class App extends PureComponent {
    constructor(props){
        super(props);
        this.state={
            counter:0
        }
    }

    render() {
        console.log("APP render函数被调用");
        return (
            <div>
                <h2>当前计数：{this.state.counter}</h2>
                <button onClick={()=>this.increament()}>+1</button>
                <MemoHeader />
                <Main />
                <MemoFooter />
            </div>
        )
    }
    increament(){
        this.setState({
            counter:this.state.counter+1
        })
    }
}
