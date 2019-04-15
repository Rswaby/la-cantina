import React, { Component } from 'react';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import { AUTH_TOKEN, LOGIN_MUTATION, SIGNUP_MUTATION } from "../../constants";
import { Mutation } from "react-apollo";

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: true,
            email: "",
            name: "",
            password: "",
        }
    }

    handleChange = name => event => {
        console.log(event.target.value)
        this.setState({
            [name]: event.target.value,
        });
    };

    _confirm = async data => {
        console.log("Confirmed")
        const { token } = this.state.login ? data.login : data.signup
        this._saveUserData(token)
        this.props.history.push(`/`)
    }
    _saveUserData = token => {
        localStorage.setItem(AUTH_TOKEN, token);
    }

    render() {
        const { login, password, name, email } = this.state;

        return (
            <div className='login-form' style={{marginTop:'70px'}}>
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
                        <Form size='large'>
                            <Segment stacked>
                                {!login &&
                                    (<Form.Input
                                        fluid icon='user'
                                        iconPosition='left'
                                        placeholder='full name'
                                        onChange={this.handleChange('name')} />
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
                                <Mutation
                                    mutation={login ? LOGIN_MUTATION : SIGNUP_MUTATION}
                                    variables={{ email, password, name }}
                                    onCompleted={data => this._confirm(data)}>
                                    {mutation => (
                                        <Button color='teal' fluid size='large' onClick={mutation}>
                                            {login ? 'Login' : 'Register'}
                                        </Button>
                                    )}
                                </Mutation>
                            </Segment>
                        </Form>
                        <Message>
                            {login ? "New to us?" : "Already have an account? "}
                            <a href="#" onClick={() => this.setState({ login: !login })}>{' '}
                                {login ? "Sign Up" : "Sign In"}</a>
                        </Message>
                    </Grid.Column>
                </Grid>
            </div>

        )
    }
}

export default Auth;