import styled from "styled-components";

/* eslint-disable no-shadow */
import { ButtonProps } from "@/components/button";

export const ButtonContainer = styled.button<ButtonProps>`
  cursor: pointer;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  outline: none;
  transition: all 0.2s;
  font-size: 14px;
  min-width: 80px;
  font-weight: 600;
  opacity: ${({ disabled }) => (disabled ? "0.50" : null)};
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.S04};
`;
