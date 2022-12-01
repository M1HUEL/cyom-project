import Head from 'next/head'

import Header from '../components/Header'

import { FcLike } from 'react-icons/fc'

export default function Home() {
  return (
    <>
      <Head>
        <title>Cyom - The best blog website!!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full h-full bg-[#00509d]">
        <Header />
        <div>
          <div className="flex flex-col space-y-3 px-12 py-3 tablet:px-24 tablet:py-12 desktop:px-74 desktop:py-24">
            <div className="flex flex-col space-y-12">
              <h1 className="desktop:text-center font-black text-4xl tablet:text-5xl desktop:text-8xl text-white">
                ¡¡¡Descubre las metodologias de desarrollo de software más
                geniales!!!
              </h1>
              <p className="desktop:text-center font-thin text-2xl tablet:text-3xl desktop:text-4Fxl text-white">
                ¿Estás por iniciar un proyecto de desarrollo de software o
                planeas desarrollar algo en el corto o mediano plazo? Este
                artículo lo tienes que leer. No te tomará más de 5 minutos y
                puede salvar tu proyecto y dinero de una manera increíble. En
                desarrollo de software hay muchas historias de éxito, pero
                también de terror ¿por qué?; porque desarrollar software es más
                arte que tecnología. Sí, así como lo escuchas, el desarrollo de
                software es un proceso artístico en donde los participantes (los
                artistas del desarrollo) tratan de entender la necesidad de tu
                negocio, para después desarrollar la solución técnica que lo
                resuelve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
