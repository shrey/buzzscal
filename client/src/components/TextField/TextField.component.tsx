import React from 'react';
import {StyledTextField} from './TextField.styles'

interface Props{
    type?: string,
    label?: string,
    value?: string,
    name?: string,
    id?: string,
    autocomplete?: string,
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean
}

export const CustomTextField: React.FC<Props> = ({handleChange, ...otherProps}) => {

    return(
            <div style = {{textAlign: 'center', margin: "20px"}}>
                <StyledTextField  variant="outlined" onChange = {handleChange} {...otherProps} />
             </div>
        )
}