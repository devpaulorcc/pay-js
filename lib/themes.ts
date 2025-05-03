export const THEMES = [
  {
    name: 'Padrão',
    value: 'default',
  },
  {
    name: 'Clássico',
    value: 'gray',
  },
  {
    name: 'Roxo',
    value: 'neutral',
  },
  {
    name: 'Laranja',
    value: 'stone',
  },
  {
    name: 'Urbano',
    value: 'zinc',
  },
  {
    name: 'Profundo',
    value: 'slate',
  },
  {
    name: 'Compacto',
    value: 'scaled',
  },
]

export type Theme = (typeof THEMES)[number]
