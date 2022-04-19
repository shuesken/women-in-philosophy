import React from "react";

export default function IndividualSignatory({ name, dept, limits }) {
  return (
    <li className="individual-signatory">
      <span className="name">{name}</span>, <span className="dept">{dept}</span>{limits !== '' &&
        <><span className="limits">{limits}</span></>
  }
    </li>
  );
}
