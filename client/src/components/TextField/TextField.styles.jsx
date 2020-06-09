import styled from 'styled-components';
import {TextField} from '@material-ui/core';

export const StyledTextField = styled(TextField) `
 width: 40%;

 .MuiFormLabel-root{
     color: #ececec;
     font-family: 'Montserrat', sans-serif;
     &.Mui-focused{
         color: white;
     }
 }
 .MuiOutlinedInput-notchedOutline{
     border-color: #ececec;
 }
 .MuiOutlinedInput-root{
     &:hover fieldset{
         border-color: white;
     }
     &.Mui-focused fieldset {
      border-color: white;
    }
 }
 .MuiInputBase-root{
     color: #ececec;
     font-family: 'Montserrat', sans-serif;
 }



`
