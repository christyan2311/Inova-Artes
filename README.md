# Inova Artes - Site Institucional

Site institucional desenvolvido em React para a marmoraria Inova Artes, focado em apresentar os serviços da empresa de forma elegante e profissional.

## 🚀 Tecnologias Utilizadas

- **React 18** - Framework JavaScript para construção da interface
- **TypeScript** - Tipagem estática para maior confiabilidade do código
- **Tailwind CSS** - Framework CSS utilitário para estilização
- **Lucide React** - Biblioteca de ícones
- **Vite** - Build tool e servidor de desenvolvimento

## 🎨 Características do Projeto

### Design
- **Paleta de cores**: Laranja (#F97316, #EA580C), Branco (#FFFFFF) e Preto (#111827)
- **Layout responsivo** adaptado para desktop, tablet e mobile
- **Animações suaves** em hover, transições e micro-interações
- **Tipografia moderna** com hierarquia visual clara

### Funcionalidades
- **Navegação SPA** (Single Page Application) entre seções
- **Formulário de contato** simulado (front-end apenas)
- **Galeria interativa** com modal para visualização das imagens
- **Filtros por categoria** na galeria
- **Botão flutuante WhatsApp** para contato direto
- **Design totalmente responsivo**

## 📁 Estrutura do Projeto

```
src/
├── componentes/
│   ├── Cabecalho.tsx      # Navegação principal
│   ├── PaginaInicial.tsx  # Banner e apresentação inicial
│   ├── SobreNos.tsx       # História, missão, visão e valores
│   ├── Servicos.tsx       # Lista de serviços oferecidos
│   ├── Galeria.tsx        # Portfólio de projetos
│   ├── Contato.tsx        # Formulário e informações de contato
│   └── Rodape.tsx         # Rodapé com links e contatos
├── App.tsx                # Componente principal da aplicação
├── main.tsx              # Ponto de entrada da aplicação
└── index.css             # Estilos globais do Tailwind
```

## 🛠️ Como Executar o Projeto

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação e Execução

1. **Clone o repositório** (ou baixe os arquivos do projeto)
   ```bash
   git clone <url-do-repositorio>
   cd inova-artes-site
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o projeto em modo desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Acesse no navegador**
   ```
   http://localhost:5173
   ```

### Build para Produção

Para criar uma versão otimizada para produção:

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

## 🖼️ Substituição de Imagens

As imagens utilizadas no site são provenientes do **Pexels** para fins demonstrativos. Para personalizar com as imagens reais da marmoraria:

### Locais onde substituir as imagens:

1. **Banner Principal** (`PaginaInicial.tsx`, linha ~11):
   ```typescript
   backgroundImage: `url('SUA_IMAGEM_AQUI')`
   ```

2. **Seção Sobre Nós** (`SobreNos.tsx`, linha ~38):
   ```typescript
   src="SUA_IMAGEM_AQUI"
   ```

3. **Galeria de Projetos** (`Galeria.tsx`, array `projetos`):
   ```typescript
   imagem: 'SUA_IMAGEM_AQUI'
   ```

### Recomendações para as imagens:
- **Formato**: JPG ou PNG
- **Tamanho recomendado**: 
  - Banner: 1920x1080px ou superior
  - Galeria: 800x600px mínimo
  - Sobre nós: 800x600px
- **Qualidade**: Alta resolução para melhor apresentação
- **Otimização**: Comprima as imagens para web (80-90% de qualidade)

### Onde colocar as imagens:
1. Crie uma pasta `public/imagens/` na raiz do projeto
2. Coloque suas imagens nesta pasta
3. Referencie como `/imagens/nome-da-imagem.jpg`

## 📱 Contatos para Personalização

Para personalizar os dados de contato da empresa, edite os seguintes arquivos:

### Números de telefone e WhatsApp:
- `Contato.tsx` - Seção de informações de contato
- `Rodape.tsx` - Links no rodapé
- Substitua `5511999998888` pelo número real

### E-mail:
- `Contato.tsx` e `Rodape.tsx`
- Substitua `contato@inovaartes.com.br` pelo e-mail real

### Endereço:
- `Contato.tsx` e `Rodape.tsx`
- Substitua "Rua das Pedras, 123" pelo endereço real

### Redes sociais:
- `Rodape.tsx`
- Substitua `https://instagram.com/inovaartes` pela URL real

## 🚀 Deploy

O projeto está pronto para ser hospedado em qualquer plataforma de hosting estático:

### Netlify
1. Faça build do projeto: `npm run build`
2. Faça upload da pasta `dist/` no Netlify
3. Configure o domínio personalizado (opcional)

### Vercel
1. Conecte o repositório ao Vercel
2. O deploy será automático a cada commit

### Outras plataformas
- GitHub Pages
- Firebase Hosting
- AWS S3 + CloudFront

## 📄 Licença

Este projeto foi desenvolvido para a Inova Artes Marmoraria. Todos os direitos reservados.

## 🤝 Suporte

Para dúvidas sobre o projeto ou necessidade de modificações, entre em contato através dos canais oficiais da Inova Artes.

---

**Desenvolvido com ❤️ para a Inova Artes Marmoraria**