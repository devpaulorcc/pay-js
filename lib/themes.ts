export const THEMES = [
  {
    name: 'Padrão',
    value: 'default',
  },
  {
    name: 'Roxo',
    value: 'neutral',
  },
  {
    name: 'Dourado',
    value: 'stone',
  },
  {
    name: 'Zinc',
    value: 'zinc',
  },
  {
    name: 'Cinza',
    value: 'gray',
  },
  {
    name: 'Slate',
    value: 'slate',
  },
  {
    name: 'Pequeno',
    value: 'scaled',
  },
]
export type Theme = (typeof THEMES)[number]
