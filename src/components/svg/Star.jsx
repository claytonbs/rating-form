import React from "react";

const Star = props => {
  return (
    <div
      onClick={() => props.onClickStar(props.count)}
      className={"star " + props.classProp}
      style={{
        overflow: "hidden"
      }}
    />
  );
};

export default Star;
