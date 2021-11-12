import styled from "styled-components";

export const StyledConnectWallet = styled.div<({connected: boolean})>`
    height: 40px;
    width: 140px;
    background-color: ${props => props.connected ? "transparent" : "gray"};
    color: ${props => props.connected ? "#222" : "white"};
    border-radius: 4px;
    text-transform: uppercase;
    font-family: quicksand;
    display: flex;
    justify-content: center;
    flex-direction: column;

    font-weight: bold;

    font-size: 14px;
    cursor: ${props => props.connected ? "default" : "pointer"};

    :hover {
        opacity: ${props => props.connected ? "1" : "0.7"};
    }
`;



export const StyledAddress = styled.div``;
export const StyledBalance = styled.div`
    color: rgb(114, 114, 114);
    font-size: 14px;
    font-weight: normal;
`;