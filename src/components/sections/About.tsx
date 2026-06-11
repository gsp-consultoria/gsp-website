import { motion } from "framer-motion";

const pillars = [
  "Diagnóstico claro",
  "Entrega incremental",
  "Código sustentável",
];

export function About() {
  return (
    <section
      id="sobre"
      className="relative overflow-hidden bg-[#020618] py-32"
    >

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(143,66,25,0.12),transparent_35%)]" />

      <div className="container relative z-10 mx-auto px-6">
        

        <div className="grid items-center gap-16 lg:grid-cols-2">
      
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="max-w-xl text-5xl font-bold leading-tight text-white">
              Tecnologia com visão
              <span className="block text-[#8F4219]">
                de negócio
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-zinc-400">
              A GSP Consultoria combina engenharia de software,
              arquitetura e experiência prática em sistemas
              corporativos para construir soluções úteis,
              sustentáveis e preparadas para crescer.
            </p>

            <div className="mt-10 flex flex-wrap gap-8">
              <div>
                <p className="text-4xl font-bold text-[#8F4219]">
                  +5
                </p>
                <span className="text-zinc-500">
                  anos de experiência
                </span>
              </div>

              <div>
                <p className="text-4xl font-bold text-[#8F4219]">
                  100%
                </p>
                <span className="text-zinc-500">
                  código próprio
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
              p-8
              backdrop-blur-sm
            "
          >
            <div className="absolute -top-20 right-0 h-52 w-52 rounded-full bg-[#8F4219]/10 blur-3xl" />

            <p className="relative z-10 text-xl leading-relaxed text-zinc-300">
              O foco é entregar software que resolva problemas
              concretos: reduzir retrabalho, integrar sistemas,
              melhorar controle operacional e criar bases técnicas
              sólidas para evolução contínua.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4">
              {pillars.map((pillar) => (
                <div
                  key={pillar}
                  className="
                    flex
                    aspect-square
                    flex-col
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-[#01040f]
                    text-center
                    transition-all
                    duration-300
                    hover:border-[#020618]/50
                    hover:shadow-[0_0_30px_rgba(143,66,25,.2)]
                  "
                >

                  <span className="px-4 text-xl font-medium text-white">
                    {pillar}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}