
import { useEffect, useState } from "react"
import config from "../../config";
import { StyledAdHeader, StyledAdList, StyledAdPlace, StyledLoadingBar, StyledLoadingBarWrapper } from "./index.styles"
import Web3 from "web3";
import { Ad } from "../Ad";

const AdvertistementData = require("../../Advertisement.json");

interface Ad {
    index: number,
    spot: number,
    hour: number,
    text: string
}

export const AdList = () => {

    const [ads, setAds] = useState<Ad[]>([])

    const web3 = new Web3(Web3.givenProvider); 
    const contract = new web3.eth.Contract(AdvertistementData["abi"], AdvertistementData["address"]);

    const [currentSeconds, setCurrentSeconds] = useState(0);

    useEffect(() => {
        (async () => {
            const ads = await contract.methods.getAdsForHour(new Date().getHours()).call();
            
            const fetchedAds = []

            for(let index of ads) {
                const ad = await contract.methods.getAd(index).call();
                fetchedAds.push(ad);
            }
            
            setAds(fetchedAds)
            
        })()
    }, [])

    useEffect(() => { 
        const interval = setInterval(() => {
            const time = new Date();
            setCurrentSeconds(time.getSeconds() + time.getMinutes()*60)
        }, 1000)
          
        return function cleanup() {
            clearInterval(interval);
        };
    }, [])

    

    const checkOwner = async (adIndex : number) => {
        console.log(contract.methods)
        let x = await contract.methods.getAdOwner(321321).call({});
        alert(x)
    }
    
    contract.methods.getAd(0).call()

    const getAdBySpot = (spot : number) =>  {
        return ads.filter((ad) => {return ad.spot == spot})[0];
    }

    return (
        <StyledAdList>
            <StyledLoadingBarWrapper>
                <StyledLoadingBar currentSeconds={currentSeconds}/>
            </StyledLoadingBarWrapper>
            <StyledAdPlace>
                {getAdBySpot(0) && 
                    <Ad
                        index={getAdBySpot(0).index}
                        text={getAdBySpot(0).text}
                        contract={contract}
                    />
                }
            </StyledAdPlace>
            <StyledAdPlace>
                {getAdBySpot(1) && 
                    <Ad
                        index={getAdBySpot(1).index}
                        text={getAdBySpot(1).text}
                        contract={contract}
                    />
                }
            </StyledAdPlace>
            <StyledAdPlace>
                {getAdBySpot(2) && 
                    <Ad
                        index={getAdBySpot(2).index}
                        text={getAdBySpot(2).text}
                        contract={contract}
                    />
                }
            </StyledAdPlace>
        </StyledAdList>
    )
}