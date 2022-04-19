import React from "react";
import "./signatory.css"

export default function Signatory({ name, comments, id }) {
  return (
    <li key={id} className="signatory">
      <span className="name">{name}</span>{comments === '' ||
        <><span className="comments"> ({comments})</span></>
  }
    </li>
  );
}
