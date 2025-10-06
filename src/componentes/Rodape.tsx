import React from 'react';
import { Phone, Mail, MapPin, Instagram, MessageSquare } from 'lucide-react';

interface RodapeProps {
  onNavigate: (secaoId: string) => void;
}

const Rodape: React.FC<RodapeProps> = ({ onNavigate }) => {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Seção principal do rodapé */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Informações da empresa */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-20 h-20 bg-gradient-to-br bg-gray-900 rounded-lg flex items-center justify-center">
                <img
                src="/public/images/Logo/Modern Logo for Inova Artes - Minimalist Design (1).png"
                alt="Logo InovaArtes"
                className="w-24 h-24 object-contain"
              />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Inova Artes</h3>
                <p className="font-bold">Marmoraria</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Transformando ambientes com a beleza e sofisticação do mármore. 
              Mais de 15 anos de experiência e dedicação à excelência.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/5511999998888"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <MessageSquare className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/inovaartes"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-pink-500 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links rápidos */}
          <div>
            <h4 className="text-lg font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {[
                { label: 'Início', id: 'inicio' },
                { label: 'Sobre Nós', id: 'sobre' },
                { label: 'Serviços', id: 'servicos' },
                { label: 'Galeria', id: 'galeria' },
                { label: 'Contato', id: 'contato' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">(11) 9999-8888</p>
                  <p className="text-gray-400 text-sm">Segunda a Sexta: 08:00 às 18:00</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                <div>
                  <a
                    href="mailto:contato@inovaartes.com.br"
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
                  >
                    contato@inovaartes.com.br
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Rua das Pedras, 123</p>
                  <p className="text-gray-300">São Paulo, SP - CEP: 01234-567</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seção inferior do rodapé */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {anoAtual} Inova Artes Marmoraria. Todos os direitos reservados.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-orange-400 transition-colors duration-200">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-orange-400 transition-colors duration-200">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Botão flutuante WhatsApp */}
      <a
        href="https://wa.me/5511999998888"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-110 z-40"
        title="Fale conosco pelo WhatsApp"
      >
        <MessageSquare className="w-7 h-7" />
      </a>
    </footer>
  );
};

export default Rodape;