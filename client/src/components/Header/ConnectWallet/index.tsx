import { useContext, useState } from "react";
import { AccountContext } from "../../AccountContext";
import { StyledAddress, StyledBalance, StyledConnectWallet } from "./index.styles"

import Web3 from "web3";
import utils from "web3-utils";

export const ConnectWallet = () => {

    const {account, setAccount} = useContext(AccountContext);

    const [balance, setBalance] = useState(0);

    const handleConnection = async () => {

        let ethereum;

        if (typeof (window as any).ethereum !== 'undefined') {
            ethereum = (window as any).ethereum;

            const web3 = new Web3(Web3.givenProvider)

            //get account
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            setAccount(accounts[0]);

            //read balance
            setBalance(Number(utils.fromWei(await web3.eth.getBalance(accounts[0]), "ether")))
        }
    }

    

    const logOut = () => {
        setAccount("")
    }
    
    const handleConnectButton = () => {
        account == "" ? handleConnection() : logOut();
    }
    
    const shortenAddress = (address : string) => {
        return address.slice(0,6) + "..." + address.slice(36,42);
    } 

    return (
        <StyledConnectWallet 
            onClick={() => handleConnectButton()}
            connected={account != ""}
        >
            {account != "" &&
                <>
                    <StyledAddress>{shortenAddress(account)}</StyledAddress>
                    <StyledBalance>{balance} ADT</StyledBalance>
                </>
            }
            {account == "" &&
                 "CONNECT"
            }   
        </StyledConnectWallet>
    )
}