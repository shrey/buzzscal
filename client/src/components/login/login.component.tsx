import React, { useState } from 'react';

import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {CustomTextField} from '../TextField/TextField.component'
import {StyledHeader, StyledButton} from './login.styles'

export const LoginComponent: React.FC = () => {
    var [loginDetails, setLoginDetails] = useState({
        username: '',
        password: ''
    })

    const handleChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        console.log(name,value);
        setLoginDetails({...loginDetails, [name]: value});
        console.log(loginDetails);
    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

    }
    return(
        <div>
            <StyledHeader>Login</StyledHeader>
            <form autoComplete = "off" onSubmit = {handleSubmit}>
                <CustomTextField
                label = "Username"
                handleChange = {handleChange}
                value = {loginDetails.username}
                name = "username"
                type = "text"
                id = "username_signin"
                autocomplete = "off"/>
                <CustomTextField
                label = "Password"
                handleChange = {handleChange}
                value = {loginDetails.password}
                name = "password"
                id = "password_signin"
                type = "password"/>
                <StyledButton>Login</StyledButton>
            </form>

        </div>
    )
}
