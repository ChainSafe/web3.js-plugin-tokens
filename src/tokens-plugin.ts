import { Web3PluginBase, Contract } from "web3";

import IERC20 from "./artifacts/IERC20";
import IERC20Metadata from "./artifacts/IERC20Metadata";
import IERC721 from "./artifacts/IERC721";
import IERC721Metadata from "./artifacts/IERC721Metadata";
import IERC777 from "./artifacts/IERC777";
import IERC1155 from "./artifacts/IERC1155";
import IERC1155MetadataURI from "./artifacts/IERC1155MetadataURI";
import IERC4626 from "./artifacts/IERC4626";

const IERC20WithMetadata = [...IERC20, ...IERC20Metadata];
const IERC721WithMetadata = [...IERC721, ...IERC721Metadata];
const IERC1155WithMetadata = [...IERC1155, ...IERC1155MetadataURI];
export class TokensPlugin extends Web3PluginBase {
  public pluginNamespace = "tokens";

  public erc20(address: string): Contract<typeof IERC20WithMetadata> {
    const erc20Contract = new Contract(IERC20WithMetadata, address);
    erc20Contract.link(this);
    return erc20Contract;
  }

  public erc721(address: string): Contract<typeof IERC721WithMetadata> {
    const erc721Contract = new Contract(IERC721WithMetadata, address);
    erc721Contract.link(this);
    return erc721Contract;
  }

  public erc777(address: string): Contract<typeof IERC777> {
    const erc777Contract = new Contract(IERC777, address);
    erc777Contract.link(this);
    return erc777Contract;
  }

  public erc1155(address: string): Contract<typeof IERC1155WithMetadata> {
    const erc1155Contract = new Contract(IERC1155WithMetadata, address);
    erc1155Contract.link(this);
    return erc1155Contract;
  }

  public erc4626(address: string): Contract<typeof IERC4626> {
    const erc4626Contract = new Contract(IERC4626, address);
    erc4626Contract.link(this);
    return erc4626Contract;
  }
}

// Module Augmentation
declare module "web3" {
  interface Web3Context {
    tokens: TokensPlugin;
  }
}
