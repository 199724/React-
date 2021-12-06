
import { PureComponent } from 'react/cjs/react.production.min';

export default class App extends PureComponent {
    constructor(props){
        super(props);
        this.state={
            friends:[
                {name:'tongwei',age:20},
                {name:'lili',age:21},
                {name:'jiji',age:22},
                {name:'tom',age:23}
            ]
        }
    }
    render() {
        return (
            <div>
                <h2>好友列表</h2>
                <ul>
                    {this.state.friends.map((item,index)=>{
                        return <li key={item.name}>姓名：{item.name} 年龄：{item.age}
                        <button onClick={e=>{this.increamentAge(index)}}>age+1</button>
                        </li>
                    })}
                </ul>
                <button onClick={()=>this.insertState()}>添加数据</button>
            </div>
        )
    }
    insertState(){
       const newFriends=[...this.state.friends];//展开运算符
       newFriends.push({name:"tong",age:34});
       this.setState({
           friends:newFriends
       })
    }
    increamentAge(index){
        const newFriends=[...this.state.friends];//拷贝对象数组的引用地址
        newFriends[index].age+=1;
        this.setState({
            friends:newFriends
        })
    }
}
