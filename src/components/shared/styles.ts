import styled from "styled-components";

export const FillerContainer = styled.div`
    width: 100%;
    height: 100%;
`;

export const ActionButton = styled.a`
    position: absolute;
    top: 3px;
    right: 3px;
    width: 60px;
    height: 60px;
    cursor: pointer;
    color: #000000;
    border-radius: 3px;
    padding: 0.5rem;
    &:hover {
        background-color: rgba(9,30,66,.08);
    }
    & > svg {
        width: 100%;
        height: 100%;
    }
`;

export const LargeButtonContainer = styled.a`
    display: block;
    width: 100%;
    cursor: pointer;
    padding: 0.5rem;
    color: white;
    font-size: 2em;
    background-color: lightgreen;
    &:hover {
        background-color: rgba(9,30,66,.08);
    }
`;

export const ListContainer = styled.div`
    width: 95%;
    margin: 10px auto;
    max-height: 75vh;
    overflow-y: scroll;
    scrollbar-width: none;
    &::-webkit-scrollbar { 
        display: none;
    }
`;

const LineContainer = styled.div`
    text-align: left;
    padding: 0.1rem;
    margin: 0.5rem 0;
`;

export const ListItemContainer = styled(LineContainer)`
    height: 100px;
    border: solid 0.1rem #000000;
    font-size: 2em;
`;

interface FormContainerProps {
    isHidden?: boolean;
}

export const FormContainer = styled.div<FormContainerProps>`
    position: fixed;
    transform: translateY(${props => (props.isHidden ? "0" : "-100vh")});
    width: 100vw;
    height: 100vh;
    background-color: #FFFFFF;
    transition: transform .5s;
    z-index: 100;
`;

export const Form = styled.form`
    & > h1 {
        margin: 1em 0;
    }
`;

export const FormLine = styled(LineContainer)`
    width: 100%;
    height: 50px;
    & > span {
        width: 15%;
        display: inline-block;
    }
    & > input {
        width: 70%;
    }
`;

export const Header = styled.div`
    width: 100%;
    font-size: 2em;
    line-height: 3em;
    padding: 1rem;
`;
