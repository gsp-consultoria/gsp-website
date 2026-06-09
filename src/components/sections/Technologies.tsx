import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiVite,
  SiDotnet,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiGithub,
} from "react-icons/si";

import { FaAws } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";

const technologies = [
  { icon: SiReact, name: "React" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: FaAws, name: "AWS"},
  { icon: VscAzure, name: "Azure"},
  { icon: SiTailwindcss, name: "Tailwind" },
  { icon: SiVite, name: "Vite" },
  { icon: SiDotnet, name: ".NET" },
  { icon: SiPostgresql, name: "PostgreSQL" },
  { icon: SiDocker, name: "Docker" },
  { icon: SiGit, name: "Git" },
  { icon: SiGithub, name: "GitHub" },
];

export function Technologies() {
  const items = [...technologies, ...technologies];

  return (
    <section
      id="tecnologias"
      className="bg-[#020618] py-32 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <span className="mb-8 block text-sm font-bold uppercase tracking-widest text-zinc-300">
          TECNOLOGIAS
        </span>

        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Stack moderna, pragmática e preparada para escala
          </h2>

          <p className="mt-5 text-lg text-zinc-400">
            As tecnologias são escolhidas conforme o problema,
            priorizando produtividade, segurança,
            manutenibilidade e evolução futura.
          </p>
        </div>

        <div
          className="
            group
            relative
            mt-20
            overflow-hidden
            rounded-full
            border
            border-white/10
            py-8
          "
        >
          {/* Fade esquerda */}
          <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-[#020618] to-transparent" />

          {/* Fade direita */}
          <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-[#020618] to-transparent" />

          <div className="marquee group-hover:[animation-play-state:paused] gap-5">
            {items.map((tech, index) => {
              const Icon = tech.icon;

              return (
                <div
                  key={`${tech.name}-${index}`}
                  className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm
                  transition-all duration-300 hover:border-[#8F4219]/40 hover:bg-[#8F4219]/10 hover:shadow-[0_0_30px_rgba(143,66,25,.25)]
  "
                >
                  <Icon
                    size={48}
                    className="
                      text-zinc-200
                      hover:text-[#8F4219]
                    "
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}