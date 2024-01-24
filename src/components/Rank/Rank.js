import React from "react";

export default function Rank() {
  const user = "Alejo";
  let currentRank = 10;
  return (
    <div className="white f1 pa3">{`${user}, your current rank is: ${currentRank}!`}</div>
  );
}
