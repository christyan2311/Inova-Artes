import React, { useState } from 'react';
import { Gem, X } from 'lucide-react';

interface CabecalhoProps {
  secaoAtiva: string;
  onSecaoChange: (secao: string) => void;
}

const Cabecalho: React.FC<CabecalhoProps> = ({ secaoAtiva, onSecaoChange }) => {
  const [menuMobileAberto, setMenuMobileAberto] = useState(false);

  const itensMenu = [
    { id: 'inicio', label: 'Início' },
    { id: 'sobre', label: 'Sobre Nós' },
    { id: 'servicos', label: 'Serviços' },
    { id: 'galeria', label: 'Galeria' },
    { id: 'contato', label: 'Contato' }
  ];

  const alternarMenuMobile = () => {
    setMenuMobileAberto(!menuMobileAberto);
  };

  const navegarEFecharMenu = (secao: string) => {
    onSecaoChange(secao);
    setMenuMobileAberto(false);
  };

  return (
    <header className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navegarEFecharMenu('inicio')}>
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
              <Gem className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Inova Artes</h1>
              <p className="text-sm text-orange-600">Marmoraria</p>
            </div>
          </div>

          {/* Menu de navegação desktop */}
          <nav className="hidden md:flex space-x-8">
            {itensMenu.map((item) => (
              <button
                key={item.id}
                onClick={() => onSecaoChange(item.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  secaoAtiva === item.id
                    ? 'text-orange-600 bg-orange-50 border-b-2 border-orange-600'
                    : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Botão menu mobile */}
          <div className="md:hidden">
            <button 
              onClick={alternarMenuMobile}
              className="p-2 rounded-lg text-gray-700 hover:bg-orange-50 transition-colors duration-200"
              aria-label="Menu"
            >
              {menuMobileAberto ? (
                <X className="w-6 h-6" />
              ) : (
                <div className="space-y-1">
                  <div className="w-6 h-0.5 bg-current transition-all duration-300"></div>
                  <div className="w-6 h-0.5 bg-current transition-all duration-300"></div>
                  <div className="w-6 h-0.5 bg-current transition-all duration-300"></div>
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Menu mobile dropdown */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          menuMobileAberto 
            ? 'max-h-96 opacity-100 pb-6' 
            : 'max-h-0 opacity-0 pb-0'
        }`}>
          <nav className="flex flex-col space-y-2 pt-4 border-t border-gray-100">
            {itensMenu.map((item) => (
              <button
                key={item.id}
                onClick={() => navegarEFecharMenu(item.id)}
                className={`text-left px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                  secaoAtiva === item.id
                    ? 'text-orange-600 bg-orange-50 border-l-4 border-orange-600'
                    : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Overlay para fechar menu quando clicar fora (mobile) */}
      {menuMobileAberto && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-20 z-40 md:hidden"
          onClick={() => setMenuMobileAberto(false)}
        ></div>
      )}
    </header>
  );
};

export default Cabecalho;