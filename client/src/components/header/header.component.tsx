import React from 'react';
import {HeaderContainer, OptionLink, OptionsContainer, LogoContainer} from './header.styles'
export const Header: React.FC = () => {
    return(
        <HeaderContainer>
            <LogoContainer to = "/">
                Events
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to = "/login">Login</OptionLink>
            </OptionsContainer>
        </HeaderContainer>
    )
}