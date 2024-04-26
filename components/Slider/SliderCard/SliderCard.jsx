import React from "react";
import Style from "./SliderCard.module.css";
import { motion } from "framer-motion";
import LikeProfile from "../../LikeProfile/LikeProfile";
import cbg1 from "../../../images/cbg1.webp";
import Image from "next/image";
// STOPPED AT 8:09:18
const SliderCard = () => {
  return (
    <motion.div className={Style.sliderCard}>
      <div className={Style.sliderCard_box}>
        <motion.div className={Style.sliderCard_box_img}>
          <Image className={Style.sliderCard_box_img_img}
            src={cbg1}
            alt="slider picture"
            width={350}
            height={350}
            objectFit="cover"
          />
        </motion.div>
        <div className={Style.sliderCard_box_title}>
          <p>PROJECT #12542</p>
          <div className={Style.sliderCard_box_title_like}>
            {/* <LikeProfile /> */}
            <small>1 of 100</small>
          </div>
        </div>
        <div className={Style.sliderCard_box_price}>
          <div className={Style.sliderCard_box_price_box}>
            <small>Current Bid</small>
            <p>1.000 ETH</p>
          </div>
          <div className={Style.sliderCard_box_price_time}>
            <small>Remaining time</small>
            <p>3h : 17m : 45s</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SliderCard;
