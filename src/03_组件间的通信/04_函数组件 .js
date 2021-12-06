import React, { Component } from 'react'
import Protype from 'prop-types'
export default function App() {
    return (
        <div>
            
            <Child />
        </div>
    )
}
function Child(props){
    const {name,age}=props;
    const {names}=props;
    return(
        <div>
             {name+age}
            <ul>
               { names.map((item,index)=>{
                        return <li>{item}</li>
                } )
                   }

                    
                
            </ul>
        </div>
    )
}
//属性检查
//默认属性
Child.defaultProps={
    name:'tongwei',
    age:19,
    names:['tongwei','fewfwf']
}
Child.protypes={
    name:Protype.string.isRequired,
    age:Protype.number,
    names:Protype.array
}
//类属性
class Child2 extends Component{
    // static 添加类属性
    static protypes={

    }
    // static 添加默认类属性
    static defaultProps={

    }
}