import React, { PropsWithChildren } from "react";
import "./Button.scss";

interface ButtonProps {}

function Button(props: PropsWithChildren<ButtonProps>): JSX.Element {
  const { children } = props;
  return <button className="button">{children}</button>;
}

export default Button;
