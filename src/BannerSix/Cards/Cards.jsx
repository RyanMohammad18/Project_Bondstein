import React from "react";
import Card from "react-bootstrap/Card";
import image1 from "../Images/1.png";
import svg1 from "../Images/Ellipse2.svg";
import svg2 from "../Images/ethereum3.svg";

import style from "./cards.module.css";

const Cards = () => {
  return (
    <div>
      <div className={style.container}>
        <div>
          <Card style={{ width: "15rem" }}>
            <Card.Body className={style.cardbody}>
              <div className={style.imgdetails}>
                <div>
                  <div className={style.smallimg}>
                    <Card.Img
                      style={{
                        width: "20%",
                        height: "auto",
                        marginRight: "-5px",
                      }}
                      src={svg1}
                    />
                    <Card.Img
                      style={{
                        width: "20%",
                        height: "auto",
                        marginLeft: "-5px",
                        marginRight: "-5px",
                      }}
                      src={svg1}
                    />
                    <Card.Img
                      style={{
                        width: "20%",
                        height: "auto",
                        marginLeft: "-5px",
                      }}
                      src={svg1}
                    />
                  </div>
                </div>
              </div>
              <div className={style.cardtitle}>
                <Card.Title>ArtCrypto</Card.Title>
              </div>

              <Card.Text>
                <div className={style.flexContainer}>
                  <div>
                    <span className={style.inline}>
                      <img src={svg2} alt="" />
                      <p>0.25 ETH</p>
                    </span>
                  </div>
                  <div>
                    <p>1 of 321</p>
                  </div>
                </div>

                <div className={style.flexContainer}>
                  <div>
                    <span className={style.inline2}>
                    
                      <p>3h 50m 2s left</p>
                    </span>
                  </div>
                  <div>
                    <p className={style.placebid}>place a bid</p>
                  </div>
                </div>
              </Card.Text>

            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Cards;
