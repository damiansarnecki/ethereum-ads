import styled from "styled-components";


export const StyledAdList = styled.div`
    padding: 20px;  
    display: grid;
    grid-template-rows: auto 200px 200px 200px;

    gap: 20px;
    margin: 20px auto;
    width: 800px;
    margin-bottom: 20px;

`;

export const StyledAdHeader = styled.h2`
    font-family: quicksand;
    font-size: 36px;
`;

export const StyledLoadingBarWrapper = styled.div`
    height: 15px;
    background-color: #d3d3d3;
    border-radius: 10px;
    position: relative;
    overflow: hidden;


`;

const secondsInHour = 60*60;

export const StyledLoadingBar = styled.div<({currentSeconds : number})>`
    height: 100%;
    background-color: #747474;
    width: calc(100% * ${props => props.currentSeconds/(secondsInHour)});
    position: relative;

`;

export const StyledAdPlace = styled.div`
    border: 1px solid #c9c9c9;
    border-radius: 5px;
    display: grid;
    overflow: hidden;
    color: white;
`;

