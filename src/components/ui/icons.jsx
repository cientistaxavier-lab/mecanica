// Ícones do site (formato SVG inline).
// Para criar um novo ícone: adicione uma entrada aqui e use <Icon name="nome-do-icone" />.
const icons = {
  gear: {
    viewBox: '0 0 24 24',
    props: { fill: 'none', stroke: 'currentColor', strokeWidth: '1.6' },
    body: (
      <>
        <circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/>
      </>
    ),
  },
  shield: {
    viewBox: '0 0 24 24',
    props: { fill: 'none', stroke: 'currentColor', strokeWidth: '1.6' },
    body: (
      <>
        <path d="M12 2l8 3v6c0 5-3.5 8.5-8 11-4.5-2.5-8-6-8-11V5l8-3z"/><path d="M9 12l2 2 4-4"/>
      </>
    ),
  },
  users: {
    viewBox: '0 0 24 24',
    props: { fill: 'none', stroke: 'currentColor', strokeWidth: '1.6' },
    body: (
      <>
        <circle cx="9" cy="8" r="3"/><path d="M2 20c0-3.5 3-6 7-6s7 2.5 7 6"/><circle cx="17" cy="9" r="2.4"/><path d="M15.5 14c2.9.4 5 2.3 5 5.5"/>
      </>
    ),
  },
  headset: {
    viewBox: '0 0 24 24',
    props: { fill: 'none', stroke: 'currentColor', strokeWidth: '1.6' },
    body: (
      <>
        <path d="M4 13v-1a8 8 0 0 1 16 0v1"/><rect x="3" y="13" width="4" height="6" rx="1"/><rect x="17" y="13" width="4" height="6" rx="1"/><path d="M19 19v1a3 3 0 0 1-3 3h-3"/>
      </>
    ),
  },
  arrow: {
    viewBox: '0 0 24 24',
    props: { fill: 'none', stroke: 'currentColor', strokeWidth: '2' },
    body: (
      <>
        <path d="M5 12h14M13 6l6 6-6 6"/>
      </>
    ),
  },
  chevleft: {
    viewBox: '0 0 24 24',
    props: { fill: 'none', stroke: 'currentColor', strokeWidth: '2' },
    body: (
      <>
        <path d="M15 6l-6 6 6 6"/>
      </>
    ),
  },
  chevright: {
    viewBox: '0 0 24 24',
    props: { fill: 'none', stroke: 'currentColor', strokeWidth: '2' },
    body: (
      <>
        <path d="M9 6l6 6-6 6"/>
      </>
    ),
  },
  whats: {
    viewBox: '0 0 24 24',
    props: { fill: 'currentColor' },
    body: (
      <>
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.2-.1-1-.4-2-1.2-.7-.6-1.2-1.4-1.4-1.6-.1-.2 0-.4.1-.5l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.6-1.5-.8-2-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.2s1 2.6 1.1 2.7c.1.2 2 3 4.7 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.1-.1-.2-.3-.2-.5-.3z"/>
      </>
    ),
  },
  file: {
    viewBox: '0 0 24 24',
    props: { fill: 'none', stroke: 'currentColor', strokeWidth: '1.6' },
    body: (
      <>
        <path d="M6 2h9l5 5v15H6z"/><path d="M15 2v5h5M9 13h6M9 17h6"/>
      </>
    ),
  },
  wrench: {
    viewBox: '0 0 24 24',
    props: { fill: 'none', stroke: 'currentColor', strokeWidth: '1.6' },
    body: (
      <>
        <path d="M14.7 6.3a4 4 0 0 0-5.4 5l-6 6 2.4 2.4 6-6a4 4 0 0 0 5-5.4l-2.6 2.6-2-2 2.6-2.6z"/>
      </>
    ),
  },
  crane: {
    viewBox: '0 0 24 24',
    props: { fill: 'none', stroke: 'currentColor', strokeWidth: '1.6' },
    body: (
      <>
        <path d="M4 21V6l14-3v6"/><path d="M4 10h13M17 9v12M13 21h8"/><circle cx="17" cy="9" r="1.2" fill="currentColor" stroke="none"/>
      </>
    ),
  },
  lathe: {
    viewBox: '0 0 24 24',
    props: { fill: 'none', stroke: 'currentColor', strokeWidth: '1.6' },
    body: (
      <>
        <circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="2.4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/>
      </>
    ),
  },
  flame: {
    viewBox: '0 0 24 24',
    props: { fill: 'none', stroke: 'currentColor', strokeWidth: '1.6' },
    body: (
      <>
        <path d="M12 2s-5 5.5-5 10a5 5 0 0 0 10 0c0-2-1-3-1-3s-.5 2-2 2c-2 0-1.5-3-.5-4.5C14.5 5 12 2 12 2z"/>
      </>
    ),
  },
  factory: {
    viewBox: '0 0 24 24',
    props: { fill: 'none', stroke: 'currentColor', strokeWidth: '1.6' },
    body: (
      <>
        <path d="M2 21V11l6 4v-4l6 4V7l8-3v17z"/>
      </>
    ),
  },
  target: {
    viewBox: '0 0 24 24',
    props: { fill: 'none', stroke: 'currentColor', strokeWidth: '1.6' },
    body: (
      <>
        <circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/>
      </>
    ),
  },
  check: {
    viewBox: '0 0 24 24',
    props: { fill: 'none', stroke: 'currentColor', strokeWidth: '2' },
    body: (
      <>
        <path d="M5 13l4 4L19 7"/>
      </>
    ),
  },
  eye: {
    viewBox: '0 0 24 24',
    props: { fill: 'none', stroke: 'currentColor', strokeWidth: '1.6' },
    body: (
      <>
        <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>
      </>
    ),
  },
  diamond: {
    viewBox: '0 0 24 24',
    props: { fill: 'none', stroke: 'currentColor', strokeWidth: '1.6' },
    body: (
      <>
        <path d="M6 3h12l4 6-10 12L2 9z"/><path d="M2 9h20M9 3l3 6 3-6M12 9v12"/>
      </>
    ),
  },
  clock: {
    viewBox: '0 0 24 24',
    props: { fill: 'none', stroke: 'currentColor', strokeWidth: '1.6' },
    body: (
      <>
        <circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>
      </>
    ),
  },
  phone: {
    viewBox: '0 0 24 24',
    props: { fill: 'none', stroke: 'currentColor', strokeWidth: '1.6' },
    body: (
      <>
        <path d="M4 4h4l2 5-2.5 1.5a12 12 0 0 0 6 6L15 14l5 2v4a2 2 0 0 1-2 2C9.5 22 2 14.5 2 6a2 2 0 0 1 2-2z"/>
      </>
    ),
  },
  mail: {
    viewBox: '0 0 24 24',
    props: { fill: 'none', stroke: 'currentColor', strokeWidth: '1.6' },
    body: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="1"/><path d="M2 6l10 7 10-7"/>
      </>
    ),
  },
  pin: {
    viewBox: '0 0 24 24',
    props: { fill: 'none', stroke: 'currentColor', strokeWidth: '1.6' },
    body: (
      <>
        <path d="M12 22s7-7.3 7-12.5A7 7 0 0 0 5 9.5C5 14.7 12 22 12 22z"/><circle cx="12" cy="9.5" r="2.4"/>
      </>
    ),
  },
  linkedin: {
    viewBox: '0 0 24 24',
    props: { fill: 'currentColor' },
    body: (
      <>
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.5-.95 1.8-1.95 3.7-1.95 4 0 4.7 2.6 4.7 6V21h-4v-5.3c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21H9z"/>
      </>
    ),
  },
  instagram: {
    viewBox: '0 0 24 24',
    props: { fill: 'none', stroke: 'currentColor', strokeWidth: '1.6' },
    body: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
      </>
    ),
  },
  youtube: {
    viewBox: '0 0 24 24',
    props: { fill: 'currentColor' },
    body: (
      <>
        <rect x="2" y="5" width="20" height="14" rx="4" fill="none" stroke="currentColor" strokeWidth="1.6"/><path d="M10 9l6 3-6 3z"/>
      </>
    ),
  },
}

export default icons
