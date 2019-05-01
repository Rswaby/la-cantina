import React, { Component } from 'react';
import { Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import { AUTH_TOKEN } from "../../constants";
import { registerUser, loginUser } from "../../fetches";

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: true,
            email: "",
            firstName: "",
            lastName: "",
            password: "",
            isLoading: false,
            Submitted: false,
            error: '',
            userData: ''
        }

    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };
    handleSubmit(event) {
        event.preventDefault();
        const { login, email, password, firstName, lastName } = this.state;
        login ? this.login({ email: email, password: password }) : this.register({ first_name: firstName, last_name: lastName, email: email, password: password })
    }
    login(body) {
        console.log(body)
        loginUser(body).then(user => {
            this.setState({
                userData: user,
                isLoading: true,
            });
            localStorage.setItem(AUTH_TOKEN,user.token)
            const { from } = this.props.location.state || { from: { pathname: "/" } };
            this.props.history.push(from);

        },
            error => this.setState({
                error:error.message,
                isLoading: false
            })
        );//end of promise

    }
    register(body) {
        console.log(body)
        registerUser(body).then(user => {
            this.setState({
                isLoading: true,
                userData: user,
            })
            const { from } = this.props.location.state || { from: { pathname: "/" } };
            this.props.history.push(from);
        },
            error => this.setState({
                error: error.message,
                isLoading: false
            })
        )
    }
    render() {
        const { login,error } = this.state;
        console.log("error: ",error)

        return (
            <div className='login-form' style={{ marginTop: '70px' }}>
                <style>{`
                    body > div,
                    body > div > div,
                    body > div > div > div.login-form {
                    height: 100%;
                    }
                 `}</style>
                <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h2' color='teal' textAlign='center'>
                            {login ? "Log-in to your account" : "Create an account"}
                        </Header>
                        <form size='large' onSubmit={(e) => this.handleSubmit(e)}>
                            <Segment stacked>
                                {!login &&
                                    (<Form.Input
                                        fluid icon='user'
                                        iconPosition='left'
                                        placeholder='first name'
                                        onChange={this.handleChange('firstName')} />
                                    )}
                                {!login &&
                                    (<Form.Input
                                        fluid icon='user'
                                        iconPosition='left'
                                        placeholder='lastName'
                                        onChange={this.handleChange('lastName')} />
                                    )}
                                <Form.Input
                                    fluid
                                    icon='user'
                                    iconPosition='left'
                                    placeholder='E-mail address' onChange={this.handleChange('email')} />
                                <Form.Input
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    type='password'
                                    onChange={this.handleChange('password')}
                                />
                                <input type="submit" value={login ? 'Login' : 'Register'} />
                            </Segment>
                        </form>
                        <Message>
                            {login ? "New to us?" : "Already have an account? "}
                            <a href onClick={() => this.setState({ login: !login })}>{' '}
                                {login ? "Sign Up" : "Sign In"}</a>
                        </Message>
                    </Grid.Column>
                </Grid>
            </div>

        )
    }
}

export default Auth;

// <Button color='teal' fluid size='large' onChange={this.handleSubmit()}>
//                                     {login ? 'Login' : 'Register'}
//                                 </Button>