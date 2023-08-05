import Web3, { Web3Eth, core } from "web3";
import { TokensPlugin } from "../src/tokens-plugin";

describe("TokensPlugin Tests", () => {
  it("should register TokensPlugin plugin on Web3Context instance", () => {
    const web3Context = new core.Web3Context("http://127.0.0.1:8545");
    web3Context.registerPlugin(new TokensPlugin());
    expect(web3Context.tokens).toBeDefined();
  });

  it("should register TokensPlugin plugin on Web3Eth instance", () => {
    const web3Eth = new Web3Eth("http://127.0.0.1:8545");
    web3Eth.registerPlugin(new TokensPlugin());
    expect(web3Eth.tokens).toBeDefined();
  });

  describe("TokensPlugin method tests", () => {
    const requestManagerSendSpy = jest.fn();

    let web3Context: Web3;

    beforeAll(() => {
      web3Context = new Web3("http://127.0.0.1:8545");
      web3Context.registerPlugin(new TokensPlugin());
      web3Context.tokens.requestManager.send = requestManagerSendSpy;
    });

    it("should call TokensPlugin ERC20 Contract balanceOf with expected RPC object", async () => {
      const daiAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
      const vitalikEth = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045";
      const erc20Contract = web3Context.tokens.erc20(daiAddress);
      await erc20Contract.methods.balanceOf(vitalikEth).call();
      expect(requestManagerSendSpy).toHaveBeenLastCalledWith({
        method: "eth_call",
        params: [
          {
            data: "0x70a08231000000000000000000000000d8da6bf26964af9d7eed9e03e53415d37aa96045",
            input:
              "0x70a08231000000000000000000000000d8da6bf26964af9d7eed9e03e53415d37aa96045",
            to: daiAddress,
          },
          "latest",
        ],
      });
    });

    it("should call TokensPlugin ERC721 Contract balanceOf with expected RPC object", async () => {
      const daiAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
      const vitalikEth = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045";
      const erc721Contract = web3Context.tokens.erc721(daiAddress);
      await erc721Contract.methods.balanceOf(vitalikEth).call();
      expect(requestManagerSendSpy).toHaveBeenLastCalledWith({
        method: "eth_call",
        params: [
          {
            data: "0x70a08231000000000000000000000000d8da6bf26964af9d7eed9e03e53415d37aa96045",
            input:
              "0x70a08231000000000000000000000000d8da6bf26964af9d7eed9e03e53415d37aa96045",
            to: daiAddress,
          },
          "latest",
        ],
      });
    });

    it("should call TokensPlugin ERC1155 Contract balanceOf with expected RPC object", async () => {
      const daiAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
      const vitalikEth = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045";
      const erc1155Contract = web3Context.tokens.erc1155(daiAddress);
      await erc1155Contract.methods.balanceOf(vitalikEth, 1).call();
      expect(requestManagerSendSpy).toHaveBeenLastCalledWith({
        method: "eth_call",
        params: [
          {
            data: "0x00fdd58e000000000000000000000000d8da6bf26964af9d7eed9e03e53415d37aa960450000000000000000000000000000000000000000000000000000000000000001",
            input:
              "0x00fdd58e000000000000000000000000d8da6bf26964af9d7eed9e03e53415d37aa960450000000000000000000000000000000000000000000000000000000000000001",
            to: daiAddress,
          },
          "latest",
        ],
      });
    });

    it("should call TokensPlugin ERC4626 Contract balanceOf with expected RPC object", async () => {
      const daiAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
      const vitalikEth = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045";
      const erc4626Contract = web3Context.tokens.erc4626(daiAddress);
      await erc4626Contract.methods.balanceOf(vitalikEth).call();
      expect(requestManagerSendSpy).toHaveBeenLastCalledWith({
        method: "eth_call",
        params: [
          {
            data: "0x70a08231000000000000000000000000d8da6bf26964af9d7eed9e03e53415d37aa96045",
            input:
              "0x70a08231000000000000000000000000d8da6bf26964af9d7eed9e03e53415d37aa96045",
            to: daiAddress,
          },
          "latest",
        ],
      });
    });

    it("should call TokensPlugin IERC20 Contract balanceOf with expected RPC object", async () => {
      const daiAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
      const vitalikEth = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045";
      const ierc20Contract = web3Context.tokens.erc20(daiAddress);
      await ierc20Contract.methods.balanceOf(vitalikEth).call();
      expect(requestManagerSendSpy).toHaveBeenLastCalledWith({
        method: "eth_call",
        params: [
          {
            data: "0x70a08231000000000000000000000000d8da6bf26964af9d7eed9e03e53415d37aa96045",
            input:
              "0x70a08231000000000000000000000000d8da6bf26964af9d7eed9e03e53415d37aa96045",
            to: daiAddress,
          },
          "latest",
        ],
      });
    });

    it("should call TokensPlugin IERC721 Contract balanceOf with expected RPC object", async () => {
      const daiAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
      const vitalikEth = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045";
      const ierc721Contract = web3Context.tokens.erc721(daiAddress);
      await ierc721Contract.methods.balanceOf(vitalikEth).call();
      expect(requestManagerSendSpy).toHaveBeenLastCalledWith({
        method: "eth_call",
        params: [
          {
            data: "0x70a08231000000000000000000000000d8da6bf26964af9d7eed9e03e53415d37aa96045",
            input:
              "0x70a08231000000000000000000000000d8da6bf26964af9d7eed9e03e53415d37aa96045",
            to: daiAddress,
          },
          "latest",
        ],
      });
    });

    it("should call TokensPlugin IERC1155 Contract balanceOf with expected RPC object", async () => {
      const daiAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
      const vitalikEth = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045";
      const ierc1155Contract = web3Context.tokens.erc1155(daiAddress);
      await ierc1155Contract.methods.balanceOf(vitalikEth, 1).call();
      expect(requestManagerSendSpy).toHaveBeenLastCalledWith({
        method: "eth_call",
        params: [
          {
            data: "0x00fdd58e000000000000000000000000d8da6bf26964af9d7eed9e03e53415d37aa960450000000000000000000000000000000000000000000000000000000000000001",
            input:
              "0x00fdd58e000000000000000000000000d8da6bf26964af9d7eed9e03e53415d37aa960450000000000000000000000000000000000000000000000000000000000000001",
            to: daiAddress,
          },
          "latest",
        ],
      });
    });

    it("should call TokensPlugin IERC4626 Contract balanceOf with expected RPC object", async () => {
      const daiAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
      const vitalikEth = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045";
      const ierc4626Contract = web3Context.tokens.erc4626(daiAddress);
      await ierc4626Contract.methods.balanceOf(vitalikEth).call();
      expect(requestManagerSendSpy).toHaveBeenLastCalledWith({
        method: "eth_call",
        params: [
          {
            data: "0x70a08231000000000000000000000000d8da6bf26964af9d7eed9e03e53415d37aa96045",
            input:
              "0x70a08231000000000000000000000000d8da6bf26964af9d7eed9e03e53415d37aa96045",
            to: daiAddress,
          },
          "latest",
        ],
      });
    });
  });
});
