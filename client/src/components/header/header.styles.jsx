import styled from 'styled-components';
import {Link} from 'react-router-dom'
export const HeaderContainer = styled.div `
    display: flex;
    height: 70px;
    width: 100%;
    margin-bottom: 25px;
    justify-content: space-between;
    color: #ececec;

`

export const LogoContainer = styled(Link)`
     height: 100%;
      width: 70px;
      padding: 25px;

`
export const OptionsContainer = styled.div `
      width: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-right: 30px;
`
export const OptionLink = styled(Link)  `
    padding: 10px 15px;
    cursor: pointer;
`
