import React from "react";

export default function Rank({ rankCounter, user }) {
  let currentRank = rankCounter;
  return (
    <div className="white f2 pa3">{`${user.name}, your current rank is: ${currentRank}!`}</div>
  );
}
