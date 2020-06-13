import React, { useState } from 'react';
import {StyledHeader } from '../login/login.styles'
import {CustomTextField} from '../TextField/TextField.component'
import {StyledButton} from '../login/login.styles'
import axios from 'axios'
export const SignUpComponent: React.FC = () => {
    var [signUpDetails,setSignUpDetails] =
    useState({
        email: '',
        name: '',
        enrollmentNumber: '',
        username: '',
        number: '',
        passwd: '',
        image_url: '',
    });
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setSignUpDetails({...signUpDetails, [name]: value})
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        axios({
            method: 'post',
            url: '/user/register',
            data: signUpDetails
        }).then(response => {
            console.log("Signed IN");
        })
        .catch(error => {
            console.log(error);
        })
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
            label = "Password"
            required = {true}
            name = "passwd"
            type = "password"
            value = {signUpDetails.passwd}
            handleChange={handleChange}
            />
            <CustomTextField
            label = "Contact Number"
            required = {true}
            type = "number"
            name = "number"
            value = {signUpDetails.number}
            handleChange={handleChange}
            />
            <CustomTextField
            label = "Image URL"
            required = {true}
            type = "text"
            name = "image_url"
            value = {signUpDetails.image_url}
            handleChange={handleChange}
            />
            <StyledButton>Sign Up</StyledButton>
        </div>
    )

}