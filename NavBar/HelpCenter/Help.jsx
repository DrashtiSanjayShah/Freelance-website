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
      name: "Sign Up",
      link: "sign-up",
    },
    {
      name: "Sign In",
      link: "sign-in",
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
