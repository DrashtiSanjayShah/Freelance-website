import React from "react";
import Style from "../styles/searchPage.module.css";
import { Slider, Brand } from "../../components/compindex";
import { SearchBar } from "../../SearchPage/searchBarindex";
import {Filter} from "../../components/compindex";
import { Banner } from "../../collectionPage/collectionIndex";
import cbg1 from '../../images/cbg1.webp'; 
const searchPage = () => {
  return (
    <div className={Style.searchpage}>
      <Banner bannerImage={cbg1} />
      <SearchBar />
      <Filter />
      {/* <NFTCardTwo /> */}
      <Slider />
      <Brand />
     
    </div>
  );
};

export default searchPage;
