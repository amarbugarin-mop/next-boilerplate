/* eslint-disable react/button-has-type */

"use client";

import React from "react";
import {
  ButtonContainer,
  FlexContainer,
} from "@/components/button/button.style";

export type ButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // to handle onClick functions
  children?: React.ReactNode; // make the component able to receive children elements
  disabled?: boolean; // make the button disabled or not
  icon?: JSX.Element | null;
};

/**
 * @amarbugarin-mop TODO: Add description and some missing properties
 * @function Button
 * @description button component that takes in props to configure the appearance.
 * @param {object} onClick - A function that is called when the button is clicked
 * @param {string} children - The text content of the button
 * @param {boolean} disabled - Whether or not the button is disabled
 * @param {string} type - The type of the button (submit, reset, etc.)
 * @param {boolean} isLine - Whether or not the button is a line button
 * @param {node} icon - The icon to be rendered in the button
 * @param {string} size - The size of the button it can be ("sm" | "md" | "md-inline" | "lg" | "xl")
 * @returns {JSX.Element} A React component that renders a button
 */
export default function Button({
  onClick,
  children,
  disabled,
  // className,
  icon,
}: ButtonProps) {
  return (
    <ButtonContainer onClick={onClick} disabled={disabled}>
      {icon ? (
        <FlexContainer>
          {icon}
          {children}
        </FlexContainer>
      ) : (
        children
      )}
    </ButtonContainer>
  );
}
