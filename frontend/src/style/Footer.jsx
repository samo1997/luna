import styled from "styled-components";
import {theme} from "./index";



export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
`

export const FooterNavigation = styled.div`
    height: 55px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    
`

export const FooterLeft = styled.div`

`

export const FooterBtn = styled.div`
    padding-left: 30px;
    gap: 2vw;
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const AboutBtn = styled.div`
    white-space: nowrap;
    height: 56px;
    display: flex;
    align-items: center;
    font-size: 2rem;
    border-bottom: 3px solid ${theme.colorTextWhite};
    :hover {
      border-bottom: 3px solid ${theme.colorPrimaryOrange}
    };
`

export const PressBtn = styled.div`
    height: 56px;
    display: flex;
    align-items: center;
    font-size: 2rem;
    border-bottom: 3px solid ${theme.colorTextWhite};
    :hover {
      border-bottom: 3px solid ${theme.colorPrimaryOrange}
    };
`

export const BlogBtn = styled.div`
    height: 56px;
    display: flex;
    align-items: center;
    font-size: 2rem;
    border-bottom: 3px solid ${theme.colorTextWhite};
    :hover {
      border-bottom: 3px solid ${theme.colorPrimaryOrange}
    };
`

export const IosBtn = styled.div`
    height: 56px;
    display: flex;
    align-items: center;
    font-size: 2rem;
    border-bottom: 3px solid ${theme.colorTextWhite};
    :hover {
      border-bottom: 3px solid ${theme.colorPrimaryOrange}
    };
`

export const AndroidBtn = styled.div`
    height: 56px;
    display: flex;
    align-items: center;
    font-size: 2rem;
    border-bottom: 3px solid ${theme.colorTextWhite};
    :hover {
      border-bottom: 3px solid ${theme.colorPrimaryOrange}
    };
`

export const FooterRight = styled.div`

`

export const FooterIcons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding-right: 30px;
    gap: 22px;
`

export const IconFB = styled.a`
    height: 40px;
    width: 40px;
`

export const IconTW = styled.a`
    height: 40px;
    width: 40px;
`

export const IconGooglePlus = styled.a`
    height: 40px;
    width: 40px;
`

export const IconIN = styled.a`
    height: 40px;
    width: 40px;
`

export const Copyright = styled.div`
    height: 36px;
    border-top: 1px solid ${theme.colorPrimaryGrey};
    padding-left: 30px;
    display: flex;
    align-items: center;
    p {
        font-size: 1.2rem;
    }
`
