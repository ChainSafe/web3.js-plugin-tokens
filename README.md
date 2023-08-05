@chainsafe/web3-plugin-tokens
===========

> Many thanks to [PeterTheOne](https://github.com/PeterTheOne) for developing initial version at EthPrague.

is a plugin that extends web3.js with additional methods to interact with common token interfaces (ERC20, ERC721, ERC1155...)

Uses `@openzeppelin/contracts` as a source of contract abi files and does contract type inference like <https://github.com/web3/web3-contract-types-example>.


how to use it
-------------

Run `npm install web3 @chainsafe/web3-plugin-tokens`.

```typescript

import { Web3 } from 'web3';
import { TokensPlugin } from '@chainsafe/web3-plugin-tokens';

const web3 = new Web3('https://eth.public-rpc.com'); // put any node url that is connected to mainnet
web3.registerPlugin(new TokensPlugin());

const daiAddress = '0x6b175474e89094c44da98b954eedeac495271d0f';
const vitalikEth = '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045';
const erc20Contract = await web3.tokens.erc20(daiAddress);

const balance = await erc20Contract.methods.balanceOf(vitalikEth).call();

console.log(balance);
```

how to test
-----------

Run `npm run test`.


how to add more contracts
-------------------------

Add them to `artifacts.json` and run `npm run gen`.

Then update the `tokens-plugin.ts`.

Contributing
------------

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

License
-------

[MIT](https://choosealicense.com/licenses/mit/)
