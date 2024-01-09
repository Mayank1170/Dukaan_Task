import React from "react";
import OnlineOrders from "./OnlineOrders";
import AmountCard from "./AmountCard";

const OverviewCards = () => {
  return (
    <ul className="w-full flex items-start space-x-5">
      <OnlineOrders />
      <AmountCard />
    </ul>
  );
};

export default OverviewCards;
