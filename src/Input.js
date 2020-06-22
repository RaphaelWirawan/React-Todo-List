import React from "react";
import "./style.sass";

export default function Input(props) {
  return (
    <>
      <label for="inp" className="inp">
        <input
          {...props}
          ref={props.reactRef}
          type="text"
          id="inp"
          placeholder="&nbsp;"
        ></input>
        <span className="label">Add Task</span>
        <span className="focus-bg"></span>
      </label>
    </>
  );
}
