import React from "react";
import Grid from "@mui/material/Grid";
import style from "./footer.module.css";

const Footer = () => {
  return (
    <div>
      <div className={style.footercontainer}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <div>
              <h1>NFters</h1>
              <p>
                The world’s first and largest digital marketplace for crypto
                collectibles and non-fungible tokens (NFTs). Buy, sell, and
                discover exclusive digital items.
              </p>
            </div>
          </Grid>
          <Grid item xs={12} md={3}>
            <div>
              <div>
                <h1>MarketPlace</h1>
              </div>
              <div>
                <p>All NFts</p>
                <p>New</p>
                <p>Utility</p>
                <p>News</p>
                <p>Favourite</p>
                <p>Index</p>
                <p>News</p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={3}>
            <div>
              <div>
                <h1>My Account</h1>
              </div>
              <div>
                <p>Profiles</p>
                <p>Favourite</p>
                <p>Index</p>
                <p>News</p>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} md={3}>
            <div>
              <div>
                <h1>Stay in the Loop</h1> <br />
                <p>Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating NFTs.</p>   
              </div>
              <div class={style.inputcontainer}>
                <input type="text" placeholder="Type something..." />
                <button>Submit</button>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
