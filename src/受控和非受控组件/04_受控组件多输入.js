import React, { PureComponent } from 'react'

export default class App extends PureComponent {
    constructor(props)
    {
        super(props);
        this.state={
            username:"",
            password:"",
            vild:""
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={e=>{this.handleSubmit(e)}}>
                    <label>
                        用户：
                        <input type='text' value={this.state.username} name="username" onChange={e=>this.handleChange(e)} />
                    </label>
                    <br />
                    <label>
                        密码：
                        <input type='text' value={this.state.password} name="password" onChange={e=>this.handleChange(e)} />
                    </label>
                    <br />
                    <label>
                        验证码：
                        <input type='text' value={this.state.vild} name="vild" onChange={e=>this.handleChange(e)} />
                    </label>
                    <br />
                    <input type='submit' value='提交'/>
                </form>
            </div>
        )
    }
    handleSubmit(event){
        event.preventDefault();
        const {username,password,vild}=this.state;//解构赋值
        console.log(username,password,vild);
    }
    handleChange(event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }
}
