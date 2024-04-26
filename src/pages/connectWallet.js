import React, { useState, useEffect } from 'react'
import Image from "next/image";

import Style from "../styles/connectWallet.module.css";
import user1 from '../../images/user1.jpg';
import user2 from '../../images/user2.jpg';
import user3 from '../../images/user3.jpg';
import user4 from '../../images/user4.jpg';

const connectwallet = () => {
    const [activeBtn, setActiveBtn] = useState(1);
    const providerArray = [
        {
            provider: user1,
            name: "Metamask",
        },
        {
            provider: user2,
            name: "WalletConnect",
        },
        {
            provider: user3,
            name: "Walletlink",
        },
        {
            provider: user4,
            name: "Formatic",
        },
    ];
    return (
        <div className={Style.connectwallet}>
            <div className={Style.connectwallet_box}>
                <h1>Connect your wallet</h1>
                <p className={Style.connectwallet_box_para}>
                    Connect with one of our available Wallet providers
                </p>

                <div className={Style.connectwallet_box_provider}>
                    {providerArray.map((el, i) => (
                        <div
                            className={`${Style.connectwallet_box_provider_item}'${activeBtn == i + 1 ? Style.active : ""
                                }`}
                            key={i + 1}
                            onClick={() => setActiveBtn(i + 1)}
                        >

                            <Image
                                src={el.provider}
                                alt={el.provider}
                                width={50}
                                height={50}
                                className={Style.connectwallet_box_provider_item_img}
                            />
                            <p>{el.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default connectwallet;