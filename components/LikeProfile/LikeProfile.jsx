import React from 'react'
import Style from './LikeProfile.module.css';
import Image from 'next/image';
import user1 from "../../images/user1.jpg";
import user2 from "../../images/user2.jpg";
import user3 from "../../images/user3.jpg";
import user4 from "../../images/user4.jpg";
const LikeProfile = () => {

    const imageArray = [user1, user2, user3, user4];
  return (
    <div className={Style.like}>
      {imageArray.map((el, i) => (
        <div className={Style.like_box}>
          <Image className={Style.like_box_img}
            src={el} width={15} height={15} 
            alt="likeProfile"
            key={i + 1}
          />
        </div>
      ))}
    </div>
  );
};

export default LikeProfile
