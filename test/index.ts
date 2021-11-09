import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Advertisement", () => {

  let Advertisement : any
  let advertisement : any;
  let owner : SignerWithAddress, 
  userOne : SignerWithAddress, 
  userTwo : SignerWithAddress;

  beforeEach(async () => {
    Advertisement = await ethers.getContractFactory("Advertisement");
    advertisement = await Advertisement.deploy()

    let signers = await ethers.getSigners();
    owner = signers[0];
    userOne = signers[1];
    userTwo = signers[2];

  })

  describe('Deployment', () => {
    it('Sets correct owner', async () => {
      expect(await advertisement.owner()).to.equal(owner.address);
    })
  })

});
