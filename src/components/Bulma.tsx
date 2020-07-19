import * as React from "react";
import cx from "classnames";

export type BulmaColour =
  | "primary"
  | "link"
  | "info"
  | "success"
  | "warning"
  | "danger"
  | "light"
  | "dark"
  | "text";

export type BulmaSize = "small" | "medium" | "large";

const bulmaToggle = (input?: any): string =>
  input ? cx({ [`is-${input}`]: true }) : "";

export const bulmaColour = (input?: BulmaColour): string => bulmaToggle(input);
export const bulmaSize = (input?: BulmaSize): string => bulmaToggle(input);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  colour?: BulmaColour;
  size?: BulmaSize;
} & {
  fullwidth?: boolean;
  outlined?: boolean;
  inverted?: boolean;
  rounded?: boolean;
  loading?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  fullwidth,
  outlined,
  inverted,
  rounded,
  loading,
  className,
  size,
  colour,
  ...rest
}) => (
  <button
    className={cx("button", className, bulmaSize(size), bulmaColour(colour), {
      "is-fullwidth": fullwidth,
      "is-outlined": outlined,
      "is-inverted": inverted,
      "is-rounded": rounded,
      "is-loading": loading,
    })}
    {...rest}
  />
);

type ButtonsProps = {
  grouped?: boolean;
  right?: boolean;
  centered?: boolean;
  addOns?: boolean;
  className?: string;
};

export const Buttons: React.FC<ButtonsProps> = ({
  grouped,
  right,
  centered,
  addOns,
  className,
  ...rest
}) => (
  <div
    className={cx("buttons", className, {
      "is-grouped": grouped,
      "is-right": right,
      "is-centered": centered,
      "has-addons": addOns,
    })}
    {...rest}
  />
);

type ColumnsProps = {
  centered?: boolean;
  vcentered?: boolean;
  gapless?: boolean;
  multiline?: boolean;
  className?: string;
};

export const Columns: React.FC<ColumnsProps> = ({
  children,
  centered,
  vcentered,
  gapless,
  multiline,
  className,
}) => (
  <div
    className={cx("columns", className, {
      "is-centered": centered,
      "is-vcentered": vcentered,
      "is-gapless": gapless,
      "is-multiline": multiline,
    })}
  >
    {children}
  </div>
);

type ColumnProps = {
  className?: string;
  span?: number;
  narrow?: boolean;
};

export const Column: React.FC<ColumnProps> = ({
  span,
  narrow,
  children,
  className,
}) => (
  <div
    className={cx("column", className, {
      "is-narrow": narrow,
      [`is-${span}`]: span,
    })}
  >
    {children}
  </div>
);

type BaseProps = React.BaseHTMLAttributes<HTMLElement>;

export const Section: React.FC<BaseProps> = ({ className, ...rest }) => (
  <section className={cx("section", className)} {...rest} />
);

export const Container: React.FC<BaseProps> = ({ className, ...rest }) => (
  <div className={cx("container", className)} {...rest} />
);

export const Box: React.FC<BaseProps> = ({ className, ...rest }) => (
  <div className={cx("box", className)} {...rest} />
);

type MessageProps = BaseProps & {
  title?: string;
  colour?: BulmaColour;
};
export const Message: React.FC<MessageProps> = ({
  className,
  title,
  children,
  colour,
  ...rest
}) => (
  <div className={cx("message", className, bulmaColour(colour))} {...rest}>
    {title && <div className="message-header">{title}</div>}
    <div className="message-body">{children}</div>
  </div>
);

export const Content: React.FC<BaseProps> = ({ className, ...rest }) => (
  <div className={cx("content", className)} {...rest} />
);
