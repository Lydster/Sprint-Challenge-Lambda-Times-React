import React from 'react';

import styled from 'styled-components'

const Container = styled.div`
    border: 1px solid lightgray;
    width: 400px;
    margin: 50px auto;
    border-radius: 5px;
    padding: 20px;
`;

const H2style = styled.h2`
    text-align: center
`;

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: ""
        }
    }

    signIn = e => {
        
        e.preventDefault();
        localStorage.setItem('user', this.state.inputText);
        window.location.reload();
      };

    render() {
        return(
           
            <Container >
                <H2style>Welcome to Lambda Times</H2style>
                <form className="form" onSubmit={this.signIn}>
                <div>
                    <div className='form-group' >
                        <h4>Username</h4>
                        <input
                            type="username"
                            name="username"
                            id="exampleUsername"
                            placeholder="cool-guy"
                        />
                    </div>    
                </div>
                <div>
                    <div className='form-group'>
                        <h4>password</h4>
                        <input
                            type="password"
                            name="password"
                            id="examplePassword"
                            placeholder="********"
                        />
                    </div>
                </div>
                <button type="submit">Submit</button>
                </form>
            </Container>
        )
    }
    
}


export default Login;