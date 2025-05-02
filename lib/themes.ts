export const THEMES = [
  {
    name: 'Padrão',
    value: 'default',
  },
  {
    name: 'Roxo Suave',
    value: 'neutral',
  },
  {
    name: 'Laranja Elegante',
    value: 'stone',
  },
  {
    name: 'Urbano',
    value: 'zinc',
  },
  {
    name: 'Clássico',
    value: 'gray',
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
