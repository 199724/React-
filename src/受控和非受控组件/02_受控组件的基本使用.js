import React, { PureComponent } from 'react'

export default class App extends PureComponent {
    constructor(props){
        super(props);
        this.state={
            username:""
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={e=>this.handleSubmit(e)}>
                    <label htmlFor="username">
                        用户：<input type="text" id='username' value={this.state.username} onChange={e=>this.handleChange(e)}></input>

                    </label>
                    <input type='submit' value="tongwei" ></input>
                </form>
            </div>
        )
    }
    handleSubmit(event){
        event.preventDefault();
        console.log(this.state.username)
    }
    handleChange(event){
        console.log(event.target.value);
        this.setState({
            username:event.target.value
        })
    }
}
