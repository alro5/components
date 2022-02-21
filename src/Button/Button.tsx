import React from "react";
import "./Button.scss";

interface ButtonProps {}

function Button(props: ButtonProps): JSX.Element {
  return <button className="button">My fancy button!</button>;
}

export default Button;
