# 📋 Guia de Componentes Reutilizáveis

## ButtonForms - Botão Padronizado

O componente `ButtonForms` foi criado e corrigido para ser utilizado em toda a aplicação. Ele oferece um botão estilizado com variantes pré-definidas.

### Localização
📁 `src/components/ui/button.jsx`

### Variantes Disponíveis

| Variante | Cor | Uso |
|----------|-----|-----|
| `primary` (padrão) | Verde (#2F646C) | Botões de ação principal |
| `danger` | Vermelho (#FF6B6B) | Botões de cancelar/rejeitar |
| `subtle` | Ciano (#CAEBEC) | Botões secundários/voltar |

### Exemplo de Uso

```jsx
import { ButtonForms } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Botão simples com texto
<ButtonForms type="submit">
  Enviar
</ButtonForms>

// Botão com ícone
<ButtonForms variant="danger">
  <Trash className="mr-2 h-4 w-4" />
  Deletar
</ButtonForms>

// Botão como Link (use asChild)
<ButtonForms asChild>
  <Link to="/home">
    Voltar para Home
  </Link>
</ButtonForms>

// Botão com tamanho customizado
<ButtonForms 
  variant="subtle" 
  className="w-full sm:w-[173px]"
>
  &lt;&lt; Voltar
</ButtonForms>
```

### Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `variant` | `"primary" \| "danger" \| "subtle"` | `"primary"` | Estilo do botão |
| `className` | `string` | - | Classes CSS adicionais |
| `asChild` | `boolean` | `false` | Se true, renderiza como Slot (para Links/NavLinks) |
| `children` | `ReactNode` | - | Conteúdo do botão |
| `ref` | `Ref` | - | Referência do elemento |
| `...props` | - | - | Qualquer prop de botão HTML |

### Telas que já usam este componente
- ✅ [CadastroUsuario.jsx](src/pages/CadastroUsuario.jsx)
- ✅ [Login.jsx](src/pages/Login.jsx)

### Melhorias Implementadas
- ✅ Corrigido o bug onde `children` não era destructurado
- ✅ Adicionado suporte a `asChild` para uso com Links
- ✅ Padronizado em todas as telas de autenticação
- ✅ Removido código duplicado (FormButton comentado)

---

**Última atualização:** 2026-06-16
