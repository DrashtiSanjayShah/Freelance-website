import React from 'react';
import Image from "next/image";
import Style from "../styles/aboutus.module.css";
import { Brand } from "../../components/compindex";
import user1 from "../../images/user1.jpg";
import user2 from "../../images/user2.jpg";
import user3 from "../../images/user3.jpg";
import user4 from "../../images/user4.jpg";
import hero1 from "../../images/hero1.png";
import hero from "../../images/hero.jpg";

const aboutus = () => {
    const founderArray = [
        { name: "Niamh O Shea", position: "Co-founder and Chief Executive", images: user1, },
        { name: "Danien Jame", position: "Co-founder and Chief Executive", images: user2, },
        { name: "Orla Dwyer", position: "Co-founder and Chairman", images: user3, },
        { name: "Dara Frazier", position: "Co-Founder, Chief Strategy Officer", images: user4, },
    ];

    const factsArray = [
        {
            title: "10 million",
            info: "Articles have been public around the world (as of Sept. 30, 2021)"
        },
        {
            title: "100,000",
            info: "Registered users account (as of Sept. 30, 2021)"
        },
        {
            title: "220+",
            info: "Countries and regions have our presence (as of Sept. 30, 2021)"
        }
    ]
    return (
        <div className={Style.aboutus}>
            <div className={Style.aboutus_box}>
                <div className={Style.aboutus_box_hero}>
                    <div className={Style.aboutus_box_hero_left}>
                        <h1>👋 About Us.</h1>
                        <p>We’re impartial and independent, and every day we create distinctive,
                            world-class programmes and content which inform,
                            educate and entertain millions of people in the around the world.
                        </p>
                    </div>
                    <div className={Style.aboutus_box_hero_right}>
                        <Image src={hero} width={750} height={500}/>
                    </div>
                </div>
                <div className={Style.aboutus_box_title}>
                    <h2>⛱ Founder</h2>
                    <p>We’re impartial and independent, and every day we create distinctive, world-class programmes and content
                    </p>
                </div>
                <div className='{Style.aboutus_box_founder}'>
                    <div className={Style.aboutus_box_founder_box}>
                        {founderArray.map((el, i) => {
                            return (
                                <div className={Style.aboutus_box_founder_box_img}>
                                    <Image src={el.images} alt={el.name} width={250} height={400}
                                        className={Style.aboutus_box_founder_box_img_img}
                                    />
                                    <h3>{el.name}</h3>
                                    <p>{el.position}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className={Style.aboutus_box_title}>
                    <h2>🚀 Fast Facts</h2>
                    <p>
                        We’re impartial and independent, and
                        every day we create distinctive, world-class programmes and
                        content
                    </p>

                </div>
                <div className={Style.aboutus_box_facts}>
                    <div className={Style.aboutus_box_facts_box}>
                        {factsArray.map((el, i) => (
                            <div className={Style.aboutus_box_facts_box_info}>
                                <h3>{el.title}</h3>
                                <p>{el.info}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Brand />
        </div>
    );
}

export default aboutus;