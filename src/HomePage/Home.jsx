import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import styles from "./home.module.css";
import BannerFirst from "../BannerFirst/BannerFirst";
import BannerSecond from "../BannerSecond/BannerSecond";
import Bannerthird from "../BannerThird/Bannerthird";
import Bannerfour from "../BannerFour/Bannerfour";
import Bannerfive from "../BannerFive/Bannerfive";
import { BannerSix } from "../BannerSix/BannerSix";
import Footer from "../Footer/Footer";

export const Home = () => {
  

  return (
    <div>
      <div className={styles.navbar}>
        <div className={styles.container}>
          <div className={styles.logoAndMenu}>
            <b>
              <p className={styles.Nfters}>NFters</p>
            </b>
            <ul className={styles.showMenu}>
              <li>MarketPlace</li>
              <li>Resource</li>
              <li>About</li>
            </ul>
          </div>
          <div
            className={styles.searchContainer}
            
          >
            <div className={styles.searchIcon}>
              <CiSearch className={styles.faSearch} />
            </div>
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Search Products"
            />
          </div>
          <div
            className={styles.buttons} 
          >
            <button className={styles.upload}>Upload</button>
            <button className={styles.walletbtn}>Connect Wallet</button>
          </div>
      
        </div>
      </div>

      <BannerFirst />
      <BannerSecond />
      <Bannerthird />
      <Bannerfour />
      <Bannerfive />
      <BannerSix />
      <Footer />
    </div>
  );
};
