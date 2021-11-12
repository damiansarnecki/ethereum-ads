import { FC } from "react"
import { StyledAd } from "./index.styles"

interface AdProps {
    index: number,
    text: string,
    contract: any
}

export const Ad: FC<AdProps>= ({
    index,
    text,
    contract
}) => {

    const showOwner = async () => {
        alert(`Owner is: ${await contract.methods.getAdOwner(index).call()}`)
    }

    return (
        <StyledAd onClick={showOwner}>
            {index}
        </StyledAd>
    )
}