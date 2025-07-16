import React from "react";
import "./Address.scss";

const Address = () => {
  return (
    <section className="address-section">
      <div className="container">
        <h2 className="section-title">ADDRESS</h2>

        <div className="address-block">
          <h3>Native Address</h3>
          <p>S/O Murugesan G</p>
          <p>Veppalampatti (VILL), Krishnagiri (DT), Tamil Nadu</p>
        </div>

        <div className="address-block">
          <h3>Current Address</h3>
          <p>BTM Layout, Bangalore, Karnataka</p>
        </div>
      </div>
    </section>
  );
};

export default Address;
