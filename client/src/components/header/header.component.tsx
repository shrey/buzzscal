import React from 'react';
import {HeaderContainer, OptionLink, OptionsContainer, LogoContainer} from './header.styles'
import {Button} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import {withRouter, RouteComponentProps} from 'react-router-dom'

const useStyles = makeStyles({
    button: {
        marginLeft: "20px",
        marginRight: "20px"
    },

})

const Header: React.FC<RouteComponentProps> = ({history, match}) => {
    const classes = useStyles();
    return(
        <HeaderContainer>

                <Button className = {classes.button} onClick={() => history.push("/")}>Events</Button>

                <Button className = {classes.button} onClick={() => history.push("/login")}>Login</Button>

        </HeaderContainer>
    )
}

export default withRouter(Header);