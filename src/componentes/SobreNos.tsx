import React from 'react';
import { Award, Users, Target, Heart } from 'lucide-react';

interface SobreNosProps {
  id: string;
}

const SobreNos: React.FC<SobreNosProps> = ({ id }) => {
  return (
    <div id={id} className="py-20">
      {/* História da empresa */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Nossa História</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                A Inova Artes nasceu em 2008 do sonho de transformar ambientes através da 
                beleza natural do mármore. Fundada por João Silva, um apaixonado pela arte 
                em pedra, nossa empresa começou pequena, mas sempre com grandes ambições.
              </p>
              <p>
                Ao longo dos anos, construímos uma reputação sólida baseada na qualidade 
                excepcional dos nossos trabalhos e no atendimento personalizado. Cada projeto 
                é único e recebe nossa total dedicação, desde a escolha da pedra até a 
                instalação final.
              </p>
              <p>
                Hoje, somos referência em marmoraria na região, com mais de 500 projetos 
                realizados e uma equipe de profissionais especializados que compartilham 
                nossa paixão pela excelência.
              </p>
            </div>
          </div>
          <div className="relative">
            <img 
              src="/public/images/Ilhas/Cozinha Integrada com Ilha em Mármore e Design Contemporâneo.png" 
              alt="Equipe Inova Artes trabalhando"
              className="rounded-2xl shadow-xl w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-6 rounded-xl shadow-lg">
              <p className="text-2xl font-bold">15+</p>
              <p className="text-sm">Anos de Experiência</p>
            </div>
          </div>
        </div>

        {/* Missão, Visão e Valores */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Missão */}
          <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Nossa Missão</h3>
            <p className="text-gray-600 leading-relaxed">
              Transformar ambientes através da beleza e durabilidade do mármore, 
              oferecendo soluções personalizadas que superem as expectativas dos 
              nossos clientes com qualidade excepcional.
            </p>
          </div>

          {/* Visão */}
          <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Nossa Visão</h3>
            <p className="text-gray-600 leading-relaxed">
              Ser reconhecida como a principal referência em marmoraria da região, 
              inovando constantemente em técnicas e design para criar ambientes 
              únicos e sofisticados.
            </p>
          </div>

          {/* Valores */}
          <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Nossos Valores</h3>
            <div className="text-gray-600 leading-relaxed text-left space-y-2">
              <p>• <strong>Qualidade:</strong> Excelência em cada detalhe</p>
              <p>• <strong>Confiança:</strong> Transparência e honestidade</p>
              <p>• <strong>Inovação:</strong> Sempre buscando o melhor</p>
              <p>• <strong>Satisfação:</strong> Cliente como prioridade</p>
            </div>
          </div>
        </div>

        {/* Nossa Equipe */}
        <section className="mt-20">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Nossa Equipe</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Profissionais especializados e apaixonados pelo que fazem
            </p>
          </div>

          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-12 text-white text-center">
            <Users className="w-16 h-16 mx-auto mb-6 text-white" />
            <h4 className="text-3xl font-bold mb-4">Equipe Especializada</h4>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Nossa equipe é formada por artesãos experientes, designers criativos e 
              técnicos qualificados que trabalham juntos para entregar resultados excepcionais 
              em cada projeto.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div>
                <p className="text-4xl font-bold mb-2">15+</p>
                <p className="text-orange-100">Profissionais</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">500+</p>
                <p className="text-orange-100">Projetos Realizados</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">98%</p>
                <p className="text-orange-100">Clientes Satisfeitos</p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default SobreNos;