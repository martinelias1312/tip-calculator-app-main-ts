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

  const handleBillChange = (data: string) => {
    setBill(data);
  };

  // template
  return (
    <main className="tip-card">
      <CardInputs onBillChange={handleBillChange} bill={bill} />
      <TipSummary bill={+bill} />
    </main>
  );
};

export default TipCard;
