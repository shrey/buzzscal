import React, { useState } from 'react';
import {StyledHeader } from '../login/login.styles'
import {CustomTextField} from '../TextField/TextField.component'
import {StyledButton} from '../login/login.styles'
export const SignUpComponent: React.FC = () => {
    var [signUpDetails,setSignUpDetails] =
    useState({
        email: '',
        name: '',
        enrollmentNumber: '',
        username: '',
        contact_no: '',
        password: ''
    });
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setSignUpDetails({...signUpDetails, [name]: value})
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

    }
    return(
        <div>
            <StyledHeader>Sign Up</StyledHeader>
            <form onSubmit = {handleSubmit} autoComplete = "off"></form>
            <CustomTextField
            label = "Name"
            required = {true}
            name = "name"
            value = {signUpDetails.name}
            handleChange={handleChange}

            />
            <CustomTextField
            label = "email"
            required = {true}
            name = "email"
            value = {signUpDetails.email}
            handleChange={handleChange}
            />
            <CustomTextField
            label = "Enrollment Number"
            required = {true}
            name = "enrollmentNumber"
            value = {signUpDetails.enrollmentNumber}
            handleChange={handleChange}
            />
            <CustomTextField
            label = "Username"
            required = {true}
            name = "username"
            value = {signUpDetails.username}
            handleChange={handleChange}
            />
            <CustomTextField
            label = "Contact Number"
            required = {true}
            type = "number"
            name = "contact_no"
            value = {signUpDetails.contact_no}
            handleChange={handleChange}
            />
            <CustomTextField
            label = "Password"
            required = {true}
            name = "password"
            type = "password"
            value = {signUpDetails.password}
            handleChange={handleChange}
            />
            <StyledButton>Sign Up</StyledButton>
        </div>
    )

}