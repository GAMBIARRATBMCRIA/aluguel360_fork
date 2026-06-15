import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";

export function BarraFiltros() {
  const estiloBotao =
    "rounded-full px-6 font-medium text-sm text-gray-700 hover:text-secondary hover:border-secondary";

  return (
    <div className="flex items-center gap-3 flex-wrap">
      <span className="text-sm font-medium text-gray-800">
        Ordenar por:
      </span>

      <Button variant="outline" className={estiloBotao}>
        Preços
      </Button>

      <Button variant="outline" className={estiloBotao}>
        Quartos
      </Button>

      <Button variant="outline" className={estiloBotao}>
        Banheiros
      </Button>

      <Button variant="outline" className={estiloBotao}>
        Vagas
      </Button>

      <Button variant="outline" className={estiloBotao}>
        Mobiliado
      </Button>

     <Button
        variant="outline"
        className={`${estiloBotao} flex items-center gap-2`}
      >
        Mais Filtros
      <SlidersHorizontal className="h-4 w-4" />
      </Button>
    </div>
  );
}