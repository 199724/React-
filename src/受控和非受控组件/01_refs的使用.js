import React, { createRef, PureComponent } from 'react'

export default class App extends PureComponent {
    constructor(props)
    {
        super(props);
        this.titleRef=createRef();
        this.titleEl=null;
    }
    render() {
        return (
            <div>
                <h2 ref="titleRef">Hello React</h2>//传入字符串
                <h2 ref={this.titleRef}>hello React</h2>//传入对象
                <h2 ref={(arg)=>this.titleEl=arg}>hello React</h2>//传入函数

                <button onClick={e=>this.changeText()}>改变文本</button>
            </div>
        )
    }
    changeText(){
       console.log(this.titleRef.current)
    }
}
