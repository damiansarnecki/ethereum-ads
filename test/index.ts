import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Advertisement", () => {

  let Advertisement : any
  let advertisement : any
  let owner : SignerWithAddress
  let userOne : SignerWithAddress 
  let userTwo : SignerWithAddress

  beforeEach(async () => {
    Advertisement = await ethers.getContractFactory("Advertisement");
    advertisement = await Advertisement.deploy()
    await advertisement.deployed();

    let signers = await ethers.getSigners();
    owner = signers[0];
    userOne = signers[1];
    userTwo = signers[2];

  })

  describe('Deployment', () => {
    it('Sets correct owner', async () => {
      expect(await advertisement.owner()).to.equal(owner.address);
    })
    it('Creates ads at deploy', async() => {
      expect((await advertisement.getAds()).length).to.equal(10);
    })
    it('Gives created ads to contract creator', async() => {
      expect((await advertisement.getUserAds(owner.address)).length).to.be.equal(10);
    })
  })

  describe('Adding ads', () => {
    it('Sets values correctly', async () => {
      expect((await advertisement.getAds())[0].day).to.equal(0); //day
      expect((await advertisement.getAds())[0].spot).to.equal(1); //spot
      expect((await advertisement.getAds())[0].text).to.equal("Buy your ad"); //text
    })
  })

  describe('Editing ads', () => {
    it('lets owner edit ad text', async () => {
      await advertisement.editAdText(0, "essa");
      expect((await advertisement.getAds())[0].text).to.equal("essa");
    })

    it('prevents from editing if not owner', async () => {
      await expect(advertisement.connect(userOne).editAdText(0, "essa")).to.be.revertedWith("You are not ad owner");
    })
  })

});
