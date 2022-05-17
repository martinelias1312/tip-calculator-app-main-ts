import React from "react";

// style
import "../../../assets/scss/main.scss";

type Props = {};

const CardInputs = (props: Props) => {
  return (
    <div className="card-inputs">
      <section className="bill">
        <h2>Bill</h2>
        <input type="text" />
      </section>

      <section className="tip">
        <h2>Select Tip %</h2>
        <div className="btn-grid">
          <button>5%</button>
          <button>10%</button>
          <button>15%</button>
          <button>25%</button>
          <button>50%</button>
          <input className="btn-custom" placeholder="Custom" />
        </div>
      </section>

      <section className="people">
        <h2>Number of People</h2>
        <p className="msg-zero sr-only"></p>
        <input type="text" />
      </section>
    </div>
  );
};

export default CardInputs;
