import React, { useState, useEffect, useContext } from "react";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import Router from "next/router";
import axios from "axios";
import { create as ipfsHttpClient } from "ipfs-http-client";
import { nftMarketABI, nftMarketAddress } from "./constants";
// --FETCHING SMART CONTRACT

const fetchContract = (signerOrProvider) =>
  new ethers.Contract(nftMarketABI, nftMarketAddress, signerOrProvider);

// COONECTING WITH SMART CONTRACT

const connectingWithSmartContract = async () => {
  try {
    const web3Modal = new Web3Modal();
    const connection = await Web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = fetchContract(signer);
    return contract;
  } catch (error) {
    console.log("Something is wrong");
  }
};

export const nftMarketContext = React.createContext();
export const nftMarketProvider = ({ children }) => {
  const titleData = "Find the perfect freelance service, right away";

  const checkContract = async () => {
  
    const contract = await connectingWithSmartContract();
  console.log(contract);
  };
  return (
    <nftMarketContext.Provider value={{ titleData, checkContract }}>
      {children}
    </nftMarketContext.Provider>
  );
};
