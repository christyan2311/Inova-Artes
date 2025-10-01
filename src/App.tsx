import React, { useState } from 'react';
import Cabecalho from './componentes/Cabecalho';
import PaginaInicial from './componentes/PaginaInicial';
import SobreNos from './componentes/SobreNos';
import Servicos from './componentes/Servicos';
import Galeria from './componentes/Galeria';
import Contato from './componentes/Contato';
import Rodape from './componentes/Rodape';

function App() {
  const [secaoAtiva, setSecaoAtiva] = useState('inicio');

  const navegarParaSecao = (secaoId: string) => {
    setSecaoAtiva(secaoId);
    
    // Pequeno delay para garantir que o menu mobile feche antes da rolagem
    setTimeout(() => {
      const elemento = document.getElementById(secaoId);
      if (elemento) {
        // Altura do cabeçalho fixo (h-20 = 80px)
        const alturaHeader = 80;
        
        // Calcula a posição considerando o header fixo
        const posicaoElemento = elemento.offsetTop;
        const posicaoFinal = posicaoElemento - alturaHeader;
        
        // Rolagem suave até a posição correta
        window.scrollTo({
          top: posicaoFinal,
          behavior: 'smooth'
        });
      }
    }, 100); // 100ms de delay para o menu fechar
  };

  return (
    <div className="min-h-screen bg-white">
      <Cabecalho secaoAtiva={secaoAtiva} onSecaoChange={navegarParaSecao} />
      <main className="pt-20">
        <PaginaInicial id="inicio" onNavigate={navegarParaSecao} />
        <SobreNos id="sobre" />
        <Servicos id="servicos" onNavigate={navegarParaSecao} />
        <Galeria id="galeria" onNavigate={navegarParaSecao} />
        <Contato id="contato" />
      </main>
      <Rodape onNavigate={navegarParaSecao} />
    </div>
  );
}

export default App;