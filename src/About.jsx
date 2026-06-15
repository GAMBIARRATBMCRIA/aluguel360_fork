const { FuelIcon } = require("lucide-react");

export function About(){
    return(
        <div className="max-w-7x1 mx-auto px-6 py-16">
            <h1 className="text-4x1 font-bold text-center mb-8">

            </h1>
            <p className="text-lg text-center text-gray-600 max-w-3x1 mx-auto mb-12">
            O Aluguel360 nasceu com o objetivo de conectar proprietários e inquilinos de forma simples,rápida e segura , oferencendo uma experiêcia moderna na busca e divulgação de imóveis.

            </p>

            <div className="grid md: grid-cols-3 gap-8">
                <div className="bolder rounded-2x1 p-6 shadow-sm">
                    <h2 className="text-x1 font-semibold mb-3">
                        Nossa Missão
                    </h2>
                    <p className="text-gray-600">
                        Facilitar o processo de locação e busca de imóveis,aproximando pessoas e oportunidades.
                    </p>
               </div>

               <div className="border rounded-2x1 p-6 shadow -sm">
                <h2 className="text-x1 font-semibold mb-3">
                    Nossa Vsão
                </h2>
                <p className="text -gray-600">
                    Ser a pricipal plataforma digital para aluguel de imovéis, oferencendo praticidade e confiança.
                </p>

               </div>
               <div className="borde rounded-2x1 p-6 shadow">
                 <h2 className="text-x1 font-semibold mb-3">
                    Nossos Valores 
                 </h2>
                 <p className="text-gray-600">
                    Transparência,inovação,segurança e foco na experiência do usuário.

                 </p>
               </div>
               /</div>

               <section className="mt-16 text-center">
                  <h2 className="text-3x1 font-bold mb-4">
                    Por que escolher o Aluguel360?
                  </h2>
                  <p className="text-gray-600 max-w-2x1 mx-auto">
                    Reunimos tecnologia,praticidade,e um catálogo diversificado para ajudar você a encontrar o imovél ideal de formar rapida e eficiente.
                  </p>

                
               </section>
            
            
        </div>
       
    );
}