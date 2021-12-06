import React, { PureComponent } from 'react'

export default class App extends PureComponent {
    constructor(props){
        super(props);
        this.state={
            fruit:""
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={e=>this.handleSubmit(e)}>
                    <select name="fruits"  onChange={e=>this.handleChange(e)}>
                    <option value="apple">苹果</option>
                    <option value="banana">香蕉</option>
                    <option value="orange">橘子</option>
                    </select>
                </form>
                <input type="submit" value="tongwei" />
            </div>
        )
    }
    handleSubmit(event){
        event.preventDefault();
        console.log(this.state.fruit)
    }
    handleChange(event){
        console.log(event.target.value);
        this.setState({
            fruit:event.target.value
        })
    }
}
