//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "./Ownable.sol";


import "hardhat/console.sol";

contract Advertisement is Ownable { 

    struct Ad {
        uint16 day;
        uint16 spot;
        string text;
    }

    Ad[] public ads;

    mapping(uint => address) public adToOwner;
    mapping(address => uint) public ownerAdCount;

    constructor() {
        for(uint16 i = 0; i < 10; i++) {
            _createAd(i, 1, "Buy your ad");
        }
    }

    function _createAd(uint16 _day, uint16 _spot, string memory _text) internal {
        ads.push(Ad(_day, _spot, _text));
        uint id = ads.length - 1;
        adToOwner[id] = msg.sender;
        ownerAdCount[msg.sender]++;
    }

    function getUserAds(address user) public view returns (uint[] memory) {
        uint[] memory result = new uint[](ownerAdCount[user]);
        uint counter = 0;
        for(uint i = 0; i < ads.length ; i++) {
            if(adToOwner[i] == user) {
                result[counter] = i;
                counter++;
            }
        }

        return result;
    }

    function getAds() public view returns(Ad[] memory) {
        return ads;
    }

    modifier isAdOwner(uint _index) {
        require(msg.sender == adToOwner[_index], "You are not ad owner");
        _;
    }

    function editAdText(uint _index, string memory _text) public isAdOwner(_index) {
        ads[_index].text = _text;
    }

}

