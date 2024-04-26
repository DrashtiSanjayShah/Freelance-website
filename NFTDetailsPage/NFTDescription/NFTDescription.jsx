import React, { useState } from "react";
import Image from "next/image";
import { 
    MdVerified, 
    MdCloudUpload, 
    MdTimer, 
    MdReportProblem,
    MdOutlineDeleteSweep 
} from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { FaWallet, FaPercentage } from "react-icons/fa";
import {
    TiSocialFacebook,
    TiSocialLinkedin,
    TiSocialInstagram,
    TiSocialTwitter,
    TiSocialYoutube,
} from "react-icons/ti";
import { BiTransferAlt, BiDollar } from "react-icons/bi";


//INTERNAL IMPORT
import Style from "./NFTDescription.module.css";
import user1 from "../../images/user1.jpg";
import user2 from "../../images/user2.jpg";
import user3 from "../../images/user3.jpg";
import user4 from "../../images/user4.jpg";

import { Button } from "../../components/compindex";
import { NFTTabs } from "../NFTDetailsIndex";


const NFTDescription = () => {
    const [social, setSocial] = useState(false);
    const [NFTMenu, setNFTMenu] = useState(false);
    const [history, setHistory] = useState(true);
    const [provanance, setProvanance] = useState(false);
    const [owner, setOwner] = useState(false);


    const historyArray = [
        user1,
        user2,
        user3,
        user4,
        user2,
    ];
    const provananceArray = [
        user3,
        user4,
        user1,
        user2,
        user3,
    ];
    const ownerArray = [
        user1,
        user4,
        user2,
        user3,
        user4,
    ];


    const openSocial = () => {
        if (!social) {
            setSocial(true);
            setNFTMenu(false);
        } else {
            setSocial(false);
        }
    };


    const openNFTMenu = () => {
        if (!NFTMenu) {
            setNFTMenu(true);
            setSocial(false);
        } else {
            setNFTMenu(false);
        }
    };


    const openTabs = (e) => {
        const btnText = e.target.innerText;


        if(btnText == "Bid History"){
            setHistory(true);
            setProvanance(false);
            setOwner(false);
        } else if (btnText == "Provanance"){
            setHistory(false);
            setProvanance(true);
            setOwner(false);
        }
    }; 
    
    const openOwner = () => {
        if(!owner){
            setOwner(true);
            setHistory(false);
            setProvanance(false);
        } else {
            setOwner(false);
            setHistory(true);
        }
    };


    return (
        <div className={Style.NFTDescription}>
            <div className={Style.NFTDescription_box}>
                {/* //PART ONE */}
                <div className={Style.NFTDescription_box_share}>
                    <p>Virtual Worlds</p>
                    <div className={Style.NFTDescription_box_share_box}>
                        <MdCloudUpload
                            className={Style.NFTDescription_box_share_box_icon}
                            onClick={() => openSocial()} 
                        />


                        {social && (
                            <div className={Style.NFTDescription_box_share_box_social}>
                                <a href="#">
                                    <TiSocialFacebook /> Facebook
                                </a>
                                <a href="#">
                                    <TiSocialInstagram /> Instagram
                                </a>
                                <a href="#">
                                    <TiSocialLinkedin /> LinkedIn 
                                </a>
                                <a href="#">
                                    <TiSocialTwitter/> Twitter
                                </a>
                                <a href="#">
                                    <TiSocialYoutube /> YouTube
                                </a>
                            </div>
                        )}


                        <BsThreeDots
                            className={Style.NFTDescription_box_share_box_icon}
                            onClick={() => openNFTMenu()}
                        />


                        {NFTMenu && (
                            <div className={Style.NFTDescription_box_share_box_social}>
                                <a href="#">
                                    <BiDollar /> Change Price
                                </a>
                                <a href="#">
                                    <BiTransferAlt /> Transfer
                                </a>
                                <a href="#">
                                    <MdReportProblem /> Report
                                </a>
                                <a href="#">
                                    <MdOutlineDeleteSweep /> Delete Item
                                </a>
                            </div>
                        )}
                    </div>
                </div>
                {/* //PART TWO */}
                <div className={Style.NFTDescription_box_profile}>
                    <h1>BearX #23453</h1>
                    <div className={Style.NFTDescription_box_profile_box}>
                        <div className={Style.NFTDescription_box_profile_box_left}>
                            <Image 
                                src={user1} 
                                alt="profile" 
                                width={40} 
                                height={40}
                                className={Style.NFTDescription_box_profile_box_left_img}
                            />
                            <div className={Style.NFTDescription_box_profile_box_left_info}>
                                <small>Creator</small><br />
                                <span>
                                    Karli Costa <MdVerified />
                                </span>
                            </div>
                        </div>


                        <div className={Style.NFTDescription_box_profile_box_right}>
                            <Image
                                src={user1}
                                alt="profile"
                                width={40}
                                height={40}
                                className={Style.NFTDescription_box_profile_box_left_img}
                            />


                            <div className={Style.NFTDescription_box_profile_box_right_info}>
                                <small>Creator</small> <br />
                                <span>
                                    Karli Costa <MdVerified />
                                </span>
                            </div>
                        </div>
                    </div>
                


                    <div className={Style.NFTDescription_box_profile_bidding}>
                        <p>
                            <MdTimer /> <span>Auction ending in:</span>
                        </p>


                        <div className={Style.NFTDescription_box_profile_bidding_box_timer}>
                            <div 
                            className={Style.NFTDescription_box_profile_bidding_box_timer_item}
                        >
                            <p>2</p>
                            <span>Days</span>
                            </div>
                            <div 
                            className={Style.NFTDescription_box_profile_bidding_box_timer_item}
                        >
                            <p>22</p>
                            <span>Hours</span>
                            </div>
                            <div 
                            className={Style.NFTDescription_box_profile_bidding_box_timer_item}
                        >
                            <p>45</p>
                            <span>mins</span>
                            </div>
                            <div 
                                className={Style.NFTDescription_box_profile_bidding_box_timer_item}
                            >
                                <p>12</p>
                                <span>secs</span>
                            </div>
                        </div>


                        <div className={Style.NFTDescription_box_profile_bidding_box_price}>
                            <div 
                                className={Style.NFTDescription_box_profile_bidding_box_price_bid}
                            >
                                <small>Current Bid</small>
                                <p>
                                    1.000 ETH <span>( = $3,221.22)</span>
                                </p>
                            </div>


                            <span>[96 in stock]</span>
                        </div>


                        <div className={Style.NFTDescription_box_profile_bidding_box_button}>
                            <Button
                                icon = <FaWallet />
                                btnName="Place a bid"
                                handleClick={() => {}}
                                classStyle={Style.button}
                            />
                            <Button
                                icon = <FaPercentage />
                                btnName="Make offer"
                                handleClick={() => {}}
                                classStyle={Style.button}
                            />
                        </div>


                        <div className={Style.NFTDescription_box_profile_bidding_box_tabs}>
                            <button onClick={(e) => openTabs(e)}>Bid History</button>
                            <button onClick={(e) => openTabs(e)}>Provanance</button>
                            <button onClick={(e) => openOwner()}>Owner</button>
                        </div>


                        {history && (
                            <div className={Style.NFTDescription_box_profile_bidding_box_card}>
                                <NFTTabs dataTab= {historyArray} />
                            </div>
                        )}
                        {provanance && (       
                            <div className={Style.NFTDescription_box_profile_bidding_box_card}>
                                <NFTTabs dataTab= {provananceArray} />
                            </div>
                        )}
                        {owner && (       
                            <div className={Style.NFTDescription_box_profile_bidding_box_card}>
                                <NFTTabs dataTab= {ownerArray} icon=<MdVerified /> />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};


export default NFTDescription;


