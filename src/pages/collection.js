import React from "react";

//INTERNAL IMPORT
import Style from "../styles/collection.module.css";
import nft_image_1 from "../../images/nft_image_1.jpg";
import nft_image_2 from "../../images/nft_image_2.jpg";
import nft_image_3 from "../../images/nft_image_3.jpg";
import nft_image_4 from "../../images/nft_image_4.jpg";
import cbg1 from "../../images/cbg1.webp";
import {
  Banner,
  CollectionProfile,
  NFTCardTwo,
} from "../../collectionPage/collectionIndex";
import { Slider, Brand } from "../../components/compindex";
import { Filter } from "../../components/compindex";

const collection = () => {
  const collectionArray = [
    nft_image_1,
    nft_image_2,
    nft_image_3,
    nft_image_4,
    nft_image_1,
    nft_image_2,
    nft_image_3,
    nft_image_4,
    nft_image_1,
    nft_image_2,
  ];
  return (
    <div className={Style.collection}>
      <Banner bannerImage={cbg1} />
      <CollectionProfile />
      <Filter />
      <NFTCardTwo NFTData={collectionArray} />
      <Slider />
      <Brand />
    </div>
  );
};

export default collection;
