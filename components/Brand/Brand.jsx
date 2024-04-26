import React from "react";
import Style from "./Brand.module.css";
import Image from "next/image";
import { Button } from "../compindex";
import logo from "../../images/logo.jpg"; 
import cbg1 from "../../images/cbg1.jpg";
const Brand = () => {
  return (
    <div className={Style.Brand}>
      <div className={Style.Brand_box}>
        <div className={Style.Brand_box_left}>
          <Image src={logo} alt="brand logo" width={100} height={100} />
          <h1>Earn without working in a company</h1>
          <p>A creative agency that lead and inspire</p>
          <div className={Style.Brand_box_left_btn}>
            <Button btnName='Create' handleClick={() => {}} />
            <Button btnName='Discover' handleClick={() => {}} />
          </div>
        </div>
        <div className={Style.Brand_box_right}>
            <Image src={cbg1} alt='brand logo' width={800} height={600} />
        </div>
      </div>
    </div>
  );
};

export default Brand;
