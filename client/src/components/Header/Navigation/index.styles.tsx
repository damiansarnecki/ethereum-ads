import styled from "styled-components";

export const StyledNavigation = styled.div`
    display: flex;
    gap: 25px;
    text-transform: uppercase;
    font-family: quicksand;
    padding-right: 40px;
    font-size: 13px;
    color: #989898;
    font-weight: bold;
    border-right: 1px solid #ddd;

   
`;

export const StyledNavItem = styled.a`
    text-decoration: none;
    cursor: pointer;

    :nth-child(1) {
        color: #222;;
    }

    :hover {
        color: #222;
    }
`;