import React from "react";

type Props = {};

const TipSummary = (props: Props) => {
  return (
    <div className="tip-summary">
      <div className="tip-person">
        <h2 className="tip-person-heading">
          Tip Amount<span>/ person</span>
        </h2>
        <p className="tip-person-sum">$0.00</p>
      </div>

      <div className="tip-total">
        <h2 className="tip-total-heading">
          Total<span>/ person</span>
        </h2>
        <p className="tip-total-sum">$0.00</p>
      </div>
      <button className="btn-reset">RESET</button>
    </div>
  );
};

export default TipSummary;
