import React from "react";
import Image from "next/image";
import Style from "./HeroSection.module.css";
import { Button } from "../compindex";
import hero1 from "../../images/hero1.png";
import { useRouter } from 'next/router';

const HeroSection = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/collection');
  };

  return (
    <div className={Style.HeroSection}>
      <div className={Style.heroSection_box}>
        <div className={Style.heroSection_box_left}>
          <h1>Find the perfect freelance service, right away</h1>
          <Button btnName="Start your search" onClick={handleButtonClick} />
        </div>
        <div className={Style.heroSection_box_right}>
          <Image src={hero1} alt="hero section" width={802} height={550} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
