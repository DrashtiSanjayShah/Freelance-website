import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineHttp, MdOutlineContentCopy } from "react-icons/md";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialLinkedin,
} from "react-icons/ti";
import Style from "../Form/Form.module.css";
import { Button } from "../../components/compindex";


const Form = () => {
  return (
    <div className={Style.Form}>
      <div className={Style.Form_box}>
        <form>
          <div className={Style.Form_box_input}>
            <label htmlFor="name">Username</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your username"
              className={Style.Form_box_input_username}
            />
          </div>
          <div className={Style.Form_box_input}>
            <label htmlFor="email">E-mail</label>
            <div className={Style.Form_box_input_box}>
              <div className={Style.Form_box_input_box_icon}>
                <HiOutlineMail />
              </div>
              <input type="text" placeholder="Enter your e-mail" />
            </div>
           
          </div>
          <div className={Style.Form_box_input}>
            <label htmlFor='description'>Description</label>
            <textarea name="" id="" cols="30" placeholder="type something about yourself" rows="6"></textarea>
          </div>
          <div className={Style.Form_box_input}>
            <label htmlFor="website">Website</label>
            <div className={Style.Form_box_input_box}>
              <div className={Style.Form_box_input_box_icon}>
                <MdOutlineHttp />
              </div>
              <input type="text" placeholder="Enter your website" />
            </div>
          </div>
          <div className={Style.Form_box_input_social}>
            <div className={Style.Form_box_input}>
              <label htmlFor="facebook">Facebook</label>
              <div className={Style.Form_box_input_box}>
                <div className={Style.Form_box_input_box_icon}>
                  <TiSocialFacebook />
                </div>
                <input type="text" placeholder="Enter your facebook" />
              </div>
            </div>
            <div className={Style.Form_box_input}>
              <label htmlFor="linkedIn">LinkedIn</label>
              <div className={Style.Form_box_input_box}>
                <div className={Style.Form_box_input_box_icon}>
                  <TiSocialLinkedin />
                </div>
                <input type="text" placeholder="Enter your linkedIn" />
              </div>
            </div>
            <div className={Style.Form_box_input}>
              <label htmlFor="twitter">Twitter</label>
              <div className={Style.Form_box_input_box}>
                <div className={Style.Form_box_input_box_icon}>
                  <TiSocialTwitter />
                </div>
                <input type="text" placeholder="Enter your twitter" />
              </div>
            </div>
          </div>
          <div className={Style.Form_box_input}>
            <label htmlFor="wallet">Wallet address</label>
            <div className={Style.Form_box_input_box}>
              <div className={Style.Form_box_input_box_icon}>
                <MdOutlineHttp />
              </div>
              <input type="text" placeholder="0x87HSI99909D1ABDOY32928...A905" />
              <div className={Style.Form_box_input_box_icon}>
                <MdOutlineContentCopy /> </div>
            </div>
          </div>
          <div className={Style.Form_box_btn}>
            <Button btnName='Upload profile' handleClick={()=> {}} className={Style.button} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
