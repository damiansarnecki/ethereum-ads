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
  })

  describe('Adding ads', () => {

    it('Adds new advertisement', async () => {
      await advertisement.createAd(1,2,"test");
      expect((await advertisement.getAds()).length).to.equal(1);
    })

    it('Sets values correctly', async () => {
      await advertisement.createAd(2,3,"test text");
      expect((await advertisement.getAds())[0].day).to.equal(2); //day
      expect((await advertisement.getAds())[0].spot).to.equal(3); //spot
      expect((await advertisement.getAds())[0].text).to.equal("test text"); //text
    })
  })

  describe('Editing ads', () => {
    it('prevents editing if not owner', async () => {
      await advertisement.createAd(2,3,"test text");
      await advertisement.editAdText(0, "essa");
      expect((await advertisement.getAds())[0].text).to.equal("essa");
    })
  })

});
