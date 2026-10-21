/* ============================================================
   SERVIÇOS  (alimenta o carrossel do topo E os cards da seção Serviços)

   photo: caminho da foto dentro da pasta  public/images/
          Exemplo:  photo: 'images/manutencao.jpg'
          Deixe '' (vazio) para usar a ilustração padrão.
   ============================================================ */
export const SERVICES = [
  {
    icon: 'wrench',
    title: 'Manutenção Industrial',
    desc: 'Manutenção preventiva, preditiva e corretiva em equipamentos industriais.',
    photo: 'images/montagem.jpeg',
  },
  {
    icon: 'crane',
    title: 'Montagem Industrial',
    desc: 'Montagem e instalação de máquinas, equipamentos e estruturas metálicas.',
    photo: 'images/montagem01.jpeg',
  },
  {
    icon: 'lathe',
    title: 'Usinagem e Fabricação',
    desc: 'Fabricação e usinagem de peças sob medida com alto padrão de qualidade.',
    photo: 'images/usinagem01.jpg',
  },
  {
    icon: 'flame',
    title: 'Caldeiraria e Soldagem',
    desc: 'Serviços de caldeiraria, soldagem e manutenção em componentes metálicos.',
    photo: 'images/usinagem02.jpg',
  },
  {
    icon: 'factory',
    title: 'Paradas Industriais',
    desc: 'Planejamento e execução de paradas para manutenção com máxima eficiência.',
    photo: 'images/usinagem.jpg',
  },
]
