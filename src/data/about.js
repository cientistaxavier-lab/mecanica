// Números da seção "Quem Somos". Troque pelos dados reais da empresa.
export const STATS = [
  { icon: 'gear', value: 30, suffix: '+', label: 'Anos de mercado' },
  { icon: 'file', value: 500, suffix: '+', label: 'Projetos realizados' },
  { icon: 'users', value: 100, suffix: '+', label: 'Clientes atendidos' },
  { icon: 'shield', value: 0, suffix: '', label: 'Acidentes LTI' },
]

// Missão, Visão e Valores (textos de exemplo: troque pelos da empresa).
export const MISSION =
  'Oferecer soluções em manutenção, montagem e fabricação industrial com segurança, qualidade e cumprimento de prazos, garantindo a continuidade e a produtividade da operação dos nossos clientes.'

export const VISION =
  'Ser referência nacional em serviços de mecânica industrial, reconhecida pela excelência técnica, pela segurança nas operações e pela confiança construída com cada cliente.'

export const VALUES = [
  'Segurança em primeiro lugar',
  'Qualidade e precisão técnica',
  'Ética e transparência',
  'Compromisso com prazos',
  'Valorização das pessoas',
  'Melhoria contínua',
]

// Certificação ISO 9001.
// IMPORTANTE: exiba só se a empresa for realmente certificada.
export const ISO = {
  enabled: true, // false = esconde o bloco inteiro
  // Para usar o selo oficial, coloque a imagem em public/images/iso-9001.png
  // e troque por:  sealImage: 'images/iso-9001.png'
  sealImage: '',
  text: 'Nosso sistema de gestão da qualidade segue a norma ISO 9001, com processos padronizados e melhoria contínua em todas as etapas, da proposta até a entrega do serviço.',
  points: [
    'Processos padronizados e documentados',
    'Rastreabilidade de serviços e materiais',
    'Auditorias periódicas de conformidade',
    'Foco na satisfação do cliente',
  ],
}
