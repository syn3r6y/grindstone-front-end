import React, { Component } from 'react';
import { HtmlHead } from '../components/head';
import { TextInput, Button } from '../components/inputs';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
        };

        this.updateEmailState = this.updateEmailState.bind(this);
        this.updatePasswordState = this.updatePasswordState.bind(this);
        this.loginSubmit = this.loginSubmit.bind(this);
    }

    render() {
        return (
            <div>
                <HtmlHead  title="Operatr - Sign In" metaDesc="Operatr on-demand sign in" />
                <h2>Sign In</h2>
                <TextInput
                    name="email"
                    onChange={this.updateEmailState}
                    placeholder="Email"
                    value={this.state.email}
                />
                <TextInput
                    name="password"
                    onChange={this.updatePasswordState}
                    placeholder="Password"
                    value={this.state.password}
                    password
                />
                <Button
                    text="Log In"
                    onClickEvent={this.loginSubmit}
                    variant={"primary"}
                />
                
            </div>
        );
    }

    updateEmailState(event) {
        this.setState({email: event.target.value});
    }

    updatePasswordState(event) {
        this.setState({password: event.target.value});
    }

    loginSubmit(){
        let payload = {
            "email": this.state.email,
            "password": this.state.password
        };

        fetch('http://localhost:1337/api/v1/account/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        }).then((res) => {
            return res.json();
        }).then((json) =>{
            window.sessionStorage.setItem('token', json['token']);
        });
    }
}

export default Login;