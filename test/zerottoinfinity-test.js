const { expect } = require("chai");
const { assert } = require("hardhat");

const {BN, constants, expectEvent, expectRevert} = require('@openzeppelin/test-helpers');
const { soliditySha3 } = require("web3-utils");

const ZeroToInfinity = artifacts.require("ZeroToInfinity");

let accounts;
let zeroToInfinity;
let owner;
let operator;
let minter;
let unknown;

// Vanilla Mocha test. Increased compatibility with tools that integrate Mocha.
describe("ZeroToInfinity Contract", function () {

	before(async function() {
		accounts = await web3.eth.getAccounts();
		owner = accounts[0];
		operator = accounts[1];
		minter = accounts[2];
    unknown = accounts[3];
		zeroToInfinity = await ZeroToInfinity.new("Zero To Infinity", "ZTI", "");
	});
	
	it("Should return the right name and symbol of the token once Creatify is deployed", async function() {
		assert.equal(await zeroToInfinity.name(), "Zero To Infinity");
		assert.equal(await zeroToInfinity.symbol(), "ZTI");
	});
});
