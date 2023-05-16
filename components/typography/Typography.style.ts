/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components";
import { TypographyProps } from ".";

const TypographyContainer = styled.div<TypographyProps>`
  font-weight: inherit;
  overflow-wrap: break-word;
`;
/* ${({ theme, variant }) => {
    switch (variant) {
      case "gray":
        return `
          color:${theme.palette.textColor["text-dark-gray"]};
         
        `;
      case "white":
      default:
        return `
          color:${theme.palette.textColor["text-white"]};
           }
        `;

      case "primary":
        return ` 
        color:${theme.palette.primary["teal-900"]};

        `;
    }
  }} */

export default TypographyContainer;
