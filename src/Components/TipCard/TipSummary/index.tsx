import React from "react";

// style
import "../../../assets/scss/main.scss";

type Props = {
  bill: number;
  tip: number;
  people: number;
};

const TipSummary = (props: Props) => {
  const { bill, tip, people } = props;

  let personTip = (bill * (tip / 100)) / people;
  let personTotal = bill / people + personTip;

  return (
    <div className="tip-summary">
      <div className="tip-person">
        <h2 className="tip-person-heading">
          Tip Amount<span>/ person</span>
        </h2>
        <p className="tip-person-sum">
          $
          {(isNaN(personTip) || personTip === Infinity ? 0 : personTip).toFixed(
            2
          )}
        </p>
      </div>

      <div className="tip-total">
        <h2 className="tip-total-heading">
          Total<span>/ person</span>
        </h2>
        <p className="tip-total-sum">
          $
          {(isNaN(personTotal) || personTotal === Infinity
            ? 0
            : personTotal
          ).toFixed(2)}
        </p>
      </div>
      <button className="btn-reset" disabled>
        RESET
      </button>
    </div>
  );
};

export default TipSummary;
