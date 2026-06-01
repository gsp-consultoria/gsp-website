import { cn } from '../../lib/utils';

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionTitle({ eyebrow, title, description, className }: SectionTitleProps) {
  return (
    <div className={cn('mx-auto max-w-3xl text-center', className)}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#fe701a]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">{title}</h2>
      {description ? <p className="mt-5 text-base leading-8 text-slate-300">{description}</p> : null}
    </div>
  );
}
