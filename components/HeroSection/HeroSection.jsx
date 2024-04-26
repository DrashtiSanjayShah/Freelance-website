import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Style from "./HeroSection.module.css";
import { Button } from "../compindex";
import hero1 from "../../images/hero1.png";

// SMART CONTRACT IMPORT
// import{nftMarketContext} from '../../Context/nftMarketContext';

const HeroSection = () => {
  // const {titleData} = useContext(nftMarketContext);
  return (
    <div className={Style.HeroSection}>
      <div className={Style.heroSection_box}>
        <div className={Style.heroSection_box_left}>
          <h1>Find the perfect freelance service, right away</h1>
          {/* <p>
            Explore the world of NFTs and discover the best NFTs on the market.
          </p> */}
          <Button btnName="Start your search" />
        </div>
        <div className={Style.heroSection_box_right}>
          <Image src={hero1} alt="hero section" width={802} height={550} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
