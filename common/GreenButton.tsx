import React from "react";

const GreenButton = ({
  text = "button",
  extrClss = "",
}: {
  text?: string;
  extrClss?: string;
}) => {
  return (
    <button className={` bg-green-700 rounded capitalize inter ${extrClss}`}>
      {text}
    </button>
  );
};

export default GreenButton;
