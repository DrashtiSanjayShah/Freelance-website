import React, {useState, useEffect} from 'react';
import Style from '../styles/author.module.css';
import {AuthorProfileCard, AuthorTaps, TabCard} from '../../authorPage/componentindex';
import {Brand, Title } from "../../components/compindex";
import user1 from "../../images/user1.jpg";
import user2 from "../../images/user2.jpg";
import user3 from "../../images/user3.jpg";
import user4 from "../../images/user4.jpg";
import { Banner } from '../../collectionPage/collectionIndex';
import cbg1 from "../../images/cbg1.webp";

const author = () => {

    const popularArray= [
        user1, user2, user3, user4,
    ]

    const [collectiables, setCollectiables] = useState(true);
    const [created, setCreated] = useState(false);
    const [like, setLike] = useState(false);
    const [follower, setFollower] = useState(false);
    const [following, setFollowing] = useState(false);

  return (
    <div className={Style.banner}>
      <Banner bannerImage={cbg1} />
      <AuthorProfileCard/>
      <AuthorTaps collectiables={setCollectiables} created={setCreated} like={setLike} follower={setFollower} following={setFollowing} />
      <Title heading="Popular Creators" paragraph='Check out their work' />
     {/* <h3> something is missing</h3> */}
      <Brand />
    </div>
  )
}

export default author
