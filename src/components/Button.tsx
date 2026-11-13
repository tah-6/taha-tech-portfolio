import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "outline";
export type ButtonSize = "sm" | "md";

const base =
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-colors duration-150 cursor-pointer";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-fg text-bg hover:bg-fg/85",
  secondary: "bg-surface text-fg hover:bg-surface-hover",
  outline: "border border-line-strong text-fg hover:bg-surface",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-8 px-3.5 text-sm",
  md: "h-11 px-5 text-[0.9375rem]",
};

/** Pill button classes, for elements that can't use <Button> directly. */
export function buttonClasses(
  variant: ButtonVariant = "primary",
  size: ButtonSize = "md",
) {
  return `${base} ${variants[variant]} ${sizes[size]}`;
}

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
};

type LinkButtonProps = CommonProps & {
  href: string;
  download?: boolean | string;
  "aria-label"?: string;
};

type NativeButtonProps = CommonProps &
  Omit<ComponentPropsWithoutRef<"button">, "children" | "className"> & {
    href?: undefined;
  };

/**
 * Fully rounded pill (§9). Renders a link when `href` is set, otherwise a
 * <button>. External, mailto and file links open with a plain <a>.
 */
export function Button(props: LinkButtonProps | NativeButtonProps) {
  const { variant = "primary", size = "md", children } = props;
  const className = buttonClasses(variant, size);

  if (props.href !== undefined) {
    const { href, download } = props;
    const label = props["aria-label"];
    const isExternal = /^https?:\/\//.test(href);
    const isPlainAnchor =
      isExternal || href.startsWith("mailto:") || download !== undefined;

    if (isPlainAnchor) {
      return (
        <a
          href={href}
          className={className}
          aria-label={label}
          download={download}
          {...(isExternal
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={className} aria-label={label}>
        {children}
      </Link>
    );
  }

  const { variant: _v, size: _s, children: _c, href: _h, ...rest } = props;
  void _v;
  void _s;
  void _c;
  void _h;
  return (
    <button type="button" className={className} {...rest}>
      {children}
    </button>
  );
}
