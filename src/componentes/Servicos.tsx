import React from 'react';
import { Home, Stars as Stairs, PaintBucket, Wrench, Sparkles, Shield } from 'lucide-react';

interface ServicosProps {
  id: string;
  onNavigate: (secaoId: string) => void;
}

const Servicos: React.FC<ServicosProps> = ({ id, onNavigate }) => {
  const servicos = [
    {
      icone: Home,
      titulo: 'Bancadas de Cozinha',
      descricao: 'Bancadas personalizadas em mármore para sua cozinha, combinando funcionalidade e elegância.',
      caracteristicas: ['Medidas personalizadas', 'Diversos tipos de mármore', 'Acabamento premium', 'Instalação incluída']
    },
    {
      icone: PaintBucket,
      titulo: 'Pisos em Mármore',
      descricao: 'Pisos luxuosos que transformam qualquer ambiente com sofisticação e durabilidade.',
      caracteristicas: ['Resistente ao tráfego', 'Fácil limpeza', 'Variedade de cores', 'Polimento profissional']
    },
    {
      icone: Stairs,
      titulo: 'Escadas e Degraus',
      descricao: 'Escadas em mármore que impressionam pela beleza e segurança em cada detalhe.',
      caracteristicas: ['Design exclusivo', 'Antiderrapante', 'Corrimão integrado', 'Iluminação especial']
    },
    {
      icone: Sparkles,
      titulo: 'Revestimentos',
      descricao: 'Revestimentos em mármore para paredes, criando ambientes únicos e elegantes.',
      caracteristicas: ['Aplicação versátil', 'Isolamento térmico', 'Diferentes texturas', 'Manutenção simples']
    },
    {
      icone: Wrench,
      titulo: 'Restauração',
      descricao: 'Restauração profissional de peças em mármore, devolvendo o brilho original.',
      caracteristicas: ['Polimento especializado', 'Remoção de manchas', 'Pequenos reparos', 'Proteção duradoura']
    },
    {
      icone: Shield,
      titulo: 'Manutenção',
      descricao: 'Serviços de manutenção preventiva para conservar a beleza do seu mármore.',
      caracteristicas: ['Limpeza profunda', 'Proteção química', 'Polimento periódico', 'Consultoria técnica']
    }
  ];

  return (
    <div id={id} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossos Serviços</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços em mármore, desde a criação até a manutenção, 
            sempre com a qualidade e sofisticação que você merece.
          </p>
        </div>

        {/* Grid de serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {servicos.map((servico, index) => {
            const IconeComponente = servico.icone;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconeComponente className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{servico.titulo}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{servico.descricao}</p>
                
                <ul className="space-y-2">
                  {servico.caracteristicas.map((caracteristica, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      {caracteristica}
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={() => onNavigate('contato')}
                  className="mt-6 w-full bg-gray-100 hover:bg-orange-500 hover:text-white text-gray-700 font-medium py-3 px-4 rounded-lg transition-all duration-300"
                >
                  Solicitar Orçamento
                </button>
              </div>
            );
          })}
        </div>

        {/* Seção de processo */}
        <section className="bg-white rounded-2xl p-12 shadow-xl">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Como Trabalhamos</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                numero: '01',
                titulo: 'Consulta Inicial',
                descricao: 'Reunião para entender suas necessidades e apresentar opções.'
              },
              {
                numero: '02',
                titulo: 'Projeto Personalizado',
                descricao: 'Desenvolvimento do projeto com medidas e especificações técnicas.'
              },
              {
                numero: '03',
                titulo: 'Produção',
                descricao: 'Fabricação cuidadosa usando as melhores técnicas e materiais.'
              },
              {
                numero: '04',
                titulo: 'Instalação',
                descricao: 'Instalação profissional com acabamento perfeito e limpeza final.'
              }
            ].map((etapa, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {etapa.numero}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{etapa.titulo}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{etapa.descricao}</p>
                
                {/* Linha conectora (não mostrar no último item) */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-orange-200 -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Pronto para Transformar seu Ambiente?</h3>
            <p className="text-xl mb-8 text-orange-100">
              Entre em contato conosco e receba um orçamento personalizado sem compromisso
            </p>
            <button 
              onClick={() => onNavigate('contato')}
              className="bg-white text-orange-600 hover:bg-orange-50 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Solicitar Orçamento Grátis
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicos;