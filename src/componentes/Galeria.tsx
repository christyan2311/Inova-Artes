import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GaleriaProps {
  id: string;
  onNavigate: (secaoId: string) => void;
}

const Galeria: React.FC<GaleriaProps> = ({ id, onNavigate }) => {
  // Array com imagens do portfólio (usando Pexels - substituir pelas imagens reais da marmoraria)
  const projetos = [
    //Bancadas
    {
      id: 1,
      titulo: "Bancada Iluminada em Ônix para Bar",
      categoria: "Bancadas",
      imagem:
        "../../public/images/area_de_lazer/Balcão Iluminado em Ônix para Bar.png",
      descricao:
        "Este projeto de design de interiores apresenta um balcão central imponente, revestido em ônix retroiluminado, criando um ponto focal dramático e elegante. A iluminação interna realça a translucidez e os veios naturais da pedra, conferindo um ambiente sofisticado e acolhedor, ideal para bares ou áreas de entretenimento de alto padrão. Complementado por uma estante com bebidas e detalhes em tons vibrantes, este espaço exala modernidade e exclusividade.",
    },
    {
      id: 13,
      titulo: " Bar de Bar Retroiluminado em Ônix Translúcido",
      categoria: "Bancadas",
      imagem:
        "../../public/images/area_de_lazer/Bar Retroiluminado em Ônix Translúcido.jpg",
      descricao:
        "Fabricação e instalação de um elegante bar retroiluminado em ônix translúcido, destacando os padrões naturais e a luminosidade única da pedra. Este design proporciona um ponto focal sofisticado e um ambiente acolhedor, ideal para espaços de entretenimento e eventos de alto padrão.",
    },
    {
      id: 8,
      titulo: "Bancada de Cozinha / Área Gourmet em Mármore com Cuba Esculpida",
      categoria: "Bancadas",
      imagem: "../../public/images/bancadas/Bancada de Cozinha.jpeg",
      descricao:
        "Apresentamos a instalação de uma bancada robusta e elegante em mármore cinza com veios marcantes, featuring uma cuba esculpida integrada. O design inclui um frontão alto e uma área de trabalho estendida, ideal para cozinhas ou áreas gourmet que buscam sofisticação, durabilidade e um toque contemporâneo.",
    },
    {
      id: 27,
      titulo: " Bancada de Granito Preto com Cuba Esculpida",
      categoria: "Bancadas",
      imagem:
        "../../public/images/bancadas/Bancada de Granito Preto com Cuba Esculpida.png",
      descricao:
        "Bancada de granito Preto com cuba esculpida e prateleira integrada. O acabamento polido oferece elegância e funcionalidade duradoura para cozinhas ou áreas de serviço, destacando a beleza natural da pedra.",
    },
    {
      id: 28,
      titulo: " Bancada de Serviço em Quartzo Cinza com Cuba Esculpida",
      categoria: "Bancadas",
      imagem:
        "../../public/images/bancadas/Bancada de Serviço em Quartzo Cinza com Cuba Esculpida.png",
      descricao:
        "Instalação de bancada de serviço em quartzo cinza claro, projetada com cuba esculpida e uma prateleira inferior integrada. Este design oferece funcionalidade e um acabamento minimalista, ideal para lavabos ou áreas de serviço que buscam otimização de espaço e durabilidade.",
    },
    {
      id: 32,
      titulo: " Bancada em Granito Preto com Cuba",
      categoria: "Bancadas",
      imagem:
        "../../public/images/bancadas/Bancada em Granito Preto  com Cuba.png",
      descricao:
        ' Instalação de bancada em granito Preto  em formato de "L", com acabamento polido e cuba de aço inoxidável embutida. O granito, conhecido por sua durabilidade e resistência, oferece um visual elegante e funcional para cozinhas e áreas de serviço, harmonizando com o revestimento de parede moderno e o ambiente minimalista.',
    },
    {
      id: 36,
      titulo: "Bancada Dupla em Granito Preto com Cubas de Inox",
      categoria: "Bancadas",
      imagem:
        "../../public/images/bancadas/Bancada em Granito Preto com Cubas de Inox.png",
      descricao:
        " Instalação de uma elegante bancada dupla em granito preto, equipada com duas cubas de inox. Este design otimiza o espaço da cozinha ou área de serviço, oferecendo funcionalidade e durabilidade. O contraste do granito escuro com a parede clara proporciona um visual moderno e sofisticado, ideal para ambientes contemporâneos.",
    },
    {
      id: 24,
      titulo: "Bancada Funcional em Quartzito Cinza",
      categoria: "Bancadas",
      imagem: "../../public/images/bancadas/Bancada em Quartzito Cinza.jpg",
      descricao:
        "Instalação de bancada em quartzito cinza na área de serviço, projetada para oferecer durabilidade e praticidade. O design monolítico com caimento para o chão e as torneiras embutidas maximizam o espaço útil, criando um ambiente funcional e esteticamente clean, ideal para as demandas de uma lavanderia moderna.",
    },
    {
      id: 16,
      titulo: " Bancada em Quartzo Stellar Black",
      categoria: "Bancadas",
      imagem:
        "../../public/images/bancadas/Bancada em Quartzo Stellar Black.png",
      descricao:
        'Instalação de bancada em quartzo Stellar Black com formato "U". O material de alta resistência e baixa porosidade oferece durabilidade e fácil manutenção, adicionando luxo e sofisticação à cozinha moderna.',
    },
    {
      id: 39,
      titulo: " Instalação de Bancada em Quartzo",
      categoria: "Bancadas",
      imagem: "../../public/images/bancadas/Bancada em Quartzo.png",
      descricao:
        'Projeto e instalação de bancada em quartzo branco com detalhes salpicados, equipada com cuba de lavagem e cooktop. O design funcional complementa o revestimento cerâmico tipo "subway tile", criando um ambiente moderno e de fácil manutenção para cozinhas e áreas gourmet.',
    },
    {
      id: 42,
      titulo: "Bancada Suspensa com Cuba Esculpida e Design Minimalista",
      categoria: "Bancadas",
      imagem:
        "../../public/images/bancadas/Bancada Suspensa com Cuba Esculpida e Design Minimalista.png",
      descricao:
        "Bancada suspensa de material sólido branco, com cuba esculpida integrada e furação para torneira de parede. O design minimalista utiliza as laterais como suporte, promovendo uma estética limpa e moderna. A solução é ideal para otimizar o espaço, facilitar a limpeza e adicionar sofisticação ao banheiro.",
    },
    {
      id: 40,
      titulo: " Bancada Suspensa com Cuba Esculpida em Mármore Verde Exótico",
      categoria: "Bancadas",
      imagem:
        "../../public/images/bancadas/Bancada Suspensa com Cuba Esculpida em Mármore Verde Exótico.jpg",
      descricao:
        " Fabricação e instalação de uma bancada suspensa em mármore verde exótico, apresentando uma cuba esculpida no próprio material. Os veios marcantes e as tonalidades únicas da pedra criam uma peça central sofisticada e funcional, ideal para lavabos e banheiros modernos que buscam um toque de luxo e originalidade.",
    },
    {
      id: 33,
      titulo: "Bancada de Cozinha em Granito",
      categoria: "Bancadas",
      imagem:
        "../../public/images/bancadas/Cozinha Moderna com Bancadas em Granito.png",
      descricao:
        "Este projeto de cozinha exemplifica a integração de funcionalidade e estética através de bancadas robustas em granito escuro. O design em L maximiza o espaço de trabalho, incorporando uma pia dupla e áreas de preparo, ideal para ambientes contemporâneos. A escolha do granito oferece durabilidade e uma superfície de fácil manutenção, ao mesmo tempo em que confere um toque de sofisticação e modernidade ao ambiente.",
    },
    {
      id: 41,
      titulo: " Bancadas Funcionais para Cozinha",
      categoria: "Bancadas",
      imagem:
        "../../public/images/bancadas/Bancadas Funcionais para Cozinha.png",
      descricao:
        "Bancada clara, linear e de superfície sólida otimiza o fluxo de trabalho em cozinha compacta. Ela é multifuncional, integrando pia, área de corte e calha úmida. O design visa eficiência, modernidade e amplitude.",
    },
    {
      id: 4,
      titulo:
        "Cozinha Gourmet com Bancadas e Backsplash em Granito Preto Via Láctea",
      categoria: "Bancadas",
      imagem:
        "../../public/images/bancadas/Cozinha Gourmet com Bancadas e Backsplash em Granito Preto Via Láctea.png",
      descricao:
        "Instalação de bancadas e backsplash em granito Preto Via Láctea, apresentando elegantes veios brancos que adicionam um toque de sofisticação. O projeto inclui cubas duplas embutidas e uma lixeira de bancada, otimizando a funcionalidade para uma cozinha gourmet. Os armários em tons neutros complementam o granito, criando um ambiente moderno e de alto padrão.",
    },
    {
      id: 17,
      titulo: " Cozinha Moderna com Bancadas e Ilha em Mármore Calacatta",
      categoria: "Bancadas",
      imagem:
        "../../public/images/bancadas/Cozinha Moderna com Bancadas e Ilha em Mármore Calacatta.jpg",
      descricao:
        "Projeto de cozinha com bancada em granito Branco Dallas, destacando veios cinza que conferem elegância e modernidade ao ambiente. A bancada é equipada com cuba dupla embutida e torneira de parede, otimizando o espaço de trabalho. O design clean e funcional é complementado por armários brancos, criando um ambiente sofisticado e prático para o dia a dia.",
    },

    //Area de Lazer
    {
      id: 2,
      titulo: "Bancada e Churrasqueira",
      categoria: "Área de Lazer",
      imagem:
        "../../public/images/Area de Lazer/Área Gourmet Externa com Bancadas.png",
      descricao:
        "Projeto completo de área gourmet externa, featuring bancadas e balcão em granito Kashmir White com veios marcantes, proporcionando um ambiente sofisticado e funcional. A churrasqueira e os armários planejados complementam o espaço, ideal para lazer e confraternizações, com vista para a paisagem natural e abundante iluminação.",
    },
    {
      id: 6,
      titulo: " Piscina e Jacuzzi com Borda Infinita em Quartzito Patagônia",
      categoria: "Área de Lazer",
      imagem: "../../public/images/Area de Lazer/Piscina e Jacuzzi.png",
      descricao:
        "Projeto paisagístico e construção de área de lazer com piscina de borda infinita e jacuzzi, ambas revestidas em quartzito Patagônia. O material, com suas tonalidades e veios únicos, cria uma fusão orgânica com o ambiente tropical exuberante, complementado pelo deck de madeira, oferecendo um refúgio luxuoso e integrado à natureza..",
    },
    {
      id: 10,
      titulo: "Lareira e Coluna Revestidas em Granito Black Cosmic",
      categoria: "Área de Lazer",
      imagem:
        "../../public/images/Area de Lazer/Lareira e Coluna Revestidas em Granito Black Cosmic.jpg",
      descricao:
        "Instalação de lareira e coluna central revestidas em granito Black Cosmic, destacando seus veios brancos marcantes sobre o fundo escuro. O projeto integra uma lareira de tijolos e nichos laterais, criando um ponto focal imponente e elegante. O contraste do granito com o ambiente minimalista e a porta de madeira ao fundo adicionam sofisticação e modernidade ao espaço",
    },
    //Ilhas
    {
      id: 14,
      titulo: "Cozinha Integrada com Ilha em Mármore",
      categoria: "Ilhas",
      imagem:
        "../../public/images/Ilhas/Cozinha Gourmet com Ilha em Mármore e Design Integrado.png",
      descricao:
        "Apresentamos um projeto de cozinha gourmet com ilha central em mármore de alta qualidade, equipada com cuba dupla.",
    },
    {
      id: 18,
      titulo: " Cozinha Moderna com Bancadas e Ilha em Mármore Calacatta",
      categoria: "Ilhas",
      imagem:
        "../../public/images/Bancadas/Cozinha Moderna com Bancadas e Ilha em Mármore Calacatta.jpg",
      descricao:
        " Instalação de ilha gourmet em granito preto absoluto, apresentando um design monolítico e elegante que integra a área de preparo com um balcão de refeições rápidas. O acabamento polido reflete a iluminação do ambiente, enquanto a durabilidade do material garante funcionalidade e sofisticação para cozinhas contemporâneas.",
    },
    {
      id: 30,
      titulo: " Ilha Gourmet em Granito Preto",
      categoria: "Ilhas",
      imagem: "../../public/images/Ilhas/Ilha Gourmet em Granito Preto.png",
      descricao:
        "Ilha de cozinha em quartzo branco com cuba integrada e design minimalista. A peça central otimiza o espaço, oferecendo funcionalidade e um visual clean, ideal para cozinhas modernas e elegantes.",
    },

    //Banheiros / Lavatorios
    {
      id: 20,
      titulo: " Bancada Dupla com Cubas de Apoio",
      categoria: "Banheiros / Lavatorios",
      imagem:
        "../../public/images/Bancadas/Bancada Dupla com Cubas de Apoio.png",
      descricao:
        "Bancada dupla de material composto de alta resistência, instalada com duas cubas de apoio. A solução otimiza o espaço e oferece um design moderno, ideal para banheiros e lavabos que buscam praticidade e sofisticação.",
    },

    {
      id: 34,
      titulo: "Bancada de Banheiro em Quartzo Branco com Cuba Esculpida",
      categoria: "Banheiros / Lavatorios",
      imagem:
        "../../public/images/Bancadas/Bancada de Banheiro em Quartzo Branco com Cuba Esculpida.jpg",
      descricao:
        "Apresentamos uma bancada de banheiro em quartzo branco, com cuba esculpida integrada e design moderno. O acabamento clean e as linhas retas proporcionam um visual sofisticado e funcional, ideal para otimizar espaços e adicionar um toque de elegância a qualquer banheiro ou lavabo.",
    },

    {
      id: 25,
      titulo: "Bancada de Banheiro com Cuba Esculpida",
      categoria: "Banheiros / Lavatorios",
      imagem:
        "../../public/images/Banheiros-Lavatorios/Bancada de Banheiro com Cuba Esculpida.png",
      descricao:
        " Apresentamos uma bancada de banheiro moderna em tom claro, com cuba esculpida de design inovador e torneira cromada. A peça se integra perfeitamente ao ambiente, otimizando o espaço e oferecendo uma estética limpa e contemporânea. Ideal para projetos que buscam funcionalidade com um toque de sofisticação.",
    },
    {
      id: 11,
      titulo: "Banheiro com Design em Mármore Black & White",
      categoria: "Banheiros / Lavatorios",
      imagem:
        "../../public/images/Banheiros-Lavatorios/Banheiro com Design em Mármore Black & White.png",
      descricao:
        "Instalação de um elegante banheiro com um design ousado em mármore, combinando peças brancas com veios cinzas nas paredes e um piso que intercala veios pretos sobre o branco. A bancada em mármore claro com cuba embutida e a iluminação moderna realçam a sofisticação do ambiente, criando um espaço contemporâneo e de alto impacto visual.",
    },
    {
      id: 21,
      titulo: "Banheiro Luxuoso com Revestimento em Mármore Verde Esmeralda",
      categoria: "Banheiros / Lavatorios",
      imagem:
        "../../public/images/Banheiros-Lavatorios/Banheiro Luxuoso com Revestimento em Mármore Verde Esmeralda.jpg",
      descricao:
        "Projeto e execução de um banheiro sofisticado com revestimento integral em mármore verde esmeralda. A bancada suspensa com cuba embutida destaca a beleza dos veios naturais da pedra, complementada por um espelho elegante e uma iluminação que realça a textura e a profundidade do material, criando um ambiente de requinte e serenidade.",
    },
    {
      id: 7,
      titulo: "Banheiro Moderno com Cuba de Apoio e Armário Planejado",
      categoria: "Banheiros / Lavatorios",
      imagem:
        "../../public/images/Banheiros-Lavatorios/Banheiro Moderno com Cuba de Apoio.png",
      descricao:
        "Apresentamos um projeto de banheiro elegante e funcional, destacando a cuba de apoio quadrada sobre uma bancada em tom claro e um armário inferior planejado com portas lisas. A iluminação indireta sob o espelho e a prateleira superior complementam o ambiente, proporcionando um toque contemporâneo e otimizando o espaço.",
    },
    {
      id: 3,
      titulo: "Lavabo de Luxo com Cuba Esculpida em Quartzo Branco",
      categoria: "Banheiros / Lavatorios",
      imagem:
        "../../public/images/Banheiros-Lavatorios/Lavabo de Luxo com Cuba Esculpida em Quartzo Branco.png",
      descricao:
        "Apresentamos um lavabo sofisticado, com bancada em quartzo branco e cuba esculpida de design contemporâneo. A torneira em tom bronze complementa o ambiente luxuoso, realçado pelo revestimento de parede e piso em porcelanato com veios que imitam mármore. Uma prateleira lateral estendida oferece funcionalidade e elegância, ideal para um espaço requintado e moderno.",
    },

    {
      id: 22,
      titulo: "Lavatório Duplo em Mármore Panda Branco e Preto",
      categoria: "Banheiros / Lavatorios",
      imagem:
        "../../public/images/Banheiros-Lavatorios/Lavatório Duplo em Mármore Panda Branco e Preto.png",
      descricao:
        "Fabricação e instalação de um lavatório duplo em mármore Panda Branco e Preto, com um design personalizado que harmoniza os veios marcantes de ambas as pedras. A cuba esculpida e a prateleira inferior funcional complementam o espelho e a iluminação embutida, criando um ambiente de banheiro luxuoso e com forte impacto visual.",
    },
    //Mesas
    {
      id: 12,
      titulo: "Mesa de Jantar com Tampo Orgânico em Mármore Exótico",
      categoria: "Mesas",
      imagem:
        "/images/mesas/mesa_de_jantar_com_tampo_organico_em_marmore_exotico.png",
      descricao:
        "Fabricação e instalação de uma mesa de jantar exclusiva com tampo em mármore exótico de formato orgânico, apoiado sobre uma base cilíndrica. O design contemporâneo e as variações de veios do mármore criam uma peça central única, combinando arte e funcionalidade, ideal para salas de jantar que buscam sofisticação e originalidade.",
    },
    {
      id: 5,
      titulo: "Mesa de Jantar em Granito Nero Portoro com Design Exclusivo",
      categoria: "Mesas",
      imagem:
        "/images/mesas/mesa_de_jantar_em_granito_nero_portoro_com_design_exclusivo.png",
      descricao:
        "Fabricação e instalação de uma mesa de jantar personalizada em granito Nero Portoro, destacando seus veios dourados únicos que conferem luxo e sofisticação. O design robusto da base e o tampo polido criam um ponto focal impressionante em um ambiente de sala de jantar espaçoso e contemporâneo, harmonizando com a iluminação pendente moderna e as cadeiras de madeira.",
    },

    //Cubas
    {
      id: 37,
      titulo: "Cuba Esculpida em Mármore Verde Exótico",
      categoria: "Cubas",
      imagem:
        "../../public/images/Cubas/Cuba Esculpida em Mármore Verde Exótico.png",
      descricao:
        " Apresentamos uma cuba esculpida em mármore verde com veios marcantes, caracterizada por seu design retangular monolítico. Esta peça exclusiva combina a beleza natural da pedra com a precisão da lapidação, ideal para projetos que buscam um elemento de destaque e sofisticação em banheiros ou lavabos.",
    },
    {
      id: 26,
      titulo: "Cuba Esculpida em Ônix Translúcido",
      categoria: "Cubas",
      imagem:
        "../../public/images/Cubas/Cuba Esculpida em Ônix Translúcido.png",
      descricao:
        " Fabricação e design de cuba esculpida em ônix translúcido, destacando os veios naturais em tons de dourado e creme que conferem exclusividade e luxo. A peça, com sua forma geométrica e acabamento impecável, é ideal para lavabos e banheiros sofisticados, onde a beleza da pedra se torna o ponto focal do ambiente.",
    },

    //Materiais
    {
      id: 15,
      titulo: "Patagonia Green (ou Botanic Green): Arte em Cores Naturais",
      categoria: "Materiais",
      imagem:
        "../../public/images/Materiais/Patagonia Green (ou Botanic Green) Arte em Cores Naturais.jpg",
      descricao:
        "Uma peça exótica que combina a base neutra com um design orgânico e vibrante. Seus veios em tons de verde intenso e preto profundo criam um movimento único e sofisticado. Apresentada em Bookmatch (espelhamento), esta rocha é perfeita para revestir paredes, painéis e lareiras, garantindo uma assinatura de design inigualável e durabilidade extrema.",
    },
    {
      id: 23,
      titulo: "Quartzito Patagonia: Luxo Translúcido com Retroiluminação",
      categoria: "Materiais",
      imagem:
        "../../public/images/Materiais/Quartzito Patagonia Luxo Translúcido com Retroiluminação.jpg",
      descricao:
        "O Quartzito Patagonia é uma verdadeira obra de arte natural, conhecida por sua fusão de minerais: branco, preto e explosões de cristal dourado e âmbar. Sua característica translúcida permite a retroiluminação, transformando a peça em um painel luminoso e dramático. É o material exótico de escolha para halls, bares e ilhas gourmet de alto impacto.",
    },
    {
      id: 38,
      titulo: "Quartzito Taj Mahal: Beleza Quente e Resistência Superior",
      categoria: "Materiais",
      imagem:
        "../../public/images/Materiais/Quartzito Taj Mahal Beleza Quente e Resistência Superior.jpg",
      descricao:
        "O Quartzito Taj Mahal oferece a estética suave do mármore, mas com a extrema dureza e baixa manutenção do quartzito. Seu fundo branco é sutilmente adornado por veios finos em tons de dourado e marrom claro, adicionando calor e requinte. É a escolha ideal para bancadas de cozinha e áreas gourmet que exigem beleza duradoura e alta resistência a riscos e manchas.",
    },
    {
      id: 31,
      titulo: "Mármore Calacatta: A Elegância Clássica em Grande Formato",
      categoria: "Materiais",
      imagem:
        "../../public/images/Materiais/Mármore Calacatta A Elegância Clássica em Grande Formato.jpg",
      descricao:
        "O Mármore Calacatta é sinônimo de luxo atemporal. Com um fundo branco puro e veios em diagonal em tons de cinza e preto, esta peça cria um painel visual dramático e harmonioso quando instalada. Perfeito para revestimento de paredes, halls de entrada e banheiros, onde o polimento espelhado realça sua amplitude e sofisticação.",
    },
    {
      id: 35,
      titulo: "Quartzito Cristallo: O Luxo Translúcido Iluminado",
      categoria: "Materiais",
      imagem:
        "../../public/images/Materiais/Quartzito Cristallo O Luxo Translúcido Iluminado.jpg",
      descricao:
        "O Quartzito Cristallo é uma joia da natureza. Sua característica translúcida permite que a chapa seja retroiluminada, transformando a peça em um espetáculo de luz e brilho. Com veios que variam do âmbar ao ouro, é a definição de luxo e exclusividade, sendo ideal para painéis de destaque, bares e bancadas iluminadas.",
    },
    {
      id: 9,
      titulo: "Quartzito Mont Blanc (ou Super White): Elegância Cinza Suave",
      categoria: "Materiais",
      imagem:
        "../../public/images/Materiais/Quartzito Mont Blanc (ou Super White) Elegância Cinza Suave.jpg",
      descricao:
        "O Quartzito Mont Blanc é a escolha ideal para um design neutro e sofisticado. Com um fundo claro, variando do branco gelo ao cinza suave, é adornado por veios finos e delicados. Combina a estética clássica do mármore com a durabilidade e a baixa porosidade do quartzito, sendo perfeito para bancadas de cozinhas e banheiros de alto padrão.",
    },
    {
      id: 19,
      titulo: "Cosmic Black: Profundidade e Movimento",
      categoria: "Materiais",
      imagem:
        "../../public/images/Materiais/Cosmic Black Profundidade e Movimento.jpg",
      descricao:
        "Um padrão de veios sinuosos e turbulentos que cria uma sensação de movimento constante sobre o preto profundo. Esta chapa é a escolha perfeita para quem busca uma estética moderna, oferecendo a força e a resistência do granito com a sofisticação do design natural.",
    },
    {
      id: 29,
      titulo: "Via Láctea Extra: O Contraste Supremo",
      categoria: "Materiais",
      imagem:
        "../../public/images/Materiais//Via Láctea Extra O Contraste Supremo.jpg",
      descricao:
        "Peça de impacto visual incomparável. O fundo preto absoluto é cortado por veios brancos, largos e esculturais, que trazem uma elegância dramática e atemporal ao ambiente. Ideal para ilhas gourmet, lareiras e projetos que exigem um ponto focal de alto luxo e durabilidade superior.",
    },
  ];

  const [filtroAtivo, setFiltroAtivo] = useState("Todos");
  const [imagemModal, setImagemModal] = useState<number | null>(null);
  const [mostrarTodasFotos, setMostrarTodasFotos] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const categorias = [
    "Todos",
    "Bancadas",
    "Área de Lazer",
    "Ilhas",
    "Banheiros / Lavatorios",
    "Cubas",
    "Mesas",
    "Materiais",
  ];

  // Detectar se é mobile e adicionar listener de redimensionamento
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  // Resetar estado ao mudar filtro
  useEffect(() => {
    setMostrarTodasFotos(false);
  }, [filtroAtivo]);

  const projetosFiltrados =
    filtroAtivo === "Todos"
      ? projetos
      : projetos.filter((projeto) => projeto.categoria === filtroAtivo);

  // Determinar quantos projetos mostrar
  const projetosExibidos = (() => {
    if (
      isMobile &&
      filtroAtivo === "Todos" &&
      !mostrarTodasFotos &&
      projetosFiltrados.length > 5
    ) {
      return projetosFiltrados.slice(0, 5);
    }
    return projetosFiltrados;
  })();

  // Verificar se deve mostrar o botão "Ver todos"
  const mostrarBotaoVerTodos =
    isMobile &&
    filtroAtivo === "Todos" &&
    !mostrarTodasFotos &&
    projetosFiltrados.length > 5;
  const abrirModal = (id: number) => {
    setImagemModal(id);
  };

  const fecharModal = () => {
    setImagemModal(null);
  };

  const navegarModal = (direcao: "anterior" | "proximo") => {
    if (imagemModal === null) return;

    // Primeiro, filtra os projetos da categoria atual
    const categoriaAtual = projetos.find(
      (p) => p.id === imagemModal
    )?.categoria;
    if (!categoriaAtual) return;

    const projetosFiltrados = projetos.filter(
      (p) => p.categoria === categoriaAtual
    );

    // Agora busca o índice dentro da lista filtrada
    const indiceAtual = projetosFiltrados.findIndex(
      (p) => p.id === imagemModal
    );
    let novoIndice = indiceAtual;

    if (direcao === "anterior" && indiceAtual > 0) {
      novoIndice = indiceAtual - 1;
    } else if (
      direcao === "proximo" &&
      indiceAtual < projetosFiltrados.length - 1
    ) {
      novoIndice = indiceAtual + 1;
    }

    setImagemModal(projetosFiltrados[novoIndice].id);
  };

  const projetoModal = projetos.find((p) => p.id === imagemModal);

  return (
    <div id={id} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nossa Galeria
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça alguns dos nossos projetos realizados e se inspire com a
            beleza e elegância que o mármore pode proporcionar ao seu ambiente.
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categorias.map((categoria) => (
            <button
              key={categoria}
              onClick={() => setFiltroAtivo(categoria)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filtroAtivo === categoria
                  ? "bg-orange-500 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-orange-50 hover:text-orange-600 shadow"
              }`}
            >
              {categoria}
            </button>
          ))}
        </div>

        {/* Grid de imagens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projetosExibidos.map((projeto) => (
            <div
              key={projeto.id}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              onClick={() => abrirModal(projeto.id)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={projeto.imagem}
                  alt={projeto.titulo}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-medium">Ver Detalhes</p>
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {projeto.categoria}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {projeto.titulo}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {projeto.descricao}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Botão "Ver todos" - apenas mobile */}
        {mostrarBotaoVerTodos && (
          <div className="flex justify-center mt-8 md:hidden">
            <button
              onClick={() => setMostrarTodasFotos(true)}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <span>Ver Todos</span>
              <span className="bg-white bg-opacity-20 px-2 py-1 rounded-full text-sm">
                +{projetosFiltrados.length - 5}
              </span>
            </button>
          </div>
        )}

        {/* Modal para visualização das imagens */}
        {imagemModal && projetoModal && (
          <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full max-h-full">
              {/* Botão fechar */}
              <button
                onClick={fecharModal}
                className="absolute -top-12 right-0 text-white hover:text-orange-500 transition-colors duration-200"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Botões de navegação */}
              <button
                onClick={() => navegarModal("anterior")}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-orange-500 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 transition-all duration-200"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              <button
                onClick={() => navegarModal("proximo")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-orange-500 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 transition-all duration-200"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              {/* Imagem */}
              <div className="bg-white rounded-2xl overflow-hidden">
                <img
                  src={projetoModal.imagem}
                  alt={projetoModal.titulo}
                  className="w-full h-96 object-cover"
                />
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {projetoModal.titulo}
                    </h3>
                    <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
                      {projetoModal.categoria}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {projetoModal.descricao}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Gostou do que viu?</h3>
            <p className="text-xl mb-8 text-orange-100">
              Transforme seu ambiente com a mesma qualidade e sofisticação
            </p>
            <button
              onClick={() => onNavigate("contato")}
              className="bg-white text-orange-600 hover:bg-orange-50 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Solicitar Orçamento
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Galeria;
