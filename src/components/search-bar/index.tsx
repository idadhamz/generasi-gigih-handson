import React from "react";
import "./index.css";

import FormInput from "../form-input";
import Button from "../button";

type Props = {
  input: string,
}

const index = ({ input, handleChange, handleSubmit }: any) => {
  return (
    <form onSubmit={handleSubmit}>
      {/* <label htmlFor="search">Title Gif : </label> */}
      <FormInput
        type="text"
        id="search"
        className="search"
        onChange={handleChange}
        value={input}
        autoComplete="off"
      />
      <Button type="submit" className="submit">
        Search
      </Button>
    </form>
  );
};

export default index;
