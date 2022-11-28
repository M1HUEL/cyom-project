import Head from "next/head";

import Header from "../components/Header";

export default function MetodologySpiral() {
    return (
        <>
            <Head>
                <title>Cyom - Metodology Spiral</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className='w-full h-full font-public'>
                <div className='bg-gradient-to-r from-[#1A2980] to-[#2b5876]'>
                    <Header />
                    <div className='flex flex-col px-12 py-3 tablet:px-24 tablet:py-12 desktop:px-80 desktop:py-24'>
                        <h1 className='desktop:text-center font-bold text-2xl tablet:text-3xl desktop:text-4Fxl text-white'>Introducción a la</h1>
                        <div className='space-y-3'>
                            <h3 className='desktop:text-center font-black text-4xl tablet:text-5xl desktop:text-6xl text-white'>Metodología Scrum</h3>
                            <p className='desktop:text-center font-light text-sm tablet:text-lg desktop:text-xl text-white'>El desarrollo en espiral es un modelo de ciclo de vida del software definido por primera vez por Barry Boehm en 1986, utilizado generalmente en la Ingeniería de software. Las actividades de este modelo se conforman en una espiral, en la que cada bucle o iteración representa un conjunto de actividades. Las actividades no están fijadas a ninguna prioridad, sino que las siguientes se eligen en función del análisis de riesgo, comenzando por el bucle interior.</p>
                            <video src="/assets/videos/Metodología-Scrum.webm" controls className='w-full h-full px-4 py-4 rounded-xl bg-white'></video>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col space-y-3 px-12 md:px-24 xl:px-32 py-12 bg-white'>
                    <h4 className='font-black text-3xl desktop:text-3xl text-black'>Definición de la Metodología Espiral</h4>
                    <p className='font-light text-sm tablet:text-lg desktop:text-xl text-black'>Metodología de espiral es un método de desarrollo de software que combina el modelo waterfall y el modelo por iteraciones, en el que se determina el ciclo de vida del programa a través de distintas espirales repetitivas, las cuales siguen funcionando hasta que se termina el producto. Se caracteriza por requerir de actualizaciones constantes en pasos pequeños, lo que implica mayor lentitud e inversión a la hora de implantarlo.</p>
                    <p className='font-light text-sm tablet:text-lg desktop:text-xl text-black'>Inicialmente, fue propuesto por Barry W. Boehm en uno de sus ensayos, y el modelo pretendía paliar los inconvenientes que surgían de la aplicación del modelo en cascada. Basó el modelo en la detección y resolución de riesgos, buscando controlar todos los factores que puedan comprometer la integridad y el funcionamiento del proyecto, exponiendo que si podemos controlar los riesgos no habría ningún motivo que impida el éxito del mismo.</p>
                </div>
                <div className='flex flex-col space-y-3 px-12 md:px-24 xl:px-32 py-12 bg-gray-100'>
                    <h4 className='font-black text-3xl desktop:text-3xl text-black'>Fases de la Metodología Espiral</h4>
                    <p className='font-light text-sm tablet:text-lg desktop:text-xl text-black'>Metodología de espiral es un método de desarrollo de software que combina el modelo waterfall y el modelo por iteraciones, en el que se determina el ciclo de vida del programa a través de distintas espirales repetitivas, las cuales siguen funcionando hasta que se termina el producto. Se caracteriza por requerir de actualizaciones constantes en pasos pequeños, lo que implica mayor lentitud e inversión a la hora de implantarlo.</p>
                    <p className='font-light text-sm tablet:text-lg desktop:text-xl text-black'>Inicialmente, fue propuesto por Barry W. Boehm en uno de sus ensayos, y el modelo pretendía paliar los inconvenientes que surgían de la aplicación del modelo en cascada. Basó el modelo en la detección y resolución de riesgos, buscando controlar todos los factores que puedan comprometer la integridad y el funcionamiento del proyecto, exponiendo que si podemos controlar los riesgos no habría ningún motivo que impida el éxito del mismo.</p>
                </div>
                {/* Steps */}
                <div className='grid grid-cols-1 desktop:grid-cols-2 px-12 tablet:px-24 desktop:px-32 py-12'>
                    <div className='col-span-1 text-center space-y-3'>
                        <h5 className='font-black text-3xl desktop:text-3xl text-black'>Fase de Análisis</h5>
                        <p className='font-light text-sm tablet:text-lg desktop:text-xl text-black'>En el primer momento, debemos encargarnos de determinar los objetivos principales a conseguir, discutir sobre las condiciones del proyecto y buscar las distintas alternativas que se pueden llegar a utilizar para llegar a cumplir esos objetivos. </p>
                        <p className='font-light text-sm tablet:text-lg desktop:text-xl text-black'>Se debe realizar un calendario y un cronograma, determinar los recursos disponibles y estimar los costes, además de seleccionar las vías de comunicación entre desarrollador y cliente durante el proceso.</p>
                    </div>
                    <div className='hidden md:grid md:col-span-1 m-auto'>
                        <img src='https://img.freepik.com/vector-gratis/ilustracion-concepto-enfoque-desarrollo_114360-5601.jpg?w=826&t=st=1669183070~exp=1669183670~hmac=0035ee25c37a7ed22eb80bb5d9193110b5dcec10547a9a3792eda895e2fc5fcc' className='w-[400px] h-[400px] object-cover' />
                    </div>
                </div>
                <div className='grid grid-cols-1 desktop:grid-cols-2 px-12 tablet:px-24 desktop:px-32 py-12'>
                    <div className='col-span-1 text-center space-y-3'>
                        <h5 className='font-black text-3xl desktop:text-3xl text-black'>Fase de Análisis de Riesgos</h5>
                        <p className='font-light text-sm tablet:text-lg desktop:text-xl text-black'>En el primer momento, debemos encargarnos de determinar los objetivos principales a conseguir, discutir sobre las condiciones del proyecto y buscar las distintas alternativas que se pueden llegar a utilizar para llegar a cumplir esos objetivos. </p>
                        <p className='font-light text-sm tablet:text-lg desktop:text-xl text-black'>Se debe realizar un calendario y un cronograma, determinar los recursos disponibles y estimar los costes, además de seleccionar las vías de comunicación entre desarrollador y cliente durante el proceso.</p>
                    </div>
                    <div className='hidden md:grid md:col-span-1 m-auto'>
                        <img src='https://img.freepik.com/vector-gratis/ilustracion-concepto-analisis-configuracion_114360-1438.jpg?w=1380&t=st=1669183218~exp=1669183818~hmac=13813dbb8b1f1db7715b80e8a8ec3d91b18b035d97499fc1765681fa5bc7421a' className='w-[400px] h-[400px] object-cover' />
                    </div>
                </div>
                <div className='grid grid-cols-1 desktop:grid-cols-2 px-12 tablet:px-24 desktop:px-32 py-12'>
                    <div className='col-span-1 text-center space-y-3'>
                        <h5 className='font-black text-3xl desktop:text-3xl text-black'>Fase de Desarrollo</h5>
                        <p className='font-light text-sm tablet:text-lg desktop:text-xl text-black'>En el primer momento, debemos encargarnos de determinar los objetivos principales a conseguir, discutir sobre las condiciones del proyecto y buscar las distintas alternativas que se pueden llegar a utilizar para llegar a cumplir esos objetivos. </p>
                        <p className='font-light text-sm tablet:text-lg desktop:text-xl text-black'>Se debe realizar un calendario y un cronograma, determinar los recursos disponibles y estimar los costes, además de seleccionar las vías de comunicación entre desarrollador y cliente durante el proceso.</p>
                    </div>
                    <div className='hidden desktop:grid desktop:col-span-1 m-auto'>
                        <img src='https://img.freepik.com/vector-gratis/ilustracion-concepto-auditoria-ambiental_114360-8784.jpg?w=826&t=st=1669183193~exp=1669183793~hmac=ac83661c242a945f2162e0f619718520c95db80c2e0d973929c70bb60d929851' className='w-[400px] h-[400px] object-cover' />
                    </div>
                </div>
            </div>
        </>
    );
}