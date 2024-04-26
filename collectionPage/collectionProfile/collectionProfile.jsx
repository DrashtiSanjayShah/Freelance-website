import React from "react";
import Image from "next/image";
import {
    TiSocialFacebook,
    TiSocialLinkedin,
    TiSocialInstagram,
    TiSocialTwitter,
} from "react-icons/ti";


//INTERNAL IMPORT
import Style from "./collectionProfile.module.css";
import nft_image_1 from '../../images/nft_image_1.jpg';


const collectionProfile = () => {
    const cardArray = [1, 2, 3, 4];
    return (
        <div className={Style.collectionProfile}>
            <div className={Style.collectionProfile_box}>
                <div className={Style.collectionProfile_box_left}>
                    <Image 
                        src={nft_image_1}
                        alt="nft image"
                        width={500}
                        height={500}
                        className={Style.collectionProfile_box_left_img}
                    />


                    <div className={Style.collectionProfile_box_left_social}>
                        <a href="#">
                            <TiSocialFacebook />
                        </a>
                        <a href="#">
                            <TiSocialInstagram />
                        </a>
                        <a href="#">
                            <TiSocialLinkedin />
                        </a>
                        <a href="#">
                            <TiSocialTwitter />
                        </a>
                    </div>
                </div>


                <div className={Style.collectionProfile_box_middle}>
                    <h1>Web Project Collection</h1>
                    <p>
                        Karaturu is home to 5,555 top freelancers where work reign supreme. Leave the drab reality and enter the world of Karafuru by yours truly.
                    </p>


                    <div className={Style.collectionProfile_box_middle_box}>
                        
                            <div 
                                className={Style.collectionProfile_box_middle_box_item} 
                                
                            >
                                <small> Market Floor Price</small>
                                <p>$95,4683</p>
                                </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default collectionProfile;