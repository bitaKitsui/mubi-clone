import { ComponentPropsWithoutRef, FC, ReactNode } from "react";
import styled, { css } from "styled-components";
import { palette } from "../../const/colorPalette";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
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
  disabled: boolean;
  size: "small" | "medium" | "large";
  children: ReactNode;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  onClick?: () => void;
};

export const Button: FC<ButtonProps> = ({
  type = "button",
  variant = "text",
  color = "primary",
  disabled = false,
  size = "medium",
  children,
  startIcon,
  endIcon,
  onClick,
}) => {
  return (
    <StyledButton
      type={type}
      variant={variant}
      color={color}
      disabled={disabled}
      size={size}
      onClick={onClick}
    >
      {startIcon && <StyledStartIcon role="img">{startIcon}</StyledStartIcon>}
      {children}
      {endIcon && <StyledEndIcon role="img">{endIcon}</StyledEndIcon>}
    </StyledButton>
  );
};

const StyledButton = styled.button<ButtonProps>`
  border: 0;
  color: #0a1929;
  position: relative;
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
    const secondary = color === "secondary";
    const inherit = color === "inherit";
    const success = color === "success";
    const error = color === "error";
    const info = color === "info";
    const warning = color === "warning";
    const textButton = variant === "text";
    const containedButton = variant === "contained";
    const outlinedButton = variant === "outlined";

    const primaryText = primary && textButton;
    const primaryContained = primary && containedButton;
    const primaryOutlined = primary && outlinedButton;
    const secondaryText = secondary && textButton;
    const secondaryContained = secondary && containedButton;
    const secondaryOutlined = secondary && outlinedButton;
    const inheritText = inherit && textButton;
    const inheritContained = inherit && containedButton;
    const inheritOutlined = inherit && outlinedButton;
    const successText = success && textButton;
    const successContained = success && containedButton;
    const successOutlined = success && outlinedButton;
    const errorText = error && textButton;
    const errorContained = error && containedButton;
    const errorOutlined = error && outlinedButton;
    const infoText = info && textButton;
    const infoContained = info && containedButton;
    const infoOutlined = info && outlinedButton;
    const warningText = warning && textButton;
    const warningContained = warning && containedButton;
    const warningOutlined = warning && outlinedButton;

    if (primaryText) {
      return css`
        background-color: transparent;
        color: ${palette.primary.main};

        &:hover {
          background-color: rgba(144, 202, 249, 0.08);
        }

        &:active {
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
        color: ${palette.primary.main};

        &:hover {
          background-color: rgba(144, 202, 249, 0.08);
          border: 1px solid ${palette.primary.dark};
        }
      `;
    }

    if (secondaryText) {
      return css`
        background-color: transparent;
        color: ${palette.secondary.main};

        &:hover {
          background-color: rgba(144, 202, 249, 0.08);
        }
      `;
    }

    if (secondaryContained) {
      return css`
        background-color: ${palette.secondary.main};

        &:hover {
          background-color: ${palette.secondary.dark};
          box-shadow: rgb(0 0 0 / 20%) 0 2px 4px -1px,
            rgb(0 0 0 / 14%) 0 4px 5px 0px, rgb(0 0 0 / 12%) 0 1px 10px 0;
        }
      `;
    }

    if (secondaryOutlined) {
      return css`
        background-color: transparent;
        border: 1px solid ${palette.secondary.main};
        color: ${palette.secondary.main};

        &:hover {
          background-color: rgba(144, 202, 249, 0.08);
          border: 1px solid ${palette.secondary.dark};
        }
      `;
    }

    if (inheritText) {
      return css`
        background-color: inherit;
        color: currentColor;

        &:hover {
          background-color: rgba(144, 202, 249, 0.08);
        }
      `;
    }

    if (inheritContained) {
      return css`
        color: inherit;
        background-color: #e0e0e0;

        &:hover {
          background-color: rgba(0, 0, 0, 0.04);
          box-shadow: rgb(0 0 0 / 20%) 0 2px 4px -1px,
            rgb(0 0 0 / 14%) 0 4px 5px 0px, rgb(0 0 0 / 12%) 0 1px 10px 0;
        }
      `;
    }

    if (inheritOutlined) {
      return css`
        background-color: transparent;
        border: 1px solid currentColor;
        color: inherit;

        &:hover {
          background-color: rgba(0, 0, 0, 0.04);
        }
      `;
    }

    if (successText) {
      return css`
        background-color: transparent;
        color: ${palette.success.main};

        &:hover {
          background-color: rgba(144, 202, 249, 0.08);
        }
      `;
    }

    if (successContained) {
      return css`
        background-color: ${palette.success.main};

        &:hover {
          background-color: ${palette.success.dark};
          box-shadow: rgb(0 0 0 / 20%) 0 2px 4px -1px,
            rgb(0 0 0 / 14%) 0 4px 5px 0px, rgb(0 0 0 / 12%) 0 1px 10px 0;
        }
      `;
    }

    if (successOutlined) {
      return css`
        background-color: transparent;
        border: 1px solid ${palette.success.main};
        color: ${palette.success.main};

        &:hover {
          background-color: rgba(144, 202, 249, 0.08);
          border: 1px solid ${palette.success.dark};
        }
      `;
    }

    if (errorText) {
      return css`
        background-color: transparent;
        color: ${palette.error.main};

        &:hover {
          background-color: rgba(144, 202, 249, 0.08);
        }
      `;
    }

    if (errorContained) {
      return css`
        background-color: ${palette.error.main};

        &:hover {
          background-color: ${palette.error.dark};
          box-shadow: rgb(0 0 0 / 20%) 0 2px 4px -1px,
            rgb(0 0 0 / 14%) 0 4px 5px 0px, rgb(0 0 0 / 12%) 0 1px 10px 0;
        }
      `;
    }

    if (errorOutlined) {
      return css`
        background-color: transparent;
        border: 1px solid ${palette.error.main};
        color: ${palette.error.main};

        &:hover {
          background-color: rgba(144, 202, 249, 0.08);
          border: 1px solid ${palette.error.dark};
        }
      `;
    }

    if (infoText) {
      return css`
        background-color: transparent;
        color: ${palette.info.main};

        &:hover {
          background-color: rgba(144, 202, 249, 0.08);
        }
      `;
    }

    if (infoContained) {
      return css`
        background-color: ${palette.info.main};

        &:hover {
          background-color: ${palette.info.dark};
          box-shadow: rgb(0 0 0 / 20%) 0 2px 4px -1px,
            rgb(0 0 0 / 14%) 0 4px 5px 0px, rgb(0 0 0 / 12%) 0 1px 10px 0;
        }
      `;
    }

    if (infoOutlined) {
      return css`
        background-color: transparent;
        border: 1px solid ${palette.info.main};
        color: ${palette.info.main};

        &:hover {
          background-color: rgba(144, 202, 249, 0.08);
          border: 1px solid ${palette.info.dark};
        }
      `;
    }

    if (warningText) {
      return css`
        background-color: transparent;
        color: ${palette.warning.main};

        &:hover {
          background-color: rgba(144, 202, 249, 0.08);
        }
      `;
    }

    if (warningContained) {
      return css`
        background-color: ${palette.warning.main};

        &:hover {
          background-color: ${palette.warning.dark};
          box-shadow: rgb(0 0 0 / 20%) 0 2px 4px -1px,
            rgb(0 0 0 / 14%) 0 4px 5px 0px, rgb(0 0 0 / 12%) 0 1px 10px 0;
        }
      `;
    }

    if (warningOutlined) {
      return css`
        background-color: transparent;
        border: 1px solid ${palette.warning.main};
        color: ${palette.warning.main};

        &:hover {
          background-color: rgba(144, 202, 249, 0.08);
          border: 1px solid ${palette.warning.dark};
        }
      `;
    }
  }}
  ${({ disabled, variant }) => {
    if (disabled && variant === "text") {
      return css`
        pointer-events: none;
        color: rgba(255, 255, 255, 0.3);
      `;
    }

    if (disabled && variant === "contained") {
      return css`
        pointer-events: none;
        color: rgba(255, 255, 255, 0.3);
        background-color: rgba(255, 255, 255, 0.12);
      `;
    }

    if (disabled && variant === "outlined") {
      return css`
        pointer-events: none;
        color: rgba(255, 255, 255, 0.3);
        border: 1px solid rgba(255, 255, 255, 0.12); ;
      `;
    }
  }}
  ${({ size, variant }) => {
    const small = size === "small";
    const medium = size === "medium";
    const large = size === "large";
    const textButton = variant === "text";
    const containedButton = variant === "contained";
    const outlinedButton = variant === "outlined";

    const smallText = small && textButton;
    const mediumText = medium && textButton;
    const largeText = large && textButton;
    const smallContained = small && containedButton;
    const mediumContained = medium && containedButton;
    const largeContained = large && containedButton;
    const smallOutlined = small && outlinedButton;
    const mediumOutlined = medium && outlinedButton;
    const largeOutlined = large && outlinedButton;

    if (smallText) {
      return css`
        font-size: 0.8125em;
        padding: 4px 5px;
      `;
    }

    if (mediumText) {
      return css`
        font-size: 0.875em;
        padding: 6px 8px;
      `;
    }

    if (largeText) {
      return css`
        font-size: 0.9375em;
        padding: 8px 11px;
      `;
    }

    if (smallContained) {
      return css`
        font-size: 0.8125em;
        padding: 3px 9px;
      `;
    }

    if (mediumContained) {
      return css`
        font-size: 0.875em;
        padding: 5px 15px;
      `;
    }

    if (largeContained) {
      return css`
        font-size: 0.9375em;
        padding: 7px 21px;
      `;
    }

    if (smallOutlined) {
      return css`
        font-size: 0.8125em;
        padding: 4px 10px;
      `;
    }

    if (mediumOutlined) {
      return css`
        font-size: 0.875em;
        padding: 6px 16px;
      `;
    }

    if (largeOutlined) {
      return css`
        font-size: 0.9375em;
        padding: 8px 22px;
      `;
    }
  }}
`;

const StyledStartIcon = styled.span`
  margin-right: 8px;
`;

const StyledEndIcon = styled.span`
  margin-left: 8px;
`;
