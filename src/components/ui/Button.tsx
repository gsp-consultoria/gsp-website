import type { AnchorHTMLAttributes, ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { cn } from '../../lib/utils';

const variants = {
  primary:
    'bg-[#fe701a] text-white shadow-lg shadow-orange-950/30 hover:bg-orange-500 focus-visible:outline-orange-200',
  secondary:
    'border border-white/15 bg-white/10 text-white hover:bg-white/15 focus-visible:outline-white',
  ghost: 'text-white hover:bg-white/10 focus-visible:outline-white',
};

type Variant = keyof typeof variants;

type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: Variant;
  }
>;

export function Button({ children, className, variant = 'primary', ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

type ButtonLinkProps = PropsWithChildren<
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    variant?: Variant;
  }
>;

export function ButtonLink({
  children,
  className,
  rel,
  target,
  variant = 'primary',
  ...props
}: ButtonLinkProps) {
  const safeRel =
    target === '_blank'
      ? Array.from(new Set([...(rel?.split(/\s+/).filter(Boolean) ?? []), 'noopener'])).join(' ')
      : rel;

  return (
    <a
      className={cn(
        'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
        variants[variant],
        className,
      )}
      rel={safeRel}
      target={target}
      {...props}
    >
      {children}
    </a>
  );
}
