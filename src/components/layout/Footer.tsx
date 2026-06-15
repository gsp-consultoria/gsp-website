

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#020618]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col items-center gap-10 text-center md:flex-row md:items-start md:justify-between md:text-left">

          <div className="max-w-md">
            <div className="flex items-center justify-center gap-3 md:justify-start">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg text-xl font-bold text-white">
                <img src="./gsp_logo.png" alt="" />
              </div>

              <h3 className="text-xl font-bold text-white">
                GSP Consultoria
              </h3>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-zinc-400">
              Desenvolvemos soluções digitais sob medida para empresas que
              desejam crescer, automatizar processos e aumentar resultados.
            </p>
          </div>

          <nav className="grid grid-cols-1 gap-4 text-center text-sm md:grid-cols-2 md:gap-x-16 md:text-left">
            <a
              href="#servicos"
              className="text-zinc-400 transition-colors hover:text-orange-400"
            >
              Serviços
            </a>

            <a
              href="#tecnologias"
              className="text-zinc-400 transition-colors hover:text-orange-400"
            >
              Tecnologias
            </a>

            <a
              href="#processo"
              className="text-zinc-400 transition-colors hover:text-orange-400"
            >
              Processo
            </a>

            <a
              href="#contato"
              className="text-zinc-400 transition-colors hover:text-orange-400"
            >
              Contato
            </a>

            <a
              href="#sobre"
              className="text-zinc-400 transition-colors hover:text-orange-400"
            >
              Sobre
            </a>
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 border-t border-white/10 pt-6 text-center text-sm text-zinc-500 md:flex-row md:justify-between md:text-left">
          <p>
            © {new Date().getFullYear()} GSP Consultoria. Todos os direitos
            reservados.
          </p>

          <p>
            Desenvolvido com foco em performance e experiência do usuário.
          </p>
        </div>
      </div>
    </footer>
  );
}