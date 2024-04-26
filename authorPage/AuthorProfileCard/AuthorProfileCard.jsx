import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import Style from './AuthorProfileCard.module.css';
import user1 from '../../images/user1.jpg';

import {
  MdVerified,
  MdCloudUpload,
  MdOutlineReportProblem,
} from "react-icons/md";
import { FiCopy } from "react-icons/fi";
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialYoutube,
  TiSocialLinkedin,
  TiSocialTwitter,
} from "react-icons/ti";
import { BsThreeDots } from "react-icons/bs";
import {Button} from '../../components/compindex';



const AuthorProfileCard = () => {
  const [share, setShare] = useState(false);
  const [report, setReport] = useState(false);

  const copyAddress = () => {
    const copyText = document.getElementById("myInput");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
  };

  const openShare = () => {
    if (!share) {
      setShare(true);
      setReport(false);
    } else {
      setShare(false);
    }
  };

  const openReport = () => {
    if (!report) {
      setReport(true);
      setShare(false);
    } else {
      setReport(false);
    }
  };


  return (
    <div className={Style.AuthorProfileCard}>
      <div className={Style.AuthorProfileCard_box}>
        <div className={Style.AuthorProfileCard_box_img}>
          
          <Image
            src={user1}
            className={Style.AuthorProfileCard_box_img_img}
            alt="NFT IMAGES"
            width={220}
            height={220}
          />
         
        
        </div>
        <div className={Style.AuthorProfileCard_box_info}>
          <h2>
            Drashti Shah {""}{" "}
            <span>
              <MdVerified />
            </span>{" "}
          </h2>
          <div className={Style.AuthorProfileCard_box_info_address}>
            <input
              type="text"
              value="0x87HSI99909D1ABDOY32928...A905"
              id="myInput"
            />
            <FiCopy
              onClick={() => copyAddress()}
              className={Style.AuthorProfileCard_box_info_address_icon}
            />
            </div>
            <p> Punk #51426 / An OG Cryptopunk Collector</p>
          <div className={Style.AuthorProfileCard_box_info_social}>
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
            <a href="#">
              <TiSocialYoutube />
            </a>
            </div>
          </div>
          <div className={Style.AuthorProfileCard_box_share}>
          <Button btnName="Follow" handleClick={() => {}} />
          <MdCloudUpload
            onClick={() => openShare()}
            className={Style.AuthorProfileCard_box_share_icon}
          />
          {share && (
            <div className={Style.AuthorProfileCard_box_share_upload}>
              <p>
                <span>
                  <TiSocialFacebook />
                </span>
                {""} FaceBook
              </p>
              <p>
                <span>
                  <TiSocialInstagram />
                </span>
                {""} Instagram
              </p>
              <p>
                <span>
                  <TiSocialLinkedin />
                </span>
                {""} LinkedIn
              </p>
              <p>
                <span>
                  <TiSocialTwitter />
                </span>
                {""} Twitter
              </p>
              <p>
                <span>
                  <TiSocialYoutube />
                </span>
                {""} Youtube
              </p>
            </div>
          )}
          <BsThreeDots
            onClick={() => openReport()}
            className={Style.AuthorProfileCard_box_share_icon}
          />
          {report && (
            <p className={Style.AuthorProfileCard_box_share_report}>
              <span>
                <MdOutlineReportProblem />
              </span>
              {""} Report Abuse
            </p>
          )}
        </div>
        </div>
        </div>
  );
};

export default AuthorProfileCard
