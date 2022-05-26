import React, { MouseEvent, ChangeEvent, useRef } from "react";

// style
import "../../../assets/scss/main.scss";

type Props = {
  data: {
    tip?: string;
    bill?: string;
    people?: string;
  };
};

const CardInputs = (props: Props) => {
  const billInput = useRef<HTMLInputElement>(null);
  const peopleInput = useRef<HTMLInputElement>(null);
  const customInput = useRef<HTMLInputElement>(null);

  const { data } = props;

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    let errorMsg = document.querySelector(".msg-zero");
    let billCurrent = billInput.current?.value;
    let customCurrent = customInput.current?.value;
    let peopleCurrent = peopleInput.current?.value;

    // condition if people input gets 0 number, then error message will show
    peopleCurrent === "0"
      ? errorMsg?.classList.remove("display")
      : errorMsg?.classList.add("display");

    // reset tip in data object
    if (customInput.current === e.currentTarget) {
      data.tip = customCurrent;
    }

    // setting current values to data object
    data.bill = billCurrent;
    data.people = peopleCurrent;
  };

  const handleClick = (e: MouseEvent) => {
    let customInputEl = document.querySelector(
      ".btn-custom"
    ) as HTMLInputElement;

    // remove active class from old clicked buttons
    let buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      button.classList.remove("active");
    });

    // condition if clicked item is customInput
    if (e.currentTarget !== customInputEl) {
      customInputEl.value = "";

      // add active class to clicked button
      e.currentTarget.classList.add("active");
      // removing % from button text
      let tip = e.currentTarget.innerHTML.split("");
      tip[e.currentTarget.innerHTML.length - 1] = "";
      data.tip = tip.join("");
    } else {
      data.tip = customInput.current?.value;
    }
  };

  return (
    <div className="card-inputs">
      <section className="bill">
        <h2>Bill</h2>
        <input
          type="text"
          placeholder="0"
          onChange={handleInput}
          ref={billInput}
        />
      </section>

      <section className="tip">
        <h2>Select Tip %</h2>
        <div className="btn-grid">
          <button onClick={handleClick}>5%</button>
          <button onClick={handleClick}>10%</button>
          <button onClick={handleClick}>15%</button>
          <button onClick={handleClick}>25%</button>
          <button onClick={handleClick}>50%</button>
          <input
            className="btn-custom"
            placeholder="Custom"
            onChange={handleInput}
            ref={customInput}
            onClick={handleClick}
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
          onChange={handleInput}
          ref={peopleInput}
        />
      </section>
    </div>
  );
};

export default CardInputs;
