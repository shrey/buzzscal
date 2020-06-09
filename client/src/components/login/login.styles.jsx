import styled from 'styled-components';

export const StyledHeader = styled.div `
    font-size: 30px;
    letter-spacing: 4px;
    margin-bottom: 30px;
`

export const StyledButton = styled.button `
    background: transparent;
    color: white;
    height: 30px;
    width: 10%;
    border-color: white;
    border-style: solid;
    cursor: pointer;
    border-width: 1px;
    border-radius: 7px;
    &:hover{
        background: #ececec;
        color: #222831;
    }
`