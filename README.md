# zerotoinfinity
Smart Contract for the Zero To Infinity project

Important tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
npx hardhat help
REPORT_GAS=true npx hardhat test
npx hardhat coverage
npx hardhat run scripts/zerotoinfinity-deploy.js --network maticmum
npx hardhat run scripts/zerotioinfinity-deploy.js
node scripts/zerotioinfinity-deploy.js
npx eslint '**/*.js'
npx eslint '**/*.js' --fix
npx prettier '**/*.{json,sol,md}' --check
npx prettier '**/*.{json,sol,md}' --write
npx solhint 'contracts/**/*.sol'
npx solhint 'contracts/**/*.sol' --fix
```

# PolygonScan verification

To try out PolygonScan verification, you first need to deploy a contract to an Ethereum network that's supported by PolygonScan, such as Polygon Testnet.

In this project, copy the .env.template file to a file named .env, and then edit it to fill in the details. Enter your PolygonScan API key, your Polygon Tetsnet node URL (eg from Alchemy), and the private key of the account which will send the deployment transaction. With a valid .env file in place, first deploy your contract:

```shell
hardhat run --network maticmum scripts/zerotioinfinity-deploy.js
```

Then, copy the deployment address and paste it in to replace `DEPLOYED_CONTRACT_ADDRESS` in this command:

```shell
npx hardhat verify --network maticmum 0x26DF943610e5ced72e6D4EBe27B48F9e053cc744 --constructor-args zerotoinfinity-arguments.js
```

Check out the verified contract 
- ZeroToInfinity - `https://mumbai.polygonscan.com/address/0x26DF943610e5ced72e6D4EBe27B48F9e053cc744#code`