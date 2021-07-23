import React from "react";
import "./index.css";

import FormInput from "../form-input";
import Button from "../button";

const index = ({ input, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search">Title Gif : </label>
      <FormInput
        type="text"
        id="search"
        className="search"
        onChange={handleChange}
        value={input}
        autoComplete="off"
      />
      <Button type="submit" value="Search" className="submit" />
    </form>
  );
};

export default index;
