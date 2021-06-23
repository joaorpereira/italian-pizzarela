import Margherita from '../../assets/pizza-margherita.jpg'
import Frango from '../../assets/pizza-frango.jpg'
import Calabresa from '../../assets/pizza-calabresa.jpg'
import Milho from '../../assets/pizza-milho.jpg'
import Mussarela from '../../assets/pizza-mussarela.jpg'
import Bolonhesa from '../../assets/pizza-bolonhesa.jpeg'

import Pepsi from '../../assets/pepsi-Logo.jpg'
import CocaCola from '../../assets/coca-cola.png'
import Guarana from '../../assets/guarana-logo.png'
import Heineken from '../../assets/heineken-logo.jpg'
import Brahma from '../../assets/logo-brahma.png'
import Antartica from '../../assets/antartica-logo.png'

export const brands = [Pepsi, CocaCola, Guarana, Heineken, Brahma, Antartica]

export const pizzas = [
  {
    name: 'Calabresa',
    image: Calabresa,
    prices: { small: 19.99, medium: 27.99, big: 49.99 },
  },
  {
    name: 'Frango',
    image: Frango,
    prices: { small: 19.99, medium: 27.99, big: 49.99 },
  },
  {
    name: 'Marguerita',
    image: Margherita,
    prices: { small: 19.99, medium: 27.99, big: 49.99 },
  },
  {
    name: 'Milho Verde',
    image: Milho,
    prices: { small: 19.99, medium: 27.99, big: 49.99 },
  },
  {
    name: 'Mussarela',
    image: Mussarela,
    prices: { small: 19.99, medium: 27.99, big: 49.99 },
  },
  {
    name: 'Bolonhesa',
    image: Bolonhesa,
    prices: { small: 19.99, medium: 27.99, big: 49.99 },
  },
]

export const sizes = [
  { name: 'Pequena', size: '20cm', label: 'small' },
  { name: 'Média', size: '30cm', label: 'medium' },
  { name: 'Grande', size: '45cm', label: 'large' },
]

export const options = {
  threshold: 0,
  rootMargin: '0px 0px -200px 0px',
}