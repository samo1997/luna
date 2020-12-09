import styled from 'styled-components';
import { theme } from './index';
import {StandardButton} from "./Buttons";



export const LoginContainer = styled.div`
    height: calc(100vh - 73px - 92px);
    //height: 100%;
    width: 100vw;
    background-color: #F2F2F2;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow: auto;
`

export const TitleContainer = styled.div`
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 45px;
    padding-bottom: 16px;
    border-bottom: 3px solid ${theme.colorPrimaryOrange};
`

export const LoginTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    font-family: Helvetica;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0px;
    text-align: center;
    text-transform: uppercase;  
    color: ${theme.colorTitleBlack};
`

export const FormContainer = styled.form`
    padding-top: 45px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
`

export const FormUsername = styled.input`
    font-family: Helvetica;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 23px;
    letter-spacing: 0px;
    text-align: left;width: 340px;
    color: ${theme.colorIconGrey};
    height: 52px;
    border-radius: 3px;
    background: #ffffff;
    border: 1px solid #EBEBEB;
    display: flex;
    align-items: center;
    padding-left: 23px;
    :focus {
        background-color: ${theme.colorInputFieldFocusBackground};
        outline: none;
    };
`

export const FormPassword = styled.input`
    font-family: Helvetica;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 23px;
    letter-spacing: 0px;
    text-align: left;
    color: ${theme.colorIconGrey};
    width: 340px;
    height: 52px;
    border-radius: 3px;
    background: #ffffff;
    border: 1px solid #EBEBEB;
    display: flex;
    align-items: center;
    padding-left: 23px;
    :focus {
        background-color: ${theme.colorInputFieldFocusBackground};
        outline: none;
    };
`

export const FormBtn = styled(StandardButton)`
    margin-top: 30px;
`

