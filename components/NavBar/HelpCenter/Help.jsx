import React from "react";
import Style from "./Help.module.css";
import Link from "next/link";


const Help = () => {
  const helpCenter = [
    {
      name: "About",
      link: "aboutus",
    },
    {
      name: "Contact Us",
      link: "contactus",
    },
    {
      name: "Subscribe",
      link: "subscription",
    },
  ];
  return (
    <div className={Style.box}>
      {helpCenter.map((el, i) => (
        <div className={Style.helpcenter}>
          <Link href={{pathname: `${el.link}`}}>{el.name}</Link>
        </div>
      ))}
      
    </div>
  );
};

export default Help;
