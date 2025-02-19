import React, { useState, useEffect } from "react";
import Style from "./NavBar.module.css";
import Image from "next/image";
import Link from "next/link";
import { MdNotifications } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";
import { Discover, HelpCenter, Notification, Profile, SideBar } from "./index";
import logo from "../../images/logo.png";
import user1 from "../../images/user1.jpg";

const NavBar = () => {
  //USESTATES
  const [discover, setDiscover] = useState(false);
  const [help, setHelp] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const openMenu = (e) => { 

    const btnText = e.target.innerText;
    if (btnText == "Discover") {
      setDiscover(true);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    } else if (btnText == "Help Center") {
      setDiscover(false);
      setHelp(true);
      setNotification(false);
      setProfile(false);
    } else {
      setDiscover(false);
      setHelp(false);
      setNotification(false);   //...//changes
      setProfile(false);
    }
  };

  const openNotification = () => {
    if (!notification) {
      setNotification(true);
      setDiscover(false);
      setHelp(false);
      setProfile(false);
    } else {
      setNotification(false);
    }
  };

  const openProfile = () => {
    if (!profile) {
      setProfile(true);
      setDiscover(false);
      setHelp(false);
      setNotification(false);
    } else {
      setProfile(false);
    }
  };

  const openSideBar = () => {
    if (!openSideMenu) {
      setOpenSideMenu(true);
    } else {
      setOpenSideMenu(false);
    }
  };

  return (
    <div className={Style.navbar}>
      <div className={Style.navbar_container}>
        <div className={Style.navbar_container_left}>
          <Link href = '/'>
          <Image src={logo} alt="logo" width={100} height={100} />
          </Link>
          <div className={Style.navbar_container_left_box_input}>
            <div className={Style.navbar_container_left_box_input_box}>
              <input type="text" placeholder="Search Services" />
              <BsSearch onClick={() => {}} className={Style.search_icon} />
            </div>
          </div>
        </div>
        <div className={Style.navbar_container_right}>
          <div className={Style.navbar_container_right_discover}>
            {/* DISCOVER MENU */}
            <p onClick={(e) => openMenu(e)}>Discover</p> 
            {discover && (
              <div className={Style.navbar_container_right_discover_box}>
                <Discover />
              </div>
            )}
          </div>
          {/* HELP CENTER */}
          <div className={Style.navbar_container_right_help}>
          <p onClick={(e) => openMenu(e)}>Help Center</p>  
            {help && (
              <div className={Style.navbar_container_right_help_box}>
                <HelpCenter />
              </div>
            )}
          </div>
          <div className={Style.navbar_container_right_help}>
          {/* {!currentAccount && (
            <button
              type="button"
              onClick={connectWallet}
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg[#2546bd]"
            > */}
          <p onClick={(e) => openMenu(e)}>Connect Wallet</p>  
            {/* </button>
          )} */}
          </div>
          {/* NOTIFICATION */}
          <div className={Style.navbar_container_right_notify}>
            <MdNotifications
              className={Style.notify}
              onClick={() => openNotification()}  
            />
            {notification && <Notification />}
          </div>

          {/* PROFILE */}
          {/* <div className={Style.navbar_container_right_profile}>
            <p
              onClick={(e) => {
                openMenu(e);
              }}
            >
              Profile
            </p>
            {profile && (
              <div className={Style.navbar_container_right_profile_box}>
                <Profile />
              </div>
            )}
          </div> */}
          {/* <div className={Style.navbar_container_right_menu}>
            <CgMenuLeft className={Style.menu_icon} /> */}
            {!openSideMenu && (
  <div className={Style.navbar_container_right_menuBtn}>
    <CgMenuRight
      className={Style.menuIcon}
      onClick={() => openSideBar()}
    />
  </div>   //menubutton should be visible when in mobile view
)}
            {/* <CgMenuRight className={Style.menu_icon} /> */}
          {/* </div> */}

          {/* CREATE BUTTON SECTION */}
          {/* <div className={Style.navbar_container_right_button}>
            <Button btnText="Create" handleClick={() => {}} />
          </div> */}

          {/* USER PROFILE */}
          <div className={Style.navbar_container_right_profile_box}>
            <div className={Style.navbar_container_right_profile}>
              <Image
                src={user1}
                alt="User Profile 1"
                width={40}
                height={40}
                onClick={() => openProfile()}
                className={Style.navbar_container_right_profile}
              />
              {profile && <Profile />}
            </div>
          </div>
          {/* MENU BUTTON */}
          <div className={Style.navbar_container_right_menuBtn}>
            <CgMenuRight
              className={Style.menuIcon}
              onClick={() => openSideBar()}
            />
          </div>
        </div>
      </div>
      {/* SIDEBAR COMPONENT */}
      {openSideMenu && (
        <div className={Style.sideBar}>   
          <SideBar setOpenSideMenu={setOpenSideMenu} />
        </div>
      )}
    </div>
  );
};

export default NavBar;
