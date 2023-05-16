import React, { HTMLAttributes } from "react";
import TypographyContainer from "./Typography.style";

export interface TypographyProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: keyof JSX.IntrinsicElements; // Note the keyof!
  children: JSX.Element | string;
  variant: "white" | "gray" | "primary";
  className?: string;
}
/**
 * @function Typography
 * @description  Typography component that allows developer to use p, heading..etc .
 * @param {string} as - Different types of elements like p, h, span
 * @param {string} variant - Colors for the typography
 * @returns {JSX.Element} A React component that renders a button
 */
function Typography({
  variant,
  children,
  as = "h1",
  className,
}: TypographyProps): JSX.Element {
  return (
    <TypographyContainer variant={variant} as={as} className={className}>
      {children}
    </TypographyContainer>
  );
}
export default Typography;
