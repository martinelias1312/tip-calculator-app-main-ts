import React, { ChangeEvent } from "react";

// style
import "../../../assets/scss/main.scss";

type Props = {
  bill: string;
  onBillChange: (data: string) => void;
};

const CardInputs = (props: Props) => {
  const { bill, onBillChange } = props;

  const handleBillChange = (e: ChangeEvent<HTMLInputElement>) => {
    onBillChange(e.target.value);
  };

  return (
    <div className="card-inputs">
      <section className="bill">
        <h2>Bill</h2>
        <input
          type="text"
          placeholder="0"
          onChange={handleBillChange}
          value={bill}
        />
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
        <h2>
          Number of People<p className="msg-zero display">Can´t be zero</p>
        </h2>
        <input type="text" placeholder="0" />
      </section>
    </div>
  );
};

export default CardInputs;
