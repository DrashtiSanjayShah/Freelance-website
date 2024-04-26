import React from "react";
import Image from "next/image";
import { Mdverified } from "react-icons/md";
import Style from "./DaysComponents.module.css";
import cbg1 from "../../../images/cbg1.jpg";
import user1 from "../../../images/user1.jpg";
import hero from "../../../images/hero.jpg";

export const DaysComponents = () => {
  return (
    <div className={Style.daysComponents}>
      <div className={Style.daysComponents_box}>
        <div className={Style.daysComponents_box_img}>
          <Image
            src={cbg1}
            className={Style.daysComponents_box_img_img}
            alt="profile background"
            width={500}
            height={300}
            objectFit="covers"
          />
        </div>

        <div className={Style.daysComponents_box_profile}>
          <Image
            src={hero}
            alt="profile"
            width={200}
            height={200}
            className={Style.daysComponents_box_img_1}
            objectFit="covers"
          />
          <Image
            src={cbg1}
            alt="profile"
            width={200}
            height={200}
            className={Style.daysComponents_box_img_2}
            objectFit="covers"
          />
          <Image
            src={hero}
            alt="profile"
            width={200}
            height={200}
            className={Style.daysComponents_box_img_3}
            objectFit="covers"
          />
        </div>

        <div className={Style.daysComponents_box_title}>
          <h2>Amazing Collection</h2>
          <div className={Style.daysComponents_box_title_info}>
            <div className={Style.daysComponents_box_title_info_profile}>
              <Image
                src={user1}
                alt="profile"
                width={30}
                height={30}
                objectFit="covers"
                className={Style.daysComponents_box_title_info_img}
              />

              <p>
                Creator
                <span>
                  Bhoomi Rai
                  <small>
                    <Mdverified />
                  </small>
                </span>
              </p>
            </div>

            <div className={Style.daysComponents_box_title_info_price}>
              <small>1.255 ETH</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
