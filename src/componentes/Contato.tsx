import React from 'react';
import { Phone, Mail, MapPin, MessageSquare, Clock } from 'lucide-react';

interface ContatoProps {
  id: string;
}

const Contato: React.FC<ContatoProps> = ({ id }) => {
  const informacoesContato = [
    {
      icone: Phone,
      titulo: 'Telefone',
      valor: '(11) 9999-8888',
      link: 'tel:+5511999998888'
    },
    {
      icone: MessageSquare,
      titulo: 'WhatsApp',
      valor: '(11) 9999-8888',
      link: 'https://wa.me/5511999998888'
    },
    {
      icone: Mail,
      titulo: 'E-mail',
      valor: 'contato@inovaartes.com.br',
       link: 'https://mail.google.com/mail/?view=cm&fs=1&to=contato@inovaartes.com.br'
    },
    {
      icone: MapPin,
      titulo: 'Endereço',
      valor: 'Rua das Pedras, 123 - São Paulo, SP',
      link: 'https://maps.google.com/'
    }
  ];

  return (
    <div id={id} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Entre em Contato</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos prontos para transformar seus sonhos em realidade. 
            Entre em contato conosco e receba um atendimento personalizado.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 justify-center">
          {/* Informações de contato - Lado Esquerdo */}
          <div className="space-y-8 max-w-2xl w-full">
            {/* Cards de contato */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {informacoesContato.map((info, index) => {
                const IconeComponente = info.icone;
                return (
                  <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                      <IconeComponente className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{info.titulo}</h4>
                    <a 
                      href={info.link}
                      className="text-gray-600 hover:text-orange-600 transition-colors duration-200"
                    >
                      {info.valor}
                    </a>
                  </div>
                );
              })}
            </div>

            {/* Horário de funcionamento */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mr-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">Horário de Funcionamento</h4>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Segunda a Sexta:</span>
                  <span className="font-medium text-gray-900">08:00 às 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sábado:</span>
                  <span className="font-medium text-gray-900">08:00 às 12:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Domingo:</span>
                  <span className="font-medium text-gray-900">Fechado</span>
                </div>
              </div>
            </div>

            {/* Botões de ação rápida */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://wa.me/5511999998888"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 text-center"
              >
                WhatsApp
              </a>
              <a
                href="tel:+5511999998888"
                className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 text-center"
              >
                Ligar Agora
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contato;
