export function About() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="bg-[#356F75] text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Sobre o Aluguel360
          </h1>

          <p className="max-w-3xl mx-auto text-lg opacity-90">
            Conectamos proprietários e inquilinos de forma simples,
            rápida e segura, oferecendo uma experiência moderna na
            busca e divulgação de imóveis.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-8 shadow-md border border-gray-100">
            <h2 className="text-2xl font-bold text-[#356F75] mb-4">
              Nossa Missão
            </h2>

            <p className="text-gray-600">
              Facilitar o processo de locação e busca de imóveis,
              aproximando pessoas e oportunidades.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-md border border-gray-100">
            <h2 className="text-2xl font-bold text-[#356F75] mb-4">
              Nossa Visão
            </h2>

            <p className="text-gray-600">
              Ser a principal plataforma digital para aluguel de
              imóveis, oferecendo praticidade e confiança.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-md border border-gray-100">
            <h2 className="text-2xl font-bold text-[#356F75] mb-4">
              Nossos Valores
            </h2>

            <p className="text-gray-600">
              Transparência, inovação, segurança e foco na experiência
              do usuário.
            </p>
          </div>
        </div>
      </section>

      {/* Destaque */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-[#356F75] rounded-3xl text-white p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Por que escolher o Aluguel360?
          </h2>

          <p className="max-w-3xl mx-auto opacity-90 mb-8">
            Reunimos tecnologia, praticidade e um catálogo
            diversificado para ajudar você a encontrar o imóvel ideal.
          </p>

          <button className="bg-[#58D4D2] hover:opacity-90 text-white px-8 py-3 rounded-xl font-semibold transition">
            Explorar Imóveis
          </button>
        </div>
      </section>
    </div>
  );
}