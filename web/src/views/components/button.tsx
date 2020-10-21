import * as React from "react";

interface Props {
  onClick?: () => void;
  children: any;
  type: "button" | "submit" | "reset" | undefined;
  style?: string;
}

export const Button = (props: Props) => {
  const { onClick, children, style, type } = props;

  return <button className={style} onClick={onClick} type={type}>{children}</button>;
}