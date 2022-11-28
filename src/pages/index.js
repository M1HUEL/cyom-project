import Head from 'next/head'

import Header from '../components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Cyom - The best blog website!!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='w-full h-full font-public'>
        <div className='bg-gradient-to-r from-[#1A2980] to-[#2b5876]'>
          <Header />
          <div className='flex flex-col px-80 py-12'>
            <h1 className='text-center font-bold text-3xl text-white'>Introducción a la</h1>
            <div className='space-y-3'>
              <h3 className='text-center font-black text-6xl text-white'>Metodologia Espiral</h3>
              <p className='text-center font-light text-xl text-white'>El desarrollo en espiral es un modelo de ciclo de vida del software definido por primera vez por Barry Boehm en 1986, utilizado generalmente en la Ingeniería de software. Las actividades de este modelo se conforman en una espiral, en la que cada bucle o iteración representa un conjunto de actividades. Las actividades no están fijadas a ninguna prioridad, sino que las siguientes se eligen en función del análisis de riesgo, comenzando por el bucle interior.</p>
              <img src='https://images.alphacoders.com/109/1095104.jpg' className='px-4 py-4 rounded-xl bg-white' />
            </div>
          </div>
        </div>
        <div className='flex flex-col space-y-3 px-32 py-12 bg-white'>
          <h4 className='font-black text-3xl text-black'>Definición de la Metodología Espiral</h4>
          <p className='font-light text-xl text-black'>Metodología de espiral es un método de desarrollo de software que combina el modelo waterfall y el modelo por iteraciones, en el que se determina el ciclo de vida del programa a través de distintas espirales repetitivas, las cuales siguen funcionando hasta que se termina el producto. Se caracteriza por requerir de actualizaciones constantes en pasos pequeños, lo que implica mayor lentitud e inversión a la hora de implantarlo.</p>
          <p className='font-light text-xl text-black'>Inicialmente, fue propuesto por Barry W. Boehm en uno de sus ensayos, y el modelo pretendía paliar los inconvenientes que surgían de la aplicación del modelo en cascada. Basó el modelo en la detección y resolución de riesgos, buscando controlar todos los factores que puedan comprometer la integridad y el funcionamiento del proyecto, exponiendo que si podemos controlar los riesgos no habría ningún motivo que impida el éxito del mismo.</p>
        </div>
        <div className='flex flex-col space-y-3 px-32 py-12 bg-gray-100'>
          <h4 className='font-black text-3xl text-black'>Fases de la Metodología Espiral</h4>
          <p className='font-light text-xl text-black'>Metodología de espiral es un método de desarrollo de software que combina el modelo waterfall y el modelo por iteraciones, en el que se determina el ciclo de vida del programa a través de distintas espirales repetitivas, las cuales siguen funcionando hasta que se termina el producto. Se caracteriza por requerir de actualizaciones constantes en pasos pequeños, lo que implica mayor lentitud e inversión a la hora de implantarlo.</p>
          <p className='font-light text-xl text-black'>Inicialmente, fue propuesto por Barry W. Boehm en uno de sus ensayos, y el modelo pretendía paliar los inconvenientes que surgían de la aplicación del modelo en cascada. Basó el modelo en la detección y resolución de riesgos, buscando controlar todos los factores que puedan comprometer la integridad y el funcionamiento del proyecto, exponiendo que si podemos controlar los riesgos no habría ningún motivo que impida el éxito del mismo.</p>
        </div>
        {/* Steps */}
        <div className='grid grid-cols-2 px-32 py-12'>
          <div className='col-span-1 text-center space-y-3'>
            <h5 className='font-black text-3xl text-black'>Fase de Análisis</h5>
            <p className='font-light text-xl text-black'>En el primer momento, debemos encargarnos de determinar los objetivos principales a conseguir, discutir sobre las condiciones del proyecto y buscar las distintas alternativas que se pueden llegar a utilizar para llegar a cumplir esos objetivos. </p>
            <p className='font-light text-xl text-black'>Se debe realizar un calendario y un cronograma, determinar los recursos disponibles y estimar los costes, además de seleccionar las vías de comunicación entre desarrollador y cliente durante el proceso.</p>
          </div>
          <div className='col-span-1 m-auto'>
            <img src='https://image.freepik.com/vector-gratis/ilustracion-concepto-analisis_114360-1119.jpg' className='w-[400px] h-[400px] object-cover' />
          </div>
        </div>
        <div className='grid grid-cols-2 px-32 py-12'>
          <div className='col-span-1 text-center space-y-3'>
            <h5 className='font-black text-3xl text-black'>Fase de Análisis de Riesgos</h5>
            <p className='font-light text-xl text-black'>En el primer momento, debemos encargarnos de determinar los objetivos principales a conseguir, discutir sobre las condiciones del proyecto y buscar las distintas alternativas que se pueden llegar a utilizar para llegar a cumplir esos objetivos. </p>
            <p className='font-light text-xl text-black'>Se debe realizar un calendario y un cronograma, determinar los recursos disponibles y estimar los costes, además de seleccionar las vías de comunicación entre desarrollador y cliente durante el proceso.</p>
          </div>
          <div className='col-span-1 m-auto'>
            <img src='https://img.freepik.com/vector-gratis/equipo-analistas-riesgos-seguridad-cibernetica-reduce-riesgos-gestion-seguridad-cibernetica-riesgo-seguridad-cibernetica-concepto-estrategia-gestion_335657-1828.jpg?w=1380&t=st=1669094529~exp=1669095129~hmac=13506842538c024bd7016ebb0adc91756da658ee7a95c81fb69c212de917071d' className='w-[400px] h-[400px] object-cover' />
          </div>
        </div>
        <div className='grid grid-cols-2 px-32 py-12'>
          <div className='col-span-1 text-center space-y-3'>
            <h5 className='font-black text-3xl text-black'>Fase de Desarrollo</h5>
            <p className='font-light text-xl text-black'>En el primer momento, debemos encargarnos de determinar los objetivos principales a conseguir, discutir sobre las condiciones del proyecto y buscar las distintas alternativas que se pueden llegar a utilizar para llegar a cumplir esos objetivos. </p>
            <p className='font-light text-xl text-black'>Se debe realizar un calendario y un cronograma, determinar los recursos disponibles y estimar los costes, además de seleccionar las vías de comunicación entre desarrollador y cliente durante el proceso.</p>
          </div>
          <div className='col-span-1 m-auto'>
            <img src='https://img.freepik.com/vector-gratis/desarrollo-aplicaciones-escritorio-telefonos-inteligentes_23-2148683810.jpg?w=826&t=st=1669094663~exp=1669095263~hmac=3da4baa3366683f43685a4ab6844d4536341fb434168fad79e83eec5fc303b96' className='w-[400px] h-[400px] object-cover' />
          </div>
        </div>
      </div>

    </>
  )
}
