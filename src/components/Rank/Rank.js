import React from "react";

export default function Rank({ rankCounter }) {
  const user = "Alejo";
  let currentRank = rankCounter;
  return (
    <div className="white f2 pa3">{`${user}, your current rank is: ${currentRank}!`}</div>
  );
}
