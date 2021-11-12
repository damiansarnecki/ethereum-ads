import styled from "styled-components";

export const StyledHeader = styled.div`
    padding: 20px;
    color: white;
    border-bottom: 1px solid #ddd;

   

`;

export const StyledCenterWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 800px;
    margin: 0 auto;
`;

export const StyledHeaderGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
`;

export const StyledLogo = styled.div`
    color: #a4a4a4;
    letter-spacing: 0px;
    font-size: 22px;
    font-family: quicksand;
    transform: translate(-25px);
    display: flex;
    align-items: center;
    > span {
        font-weight: bold;
        color: #787878;
    }
`;

export const StyledLogoIcon = styled.img`
    width: 70px;
    opacity: 0.7;
`;