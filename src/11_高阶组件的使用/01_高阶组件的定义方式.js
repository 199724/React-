import React, { PureComponent } from 'react'
 class App extends PureComponent {
    render() {
        return (
            <div>
                App:{this.props.name}
            </div>
        )
    }
}

//高阶组件
function enhanceComponent(Wrapper){
    return class NewComponent extends PureComponent{
        render() {
            return (
               <Wrapper {...this.props}/>
            )
        }
    }

}
function enhanceComponent2(Wrapper){
    function NewComponent(props){
        return <Wrapper {...props}/>
    }
    return NewComponent;
}
const EnhanceComponent=enhanceComponent2(App);

export default EnhanceComponent;