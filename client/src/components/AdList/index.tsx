
import { useEffect, useState } from "react"
import config from "../../config";
import { StyledAdList } from "./index.styles"
import Web3 from "web3";

const AdvertistementData = require("../../Advertisement.json");

export const AdList = () => {

    const [ads, setAds] = useState([])

    useEffect(() => {
        (async () => {
            const web3 = new Web3(Web3.givenProvider); 
            const contract = new web3.eth.Contract(AdvertistementData["abi"], AdvertistementData["address"]);

            const ads = await contract.methods.getAds().call();
            setAds(ads)

        })()
    }, [])

    return (
        <StyledAdList>
            {
                ads.map((ad) => {
                    return <div>
                        {ad}
                    </div>
                })
            }
        </StyledAdList>
    )
}