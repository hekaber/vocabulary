import styled from "styled-components";

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
}
`;

export const ListItemContainer = styled.div`
    height: 100px;
    text-align: left;
    padding: 0.1rem;
    border: solid 0.1rem #000000;
    margin: 0.5rem 0;
    font-size: 2em;
`;

export const Header = styled.div`
    width: 100%;
    font-size: 2em;
    line-height: 3em;
    padding: 1rem;
`;
