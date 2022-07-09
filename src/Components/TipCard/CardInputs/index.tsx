import React, { ChangeEvent, MouseEvent } from "react";


// style
import "../../../assets/scss/main.scss";

type Props = {
  bill: string;
  onBillChange: (data: string) => void;
  onTipChange: (data: string) => void;
  people: string;
  onPeopleChange: (data: string) => void;
  reset: boolean;
  onResetChange: (data: boolean) => void;
};

const CardInputs = (props: Props) => {
  // props destructuring
  const {
    bill,
    onBillChange,
    onTipChange,
    people,
    onPeopleChange,
    reset,
    onResetChange,
  } = props;

  // selectors
  let buttons = document.querySelectorAll(".tipBtn");
  let btnCustom = document.querySelector(".btn-custom") as HTMLInputElement;
  let zeroMsg = document.querySelector(".msg-zero");

  // bill input handler
  const handleBillChange = (e: ChangeEvent<HTMLInputElement>) => {
    onBillChange(e.target.value);

    if (e.target.value !== "" || people !== "") {
      onResetChange(true);
    } else onResetChange(false);
  };

  // tip input handler
  const handleTipChange = (e: ChangeEvent<HTMLInputElement>) => {
    onTipChange(e.target.value);
    buttons.forEach((btn) => btn.classList.remove("active"));

    if (e.target.value !== "" || people !== "" || bill !== "") {
      onResetChange(true);
    } else onResetChange(false);
  };

  // tip buttons handler
  const handleTipClickChange = (e: MouseEvent<HTMLButtonElement>) => {
    onTipChange((e.target as HTMLButtonElement).value);
    // remove active class from all buttons
    buttons.forEach((btn) => btn.classList.remove("active"));

    // add active class to selected button
    (e.target as HTMLButtonElement).classList.add("active");

    // reset btn-custom value after click on another button
    if (btnCustom === null) {
    } else if (btnCustom.value !== "") {
      btnCustom.value = "";
    }

    if ((e.target as HTMLButtonElement).value !== "") {
      onResetChange(true);
    } else onResetChange(false);
  };

  // people input handler
  const handlePeopleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onPeopleChange(e.target.value);

    if (e.target.value === "0") {
      zeroMsg?.classList.remove("display");
    } else zeroMsg?.classList.add("display");

    if (e.target.value !== "" || bill !== "" || btnCustom.value) {
      onResetChange(true);
    } else onResetChange(false);
  };

  // function which removes active class from buttons when reset is false
  const styleCheck = (reset: boolean) => {
    if (!reset) {
      buttons.forEach((btn) => btn.classList.remove("active"));

      // checking if btnCustom value is defined or not
      if (btnCustom === null) {
        return;
      } else if (btnCustom.value !== "" && btnCustom !== null) {
        btnCustom.value = "";
      } else return;
    } else return;
  };

  styleCheck(reset);
  
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
        <input
          type="text"
          placeholder="0"
          onChange={handlePeopleChange}
          value={people}
        />
      </section>
    </div>
  );
};

export default CardInputs;
