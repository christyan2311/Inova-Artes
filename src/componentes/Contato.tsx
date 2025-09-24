import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Clock, CheckCircle } from 'lucide-react';

interface ContatoProps {
  id: string;
}

const Contato: React.FC<ContatoProps> = ({ id }) => {
  const [formulario, setFormulario] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  });

  const [mostrarSucesso, setMostrarSucesso] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulação de envio (sem backend real)
    console.log('Dados do formulário:', formulario);
    
    // Mostrar mensagem de sucesso
    setMostrarSucesso(true);
    
    // Limpar formulário
    setFormulario({
      nome: '',
      email: '',
      telefone: '',
      assunto: '',
      mensagem: ''
    });

    // Esconder mensagem após 5 segundos
    setTimeout(() => {
      setMostrarSucesso(false);
    }, 5000);
  };

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
      link: 'mailto:contato@inovaartes.com.br'
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informações de contato - Lado Esquerdo */}
          <div className="space-y-8">
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

          {/* Formulário de contato - Lado Direito */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Solicite seu Orçamento</h3>
            
            {/* Mensagem de sucesso */}
            {mostrarSucesso && (
              <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg mb-6 flex items-center">
                <CheckCircle className="w-5 h-5 mr-3" />
                <span>Mensagem enviada com sucesso! Entraremos em contato em breve.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nome */}
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formulario.nome}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                  placeholder="Seu nome completo"
                />
              </div>

              {/* Email e Telefone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formulario.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    value={formulario.telefone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                    placeholder="(11) 9999-9999"
                  />
                </div>
              </div>

              {/* Assunto */}
              <div>
                <label htmlFor="assunto" className="block text-sm font-medium text-gray-700 mb-2">
                  Assunto *
                </label>
                <select
                  id="assunto"
                  name="assunto"
                  value={formulario.assunto}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Selecione o assunto</option>
                  <option value="orcamento">Orçamento</option>
                  <option value="bancada">Bancada de Cozinha</option>
                  <option value="piso">Piso em Mármore</option>
                  <option value="escada">Escadas</option>
                  <option value="revestimento">Revestimentos</option>
                  <option value="manutencao">Manutenção</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              {/* Mensagem */}
              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={5}
                  value={formulario.mensagem}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 resize-vertical"
                  placeholder="Descreva seu projeto ou dúvida..."
                ></textarea>
              </div>

              {/* Botão de envio */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contato;