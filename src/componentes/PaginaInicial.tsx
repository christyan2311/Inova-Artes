import React from 'react';
import { useState, useEffect } from 'react';
import { ArrowRight, Star, Shield, Clock } from 'lucide-react';

interface PaginaInicialProps {
  id: string;
  onNavigate: (secaoId: string) => void;
}

const PaginaInicial: React.FC<PaginaInicialProps> = ({ id, onNavigate }) => {
  // ========================================
  // CONFIGURAÇÃO DO CARROSSEL DE IMAGENS
  // ========================================
  // Para trocar as imagens do carrossel, substitua as URLs abaixo pelas suas imagens
  // Recomendação: Use imagens com resolução mínima de 1920x1080px
  const imagensCarrossel = [
  '../../public/images/Ilhas/Cozinha Gourmet com Ilha em Mármore e Design Integrado.png',
  '../../public/images/Area de lazer/Área Gourmet Externa com Bancadas.png',
  '../../public/images/Area de lazer/Piscina e Jacuzzi.png',
  '../../public/images/Bancadas/Cozinha Moderna com Bancadas e Ilha em Mármore Calacatta.jpg',
  '../../public/images/Bancadas/Bancadas Funcionais para Cozinha.png',
  '../../public/images/Banheiros-Lavatorios/Banheiro com Design em Mármore Black & White.png',
  '../../public/images/Banheiros-Lavatorios/Banheiro Luxuoso com Revestimento em Mármore Verde Esmeralda.jpg',
  '../../public/images/Banheiros-Lavatorios/Lavatório Duplo em Mármore Panda Branco e Preto.png',
  '../../public/images/Area de lazer/Balcão Iluminado em Ônix para Bar.png',
  '../../public/images/Bancadas/Cozinha Moderna com Bancadas em Granito.png',
  '../../public/images/Mesas/Mesa de Jantar em Granito Nero Portoro com Design Exclusivo.png',
  '../../public/images/Mesas/Mesa de Jantar com Tampo Orgânico em Mármore Exótico.png',
  ];

  // Estado para controlar qual imagem está ativa no carrossel
  const [imagemAtiva, setImagemAtiva] = useState(0);

  // ========================================
  // LÓGICA DO CARROSSEL AUTOMÁTICO
  // ========================================
  useEffect(() => {
    // Configuração do tempo de transição (em milissegundos)
    // Para alterar a velocidade, modifique o valor abaixo:
    // 4000 = 4 segundos, 6000 = 6 segundos, etc.
    const TEMPO_TRANSICAO = 5000;

    const intervalo = setInterval(() => {
      setImagemAtiva((imagemAtual) => 
        // Loop infinito: volta para a primeira imagem após a última
        (imagemAtual + 1) % imagensCarrossel.length
      );
    }, TEMPO_TRANSICAO);

    // Limpeza do intervalo quando o componente for desmontado
    // Isso previne vazamentos de memória
    return () => clearInterval(intervalo);
  }, [imagensCarrossel.length]);

  return (
    <div id={id}>
      {/* Banner principal */}
      <section className="relative min-h-screen flex items-center">
        {/* ========================================
            CARROSSEL DE IMAGENS DE FUNDO
            ======================================== */}
        <div className="absolute inset-0 overflow-hidden">
          {imagensCarrossel.map((imagem, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
                index === imagemAtiva ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `url('${imagem}')`,
              }}
            />
          ))}
          
          {/* Overlay com transparência ajustada para melhor legibilidade */}
          {/* bg-opacity-40 = 40% de transparência (mais sutil que antes) */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        {/* Conteúdo do banner */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl">
            {/* Adicionando uma sombra sutil ao texto para melhor legibilidade */}
            <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Elegância em 
              <span className="text-orange-500"> Mármore</span>
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 drop-shadow-lg">
              Transformamos espaços com a sofisticação e qualidade que apenas  pedras naturais e sintéticas podem oferecer . Mais de 15 anos criando ambientes únicos e inesquecíveis para cada cliente
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => onNavigate('contato')}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-lg"
              >
                Fale Conosco
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button 
                onClick={() => onNavigate('galeria')}
                className="border-2 border-white text-white hover:bg-white hover:text-black font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg"
              >
                Ver Nossos Trabalhos
              </button>
            </div>
          </div>
        </div>

        {/* ========================================
            INDICADORES DO CARROSSEL
            ======================================== */}
        {/* Indicadores centralizados na parte inferior da seção hero */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
          <div className="flex space-x-3 bg-black bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full">
            {imagensCarrossel.map((_, index) => (
              <button
                key={index}
                onClick={() => setImagemAtiva(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === imagemAtiva 
                    ? 'bg-orange-500 scale-125 shadow-lg' 
                    : 'bg-white bg-opacity-60 hover:bg-opacity-90 hover:scale-110'
                }`}
                aria-label={`Ir para imagem ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Nossos diferenciais */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Por que escolher a Inova Artes?</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nossa experiência e dedicação garantem resultados excepcionais em cada projeto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Qualidade Superior */}
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Qualidade Superior</h4>
              <p className="text-gray-600 leading-relaxed">
                Utilizamos apenas pedras selecionadas e  técnicas avançadas para garantir durabilidade e beleza incomparáveis
              </p>
            </div>

            {/* Confiança Total */}
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Confiança Total</h4>
              <p className="text-gray-600 leading-relaxed">
                15 anos de experiência e centenas de clientes satisfeitos. 
                Garantia completa em todos os nossos serviços.
              </p>
            </div>

            {/* Prazo Cumprido */}
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Prazo Cumprido</h4>
              <p className="text-gray-600 leading-relaxed">
                Planejamento detalhado e equipe especializada garantem a entrega 
                pontual de todos os projetos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resumo dos serviços */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Nossos Serviços</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Oferecemos soluções completas em mármore para transformar seus ambientes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Bancadas',
              'Cubas e Lavatorios',
              'Mesas',
              'Ilhas'
            ].map((servico, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{servico}</h4>
                <p className="text-gray-600 text-sm">Qualidade premium</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => onNavigate('servicos')}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Ver Todos os Serviços
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaginaInicial;