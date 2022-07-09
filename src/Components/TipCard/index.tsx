import React, { useState } from "react";

// children
import CardInputs from "./CardInputs";
import TipSummary from "./TipSummary";

// style
import "../../assets/scss/main.scss";

type Props = {};

// component
const TipCard = (props: Props) => {
  // state
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("");
  const [people, setPeople] = useState("");
  const [reset, setReset] = useState(false);

  const handleBillChange = (data: string) => {
    setBill(data);
  };

  const handleTipChange = (data: string) => {
    setTip(data);
  };

  const handlePeopleChange = (data: string) => {
    setPeople(data);
  };

  const handleResetChange = (data: boolean) => {
    setReset(data);
  };

  const handleResetClick = () => {
    setBill("");
    setTip("");
    setPeople("");
  };

  // template
  return (
    <main className="tip-card">
      <CardInputs
        onBillChange={handleBillChange}
        bill={bill}
        onTipChange={handleTipChange}
        people={people}
        onPeopleChange={handlePeopleChange}
        onResetChange={handleResetChange}
        reset={reset}
      />
      <TipSummary
        bill={+bill}
        tip={+tip}
        people={+people}
        onResetChange={handleResetChange}
        reset={reset}
        onResetClick={handleResetClick}
      />
    </main>
  );
};

export default TipCard;
