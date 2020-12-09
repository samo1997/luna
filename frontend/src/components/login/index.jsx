import React, { useState } from 'react';
import { fetchLogin } from '../../store/actions/loginActions.jsx';
import { connect } from 'react-redux'
import styled from 'styled-components'
import {
    LoginContainer, TitleContainer, FormContainer,
    LoginTitle,
    FormUsername, FormPassword, FormBtn
} from "../../style/Login";
import { StandardButton } from "../../style/Buttons";
// import { theme } from "../../style/index"


const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleChangePassword = (event) => {
        setPassword(event.currentTarget.value)
    }

    const login = async (event) => {
        event.preventDefault();
        const result = await props.dispatch(fetchLogin(username, password));
        console.log(result);
        props.history.push('/posts');
    }

    return (

        <LoginContainer>

            <TitleContainer>
                <LoginTitle>Login</LoginTitle>
            </TitleContainer>

            <FormContainer onSubmit={login}>

                <FormUsername
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(event) => setUsername(event.currentTarget.value)}
                />

                <FormPassword
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handleChangePassword}
                />

                <FormBtn type="submit">
                  Login
                </FormBtn>

            </FormContainer>

      </LoginContainer>
  );
}

export default connect()(Login);
