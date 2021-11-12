import { ConnectWallet } from "./ConnectWallet";
import { StyledCenterWrapper, StyledHeader, StyledHeaderGroup, StyledLogo, StyledLogoIcon } from "./index.styles";
import Navigation from "./Navigation";

const Header = () => {

    
    return (
        <StyledHeader>
            <StyledCenterWrapper>
                <StyledLogo>
                    <StyledLogoIcon src="/assets/ethereum.svg"/>
                    <span>ETHEREUM</span>ADS
                </StyledLogo>
                <StyledHeaderGroup>
                    <Navigation/>
                    <ConnectWallet/>
                </StyledHeaderGroup>
            </StyledCenterWrapper>
        </StyledHeader>
    )
}

export default Header;