import type { PropsWithChildren } from 'react';
import { cn } from '../../lib/utils';

type CardProps = PropsWithChildren<{
  className?: string;
}>;

export function Card({ children, className }: CardProps) {
  return (
    <article
      className={cn(
        'rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-slate-950/20 backdrop-blur',
        className,
      )}
    >
      {children}
    </article>
  );
}
