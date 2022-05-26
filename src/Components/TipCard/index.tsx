import React from "react";
import CardInputs from "./CardInputs";
import TipSummary from "./TipSummary";

// style
import "../../assets/scss/main.scss";

type Props = {};

const TipCard = (props: Props) => {
  return (
    <main className="tip-card">
      <CardInputs />
      <TipSummary />
    </main>
  );
};

export default TipCard;
