import React from "react";
import "./PopularMemberShip.css";

const PopularMemberShip = () => {
  return (
    <>
      <div className="membership">
        <h3 className="popular text-center">Popular Member Ship</h3>
        <div className="members">
          <div className="member1">
            <img src="/images/image15.png" alt="image1" />
          </div>
          <div className="member2">
            <div className="cards">
              <div className="card1">
                <div className="upper">
                  <img src="/images/amazon.png" alt="" />
                  <p>Amazon</p>
                </div>
                <div className="lower">
                  <p className="paragraph">Flat 30% of </p>
                  <button className="button">GRAB NOW</button>
                </div>
              </div>
              <div className="card1">
                <div className="upper">
                  <img src="/images/amazon.png" alt="" />
                  <p>Amazon</p>
                </div>
                <div className="lower">
                  <p className="paragraph">Flat 30% of </p>
                  <button className="button">GRAB NOW</button>
                </div>
              </div>
              <div className="card1">
                <div className="upper">
                  <img src="/images/amazon.png" alt="" />
                  <p>Amazon</p>
                </div>
                <div className="lower">
                  <p className="paragraph">Flat 30% of </p>
                  <button className="button">GRAB NOW</button>
                </div>
              </div>
              <div className="card1">
                <div className="upper">
                  <img src="/images/amazon.png" alt="" />
                  <p>Amazon</p>
                </div>
                <div className="lower">
                  <p className="paragraph">Flat 30% of </p>
                  <button className="button">GRAB NOW</button>
                </div>
              </div>
            </div>
          </div>
          <div className="member3">
            <img src="/images/image14.png" alt="image2" />
          </div>
          <div className="member4">
            <img src="/images/image16.png" alt="image4" />
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularMemberShip;
