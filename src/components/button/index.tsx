import React from "react";
import Button from "@material-ui/core/Button";

const index = ({ children, ...props }: any) => {
  return (
    <Button variant="container" {...props}>
      {children}
    </Button>
  );
};

export default index;
