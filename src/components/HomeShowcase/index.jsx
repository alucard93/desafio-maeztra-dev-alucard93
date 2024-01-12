import React from 'react'
import ShowCase from './Showcase'
import img1 from '../../assets/showcase/308x381-4.png'
import img2 from '../../assets/showcase/308x381-1.png'

const HomeShowcase = () => {
  const showcasesData = [
    {
      image: img1,
      altText: 'Descrição da Imagem 1',
      colors: ['#deac71', '#d37164', '#6497d3', '#3c3b79'], // Cores em formato hexadecimal
      price: 'R$ 500,00',
      name: 'Faux Suede Mini Skirt',
      description:
        'A faux suede mini skirt featuring exposed button-front closures and panel seam construction.',
    },
    {
      image: img2,
      altText: 'Descrição da Imagem 1',
      colors: ['#1C1A19', '#D84E4B', '#CFC9B0', '#EAE9E5'], // Cores em formato hexadecimal
      price: 'R$ 500,00',
      name: 'Ruched Rose Print Mini Skirt',
      description:
        'A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.',
    },
    {
      image: img1,
      altText: 'Descrição da Imagem 1',
      colors: ['#deac71', '#d37164', '#6497d3', '#3c3b79'], // Cores em formato hexadecimal
      price: 'R$ 500,00',
      name: 'Faux Suede Mini Skirt',
      description:
        'A faux suede mini skirt featuring exposed button-front closures and panel seam construction.',
    },
    {
      image: img2,
      altText: 'Descrição da Imagem 1',
      colors: ['#1C1A19', '#D84E4B', '#CFC9B0', '#EAE9E5'], // Cores em formato hexadecimal
      price: 'R$ 500,00',
      name: 'Ruched Rose Print Mini Skirt',
      description:
        'A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.',
    },
    {
      image: img1,
      altText: 'Descrição da Imagem 1',
      colors: ['#deac71', '#d37164', '#6497d3', '#3c3b79'], // Cores em formato hexadecimal
      price: 'R$ 500,00',
      name: 'Faux Suede Mini Skirt',
      description:
        'A faux suede mini skirt featuring exposed button-front closures and panel seam construction.',
    },
    {
      image: img1,
      altText: 'Descrição da Imagem 1',
      colors: ['#deac71', '#d37164', '#6497d3', '#3c3b79'], // Cores em formato hexadecimal
      price: 'R$ 500,00',
      name: 'Faux Suede Mini Skirt',
      description:
        'A faux suede mini skirt featuring exposed button-front closures and panel seam construction.',
    },
    {
      image: img2,
      altText: 'Descrição da Imagem 1',
      colors: ['#1C1A19', '#D84E4B', '#CFC9B0', '#EAE9E5'], // Cores em formato hexadecimal
      price: 'R$ 500,00',
      name: 'Ruched Rose Print Mini Skirt',
      description:
        'A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.',
    },
    {
      image: img1,
      altText: 'Descrição da Imagem 1',
      colors: ['#deac71', '#d37164', '#6497d3', '#3c3b79'], // Cores em formato hexadecimal
      price: 'R$ 500,00',
      name: 'Faux Suede Mini Skirt',
      description:
        'A faux suede mini skirt featuring exposed button-front closures and panel seam construction.',
    },
    {
      image: img2,
      altText: 'Descrição da Imagem 1',
      colors: ['#1C1A19', '#D84E4B', '#CFC9B0', '#EAE9E5'], // Cores em formato hexadecimal
      price: 'R$ 500,00',
      name: 'Ruched Rose Print Mini Skirt',
      description:
        'A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.',
    },
    {
      image: img1,
      altText: 'Descrição da Imagem 1',
      colors: ['#deac71', '#d37164', '#6497d3', '#3c3b79'], // Cores em formato hexadecimal
      price: 'R$ 500,00',
      name: 'Faux Suede Mini Skirt',
      description:
        'A faux suede mini skirt featuring exposed button-front closures and panel seam construction.',
    },
  ]
  return (
    <div>
      <ShowCase showcasesData={showcasesData} />
    </div>
  )
}

export default HomeShowcase
