import { FC } from "react";
import styled, { css } from "styled-components";
import { palette } from "../const/colorPalette";

type ButtonProps = JSX.IntrinsicElements["button"] & {
  variant: "text" | "contained" | "outlined";
  color:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning"
    | string;
};

export const Button: FC<ButtonProps> = ({
  type = "button",
  variant = "text",
  color = "primary",
}) => {
  return (
    <StyledButton type={type} variant={variant} color={color}>
      ButtonButtonButtonButtonButtonButtonButton
    </StyledButton>
  );
};

const StyledButton = styled.button<ButtonProps>`
  border: 0;
  color: #0a1929;
  position: relative;
  font-size: 0.875rem;
  font-weight: bold;
  line-height: 1.75;
  cursor: pointer;
  min-width: 64px;
  border-radius: 4px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  ${({ variant }) => {
    switch (variant) {
      case "text":
        return css`
          padding: 6px 8px;
        `;
      case "contained":
        return css`
          padding: 6px 16px;
          box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%);
        `;
      case "outlined":
        return css`
          padding: 5px 15px;
        `;
    }
  }}
  ${({ variant, color }) => {
    const primary = color === "primary";

    const primaryText = primary && variant === "text";
    const primaryContained = primary && variant === "contained";
    const primaryOutlined = primary && variant === "outlined";

    if (primaryText) {
      return css`
        background-color: transparent;
        color: ${palette.primary.dark};

        &:hover {
          background-color: rgba(144, 202, 249, 0.08);
        }
      `;
    }

    if (primaryContained) {
      return css`
        background-color: ${palette.primary.main};

        &:hover {
          background-color: ${palette.primary.dark};
          box-shadow: rgb(0 0 0 / 20%) 0 2px 4px -1px,
            rgb(0 0 0 / 14%) 0 4px 5px 0px, rgb(0 0 0 / 12%) 0 1px 10px 0;
        }
      `;
    }

    if (primaryOutlined) {
      return css`
        background-color: transparent;
        border: 1px solid ${palette.primary.main};
        color: ${palette.primary.dark};

        &:hover {
          background-color: rgba(144, 202, 249, 0.08);
          border: 1px solid rgb(144, 202, 249);
        }
      `;
    }
  }}
`;
