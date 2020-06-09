import React from 'react';
import {Main, HalfDiv} from './login.styles'
import {LoginComponent} from '../../components/login/login.component'
import {SignUpComponent} from '../../components/signup/signup.component'
export const LoginPage: React.FC = () => {
    return(
        <Main>
            <HalfDiv>
                <SignUpComponent />
            </HalfDiv>
            <HalfDiv>
                <LoginComponent />
            </HalfDiv>
        </Main>
    )
}