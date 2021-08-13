import React from "react";

const index = (props: any) => {
  return (
    <div style={{ backgroundColor: props.color, paddingTop: "50px" }}>
      {props.children}
    </div>
  );
};

export default index;
