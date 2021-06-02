import React from "react";
import _ from "lodash";

export default function Legend({ data }) {
  const items = [];
  let i = 0;
  if (data?.labels)
    data.labels.forEach((s) => {
      items.push({ label: s, color: data.colors[i] });
      i += 1;
    });

  return (
    <div className="chart-legend">
      {items.map((d) => (
        <div key={_.uniqueId()} className="item">
          <div className="color" style={{ backgroundColor: d.color }} />
          <div className="label">{d.label}</div>
        </div>
      ))}
    </div>
  );
}
