import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GaleriaProps {
  id: string;
  onNavigate: (secaoId: string) => void;
}

const Galeria: React.FC<GaleriaProps> = ({ id, onNavigate }) => {
  // Array com imagens do portfólio (usando Pexels - substituir pelas imagens reais da marmoraria)
  const projetos = [
    {
      id: 1,
      titulo: 'Bancada de Cozinha Premium',
      categoria: 'Bancadas',
      imagem: '../../public/images/image-6.jpeg',
      descricao: 'Bancada em mármore Carrara com acabamento polido para cozinha gourmet.'
    },
    {
      id: 2,
      titulo: 'Bancada de Sala de Estar',
      categoria: 'Bancadas',
      imagem: '../../public/images/image-4.jpeg',
      descricao: 'Bancada de Sala de Estar.'
    },
    {
      id: 3,
      titulo: 'Escada de Mármore Branco',
      categoria: 'Escadas',
      imagem: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      descricao: 'Escada principal em mármore branco com corrimão integrado.'
    },
    {
      id: 4,
      titulo: 'Revestimento de Parede',
      categoria: 'Revestimentos',
      imagem: 'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      descricao: 'Revestimento decorativo em mármore para parede da recepção.'
    },
    {
      id: 5,
      titulo: 'Bancada',
      categoria: 'Bancadas',
      imagem: '../../public/images/image-5.jpeg',
      descricao: 'Conjunto completo para banheiro com bancada e revestimento.'
    },
    {
      id: 6,
      titulo: 'Lareira em Mármore',
      categoria: 'Revestimentos',
      imagem: 'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      descricao: 'Revestimento especial para lareira em mármore escuro.'
    },
    {
      id: 7,
      titulo: 'Mesa em Mármore',
      categoria: 'Móveis',
      imagem: 'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      descricao: 'Mesa de jantar personalizada em mármore com base de ferro.'
    },
    {
      id: 8,
      titulo: 'Soleira em Mármore',
      categoria: 'Detalhes',
      imagem: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      descricao: 'Soleiras e detalhes arquitetônicos em mármore.'
    },
    {
      id: 9,
      titulo: 'Bancada',
      categoria: 'Bancadas',
      imagem: '../../public/images/image-1.jpeg',
      descricao: 'Conjunto completo para banheiro com bancada e revestimento.'
    },
    {
      id: 10,
      titulo: 'Bancada',
      categoria: 'Bancadas',
      imagem: '../../public/images/image-2.jpeg',
      descricao: 'Conjunto completo para banheiro com bancada e revestimento.'
    },
    {
      id: 11,
      titulo: 'Bancada',
      categoria: 'Bancadas',
      imagem: '../../public/images/image-3.jpeg',
      descricao: 'Conjunto completo para banheiro com bancada e revestimento.'
    },
    {
      id: 12,
      titulo: 'Bancada',
      categoria: 'Bancadas',
      imagem: '../../public/images/image-7.jpeg',
      descricao: 'Conjunto completo para banheiro com bancada e revestimento.'
    }
  ];

  const [filtroAtivo, setFiltroAtivo] = useState('Todos');
  const [imagemModal, setImagemModal] = useState<number | null>(null);
  const [mostrarTodasFotos, setMostrarTodasFotos] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const categorias = ['Todos', 'Bancadas', 'Pisos', 'Escadas', 'Revestimentos', 'Móveis', 'Detalhes'];

  // Detectar se é mobile e adicionar listener de redimensionamento
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Resetar estado ao mudar filtro
  useEffect(() => {
    setMostrarTodasFotos(false);
  }, [filtroAtivo]);

  const projetosFiltrados = filtroAtivo === 'Todos' 
    ? projetos 
    : projetos.filter(projeto => projeto.categoria === filtroAtivo);

  // Determinar quantos projetos mostrar
  const projetosExibidos = (() => {
    if (isMobile && filtroAtivo === 'Todos' && !mostrarTodasFotos && projetosFiltrados.length > 5) {
      return projetosFiltrados.slice(0, 5);
    }
    return projetosFiltrados;
  })();

  // Verificar se deve mostrar o botão "Ver todos"
  const mostrarBotaoVerTodos = isMobile && 
    filtroAtivo === 'Todos' && 
    !mostrarTodasFotos && 
    projetosFiltrados.length > 5;
  const abrirModal = (id: number) => {
    setImagemModal(id);
  };

  const fecharModal = () => {
    setImagemModal(null);
  };

  const navegarModal = (direcao: 'anterior' | 'proximo') => {
    if (imagemModal === null) return;
    
    const indiceAtual = projetos.findIndex(p => p.id === imagemModal);
    let novoIndice;
    
    if (direcao === 'anterior') {
      novoIndice = indiceAtual > 0 ? indiceAtual - 1 : projetos.length - 1;
    } else {
      novoIndice = indiceAtual < projetos.length - 1 ? indiceAtual + 1 : 0;
    }
    
    setImagemModal(projetos[novoIndice].id);
  };

  const projetoModal = projetos.find(p => p.id === imagemModal);

  return (
    <div id={id} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossa Galeria</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça alguns dos nossos projetos realizados e se inspire com a beleza 
            e elegância que o mármore pode proporcionar ao seu ambiente.
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
                  ? 'bg-orange-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-orange-50 hover:text-orange-600 shadow'
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
                <h3 className="text-lg font-bold text-gray-900 mb-2">{projeto.titulo}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{projeto.descricao}</p>
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
                onClick={() => navegarModal('anterior')}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-orange-500 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 transition-all duration-200"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              
              <button
                onClick={() => navegarModal('proximo')}
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
                    <h3 className="text-2xl font-bold text-gray-900">{projetoModal.titulo}</h3>
                    <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
                      {projetoModal.categoria}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{projetoModal.descricao}</p>
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
              onClick={() => onNavigate('contato')}
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