import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, BedDouble, Ruler } from "lucide-react";

export function CardImovel({
  imagem,
  titulo,
  descricao,
  preco,
  area,
  quartos,
  endereco,
}) {

  const [favorito, setFavorito] = useState(false);

  return (
   <Card
  className="
    rounded-xl
    overflow-hidden
    hover:shadow-lg
    transition-all
    hover:-translate-y-1
    duration-300
    border-border
    group
    relative
  "
>

      <div className="relative h-64 overflow-hidden">

        <img
          src={imagem}
          alt={titulo}
          className="
            w-full
            h-full
            object-cover
          "
        />

        <button
          onClick={() => setFavorito(!favorito)}
          className="
            absolute
            top-4
            right-4
            flex
            items-center
            justify-center
            w-10
            h-10
            rounded-full
            bg-white/90
            hover:bg-white
            transition
          "
        >

         <Heart
  className={`
    w-5
    h-5
    transition-colors
    duration-300
    ${
      favorito
        ? "text-red-500"
        : "text-gray-400"
    }
  `}
/>

        </button>

      </div>

      <CardContent className="p-5">

        <h3 className="text-lg font-medium">
          {titulo}
        </h3>
    
        <p className="text-sm text-gray-500 mt-2">
          {descricao}
        </p>

        <p className="font-semibold text-2xl mt-4">
          R$ {preco}
        </p>

       <div className="flex gap-4 mt-4 text-sm text-muted-foreground border-b pb-4 mb-4">
        <div className="flex items-center gap-1">
            <Ruler className="w-4 h-4" />
             <span>{area}m²</span>
        </div>

        <div className="flex items-center gap-1">
         <BedDouble className="w-4 h-4" />
          <span>{quartos} quartos</span>
        </div>
        </div>

        <div className="mt-4 text-sm text-gray-500">
          {endereco}
        </div>

      </CardContent>

    </Card>
  );
}