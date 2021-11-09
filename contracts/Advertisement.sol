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

    function createAd(uint16 _day, uint16 _spot, string memory _text) internal onlyOwner {
        ads.push(Ad(_day, _spot, _text));
        uint id = ads.length - 1;
        adToOwner[id] = msg.sender;
        ownerAdCount[msg.sender]++;

    }

    uint public x = 5;


}

