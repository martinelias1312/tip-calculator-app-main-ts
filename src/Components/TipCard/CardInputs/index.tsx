import React, { ChangeEvent, MouseEvent } from "react";

// style
import "../../../assets/scss/main.scss";

type Props = {
  bill: string;
  onBillChange: (data: string) => void;
  onTipChange: (data: string) => void;
};

const CardInputs = (props: Props) => {
  // props destructuring
  const { bill, onBillChange, onTipChange } = props;

  // selectors
  let buttons = document.querySelectorAll(".tipBtn");

  // bill input handler
  const handleBillChange = (e: ChangeEvent<HTMLInputElement>) => {
    onBillChange(e.target.value);
  };

  // tip input handler
  const handleTipChange = (e: ChangeEvent<HTMLInputElement>) => {
    onTipChange(e.target.value);
    buttons.forEach((btn) => btn.classList.remove("active"));
  };

  // tip buttons handler
  const handleTipClickChange = (e: MouseEvent<HTMLButtonElement>) => {
    onTipChange((e.target as HTMLButtonElement).value);

    // remove active class from all buttons
    buttons.forEach((btn) => btn.classList.remove("active"));

    // add active class to selected button
    (e.target as HTMLButtonElement).classList.add("active");
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
          <button onClick={handleTipClickChange} value="5" className="tipBtn">
            5%
          </button>
          <button onClick={handleTipClickChange} value="10" className="tipBtn">
            10%
          </button>
          <button onClick={handleTipClickChange} value="15" className="tipBtn">
            15%
          </button>
          <button onClick={handleTipClickChange} value="25" className="tipBtn">
            25%
          </button>
          <button onClick={handleTipClickChange} value="50" className="tipBtn">
            50%
          </button>
          <input
            className="btn-custom"
            placeholder="Custom"
            onChange={handleTipChange}
          />
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
