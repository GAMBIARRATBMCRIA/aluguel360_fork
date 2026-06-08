import { Link, Outlet, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Search, LogIn } from "lucide-react";
import { IconePerfil } from "../components/IconePerfil";
import { IconeAnunciar } from "../components/IconeAnunciar";
import { IconeNotificacao } from "../components/IconeNotificacao";

export function Layout() {
   const location = useLocation();
  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* HEADER */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col">
            <Link to="/" className="bg-secondary text-white px-4 py-1.5 rounded-full font-bold text-lg inline-block w-max mb-1">
              Aluguel360
            </Link>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <MapPin className="w-3 h-3" /> Informe o seu endereço
            </span>
          </div>

          <div className="flex flex-col items-center flex-1 max-w-2xl w-full">
            <div className="flex w-full mb-3 shadow-sm rounded-md overflow-hidden border focus-within:ring-1 focus-within:ring-primary">
              <Input 
                type="text" 
                placeholder="Busque por cidade, bairro ou tipo de imóvel..." 
                className="border-0 shadow-none focus-visible:ring-0 rounded-r-none h-10 px-4"
              />
              <Button variant="ghost" size="icon" className="h-10 w-12 rounded-l-none border-l bg-white hover:bg-gray-50">
                <Search className="w-5 h-5 text-gray-600" />
              </Button>
            </div>
            <nav className="flex gap-8 text-sm text-muted-foreground">
              <Link to="/" className="text-foreground font-medium">Página inicial</Link>
              <Link to="/contact" className="hover:text-foreground transition-colors">Contate-nos</Link>
              <Link to="/about" className="hover:text-foreground transition-colors">Sobre nós</Link>
            </nav>
          </div>
        <div className="flex flex-col gap-2">

  {/* Primeira linha */}
  <div className="flex items-center gap-4">

    <Button
      variant="ghost"
      className="h-8 px-2 text-sm gap-2 text-foreground hover:text-secondary"
    >
      <IconeAnunciar />
      Quero anunciar
    </Button>

      <Button
        variant="outline"
        className="h-7 px-2 text-xs gap-1 hover:text-secondary"
      >
        <IconePerfil />
        Meu Perfil
      </Button>

  </div>

  {/* Segunda linha */}
  <div className="flex items-center gap-2 pl-2">

    <Button
      variant="ghost"
      className="h-7 px-1 text-xs text-foreground hover:text-secondary"
    >
      Meus Anúncios
    </Button>

      <Button
        variant="ghost"
        className="h-7 px-1 text-xs gap-1 text-foreground hover:text-secondary"
        >
        <IconeNotificacao />
          Minhas Notificações
      </Button>

  </div>

</div>
       </div>
</header>
      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col bg-background">
        <Outlet />
      </main>

      {/* FOOTER */}
      {location.pathname !== "/resultados" && (
      <footer className="bg-primary text-white pt-16 pb-6 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="flex flex-col">
            <div className="bg-secondary text-white px-4 py-1.5 rounded-full font-bold text-lg inline-block w-max mb-6">
              Aluguel360
            </div>
            <p className="text-sm opacity-80 mb-3">Uma plataforma simples e segura para anunciar e encontrar imóveis para aluguel.</p>
            <p className="text-xs opacity-60">Nosso objetivo é padronizar anúncios, melhorar a qualidade das informações.</p>
          </div>
          
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-lg mb-2">Para usuário</h4>
            <Link to="#" className="text-sm opacity-80 hover:opacity-100 hover:underline">Anunciar imóvel</Link>
            <Link to="#" className="text-sm opacity-80 hover:opacity-100 hover:underline">Buscar imóveis</Link>
            <Link to="#" className="text-sm opacity-80 hover:opacity-100 hover:underline">Como funciona</Link>
            <Link to="#" className="text-sm opacity-80 hover:opacity-100 hover:underline">Dicas para um bom anúncio</Link>
            <Link to="#" className="text-sm opacity-80 hover:opacity-100 hover:underline">Central de ajuda</Link>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-lg mb-2">Conta e segurança</h4>
            <Link to="#" className="text-sm opacity-80 hover:opacity-100 hover:underline">Meu perfil</Link>
            <Link to="#" className="text-sm opacity-80 hover:opacity-100 hover:underline">Meus anúncios</Link>
            <Link to="#" className="text-sm opacity-80 hover:opacity-100 hover:underline">Privacidade e Dados</Link>
            <Link to="#" className="text-sm opacity-80 hover:opacity-100 hover:underline">Termos de uso</Link>
            <Link to="#" className="text-sm opacity-80 hover:opacity-100 hover:underline">Política de privacidade</Link>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-lg mb-2">Contato e suporte</h4>
            <p className="text-sm opacity-80 flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5" /> suporte@aluguel360.com.br</p>
            <p className="text-sm opacity-80 flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5" /> Atendimento segunda à sexta, das 9h às 18h</p>
            <p className="text-sm opacity-80 flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5" /> Plataforma disponível em todo o Brasil</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto text-center border-t border-white/10 pt-6 text-xs opacity-60">
          &copy; 2026 Aluguel360 - Todos os direitos reservados. Projeto acadêmico para fins educacionais.
        </div>
      </footer>
      )}
    </div>
  );
}
