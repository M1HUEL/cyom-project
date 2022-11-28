import Head from "next/head";

import Header from "../components/Header";

export default function MetodologyScrum() {
    return (
        <>
            <Head>
                <title>Cyom - Metodology Scrum</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className='w-full h-full font-public'>
                <div className='bg-gradient-to-r from-[#1A2980] to-[#2b5876]'>
                    <Header />
                    <div className='flex flex-col px-12 py-3 tablet:px-24 tablet:py-12 desktop:px-80 desktop:py-24'>
                        <h1 className='desktop:text-center font-bold text-2xl tablet:text-3xl desktop:text-4Fxl text-white'>Introducción a la</h1>
                        <div className='space-y-3'>
                            <h3 className='desktop:text-center font-black text-4xl tablet:text-5xl desktop:text-6xl text-white'>Metodología SCRUM</h3>
                            <p className='desktop:text-center font-light text-sm tablet:text-lg desktop:text-xl text-white'>Entre las diferentes metodologías de un proyecto, Scrum es un método para trabajar en equipo a partir de iteraciones o Sprints. Se suele planificar por semanas. Al final de cada Sprint o iteración, se va revisando el trabajo validado de la anterior semana. En función de esto, se priorizan y planifican las actividades en las que invertiremos nuestros recursos en el siguiente Sprint.</p>
                            <video src="/assets/videos/Metodología-Scrum.webm" controls className='w-full h-full px-4 py-4 rounded-xl bg-white'></video>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col space-y-3 px-12 md:px-24 xl:px-32 py-12 bg-white'>
                    <h4 className='font-black text-3xl desktop:text-3xl text-black'>Definición de la Metodología SCRUM</h4>
                    <p className='font-light text-sm tablet:text-lg desktop:text-xl text-black'>El término Scrum (traducido del inglés como melé) fue acuñado y definido por Ikujiro Nonaka e Hirotaka Takeuchi en los años 80, cuando las principales empresa de desarrollo tecnológica empezaban a dominar el mercado y a definir conductas de trabajo. Ambos publicaron en 1986 en la Harvard Business Review este artículo “El nuevo nuevo juego para el desarrollo de productos”. Así abrieron una caja que durante los próximos años ha evolucionado y se ha extendido por muchos sectores, no sólo el tecnológico. El avance de las formaciones de las melés en partidos de rugby, inspiró a Nonaka y Takeuchi para bautizar una nueva forma de trabajar que ya venía dándose en muchas empresas tecnológicas como Honda, Canon y Fuji-Xerox. Nonaka y Takeuchi  explican cómo esta metodología ágil se compara con la formación de melé del rugby de la siguiente forma: «El enfoque de las ‘carrera de relevos’ para el desarrollo de productos entra en conflicto con el objetivo de obtener la máxima velocidad y flexibilidad. En su lugar un enfoque como el rugby – donde el equipo intenta avanzar como equipo, enviando el balón hacia atrás y luego avanzar – sirve mejor a los desarrollos competitivos que se ven hoy en día».</p>
                    <p className='font-light text-sm tablet:text-lg desktop:text-xl text-black'>El avance de las formaciones de las melés en partidos de rugby, inspiró a Nonaka y Takeuchi para bautizar una nueva forma de trabajar que ya venía dándose en muchas empresas tecnológicas como Honda, Canon y Fuji-Xerox.</p>
                    <p className='font-light text-sm tablet:text-lg desktop:text-xl text-black'>Nonaka y Takeuchi  explican cómo esta metodología ágil se compara con la formación de melé del rugby de la siguiente forma: «El enfoque de las ‘carrera de relevos’ para el desarrollo de productos entra en conflicto con el objetivo de obtener la máxima velocidad y flexibilidad. En su lugar un enfoque como el rugby – donde el equipo intenta avanzar como equipo, enviando el balón hacia atrás y luego avanzar – sirve mejor a los desarrollos competitivos que se ven hoy en día».</p>
                </div>
                <div className='flex flex-col space-y-3 px-12 md:px-24 xl:px-32 py-12 bg-gray-100'>
                    <h4 className='font-black text-3xl desktop:text-3xl text-black'>Características de la Metodología SCRUM</h4>
                    <p className='font-light text-sm tablet:text-lg desktop:text-xl text-black'>Scrum es una metodología ágil, por lo que su objetivo será controlar y planificar proyectos con un gran volumen de cambios de última hora, en donde la incertidumbre sea elevada.</p>
                    <p className='font-light text-sm tablet:text-lg desktop:text-xl text-black'>La metodología SCRUM se centra en ajustar sus resultados y responder a las exigencias reales y exactas del cliente. De ahí, que se vaya revisando cada entregable, ya que los requerimientos van variando a corto plazo. El tiempo mínimo para un Sprint es de una semana y el máximo es de cuatro semanas.</p>
                    <p className='font-light text-sm tablet:text-lg desktop:text-xl text-black'>Entre las principales características de la metodología Scrum, desataca que es un desarrollo incremental en lugar de la clásica planificación del desarrollo completo de un producto o servicio. Los equipos Scrum se caracterizan por ser auto-organizados. Y se centra en el producto final, en la calidad del mismo.</p>
                    <p className='font-light text-sm tablet:text-lg desktop:text-xl text-black'>Además, en la metodología Scrum agile se solapan diferentes fases de desarrollo, en lugar de llevar a cabo una planificación secuencial o de cascada.</p>
                    <p className='font-light text-sm tablet:text-lg desktop:text-xl text-black'>Así pues, los proyectos que utilizan una metodología de desarrollo ágil pueden aplicar Scrum. En ellos, los requisitos varían a muy corto plazo, necesitan una gestión muy flexible, orientada a objetivos y resultados concretos. Y la metodología Scrum es perfecta.</p>
                    <p className='font-light text-sm tablet:text-lg desktop:text-xl text-black'>El desarrollo del software fue el primero en aplicar la metodología Scrum. Anteriormente, este sector utilizaba para planificar y gestionar sus proyectos con métodos en cascada o secuencial. En ellas se planifican varias fases con unos plazos establecidos y se van ejecutando.</p>
                    <p className='font-light text-sm tablet:text-lg desktop:text-xl text-black'>Sin embargo, en 1993, Jeff Sutherland y su equipo en Easel Corporation adaptaron la metodología Srcum al desarrollo del software. Publicando así el Software Development Process. El método Scrum estaba ahora orientado a objetos, a un control de procesos empírico, desarrollo iterativo e incremental, a una mejora continua de la productividad, así como al desarrollo de sistemas complejos y ágiles.</p>
                    <p className='font-light text-sm tablet:text-lg desktop:text-xl text-black'>En la actualidad, Scrum es utilizado para el desarrollo de muchos tipos de productos, con el objetivo de organizar flujos de trabajo optimizados y flexibles. Una virtud de aplicaciones que integran esta idea para gestionar proyectos, como Sinnaps.</p>
                </div>
                <div className='flex flex-col space-y-3 px-12 md:px-24 xl:px-32 py-12 bg-white'>
                    <h4 className='font-black text-3xl desktop:text-3xl text-black'>Aplicaciones de la Metodología SCRUM</h4>
                    <p className='font-light text-sm tablet:text-lg desktop:text-xl text-black'>En la actualidad, los proyectos se desarrollan en contextos muy versátiles. Son más complejos que antes, frente a unas exigencias del cliente y del mercado mucho más variables, y con una incertidumbre elevada. Por eso, la aplicación del método se ha extendido como la pólvora en numerosos sectores, fuera del mundo del desarrollo de software.</p>
                    <p className='font-light text-sm tablet:text-lg desktop:text-xl text-black'>Así es como funciona la metodología Scrum, basada en sprints. Tenemos un listado de requerimientos, también llamado Backlog. Tomamos uno para desarrollarlo en ese sprint. Lo dividimos en tareas, asignamos esas actividades a los diferentes miembros del equipo. Cada, podemos reunirnos para ir solucionando problemas. Esta reuniones dentro del sprint dependerá de la duración del sprint y del tipo de resultado del proyecto.</p>
                    <p className='font-light text-sm tablet:text-lg desktop:text-xl text-black'>Una vez terminado el objetivo de ese sprint, ya tenemos el resultado para incrementarlo en el total del producto terminado. Por eso, tiene tanto sentido utilizarlo en el sector del software. Porque, este producto ya parte de algo que es capaz de funcionar. Así que en cada sprint, iremos consiguiendo mejoras para añadir al producto final.</p>
                </div>
                <div className='flex flex-col space-y-3 px-12 md:px-24 xl:px-32 py-12 bg-gray-100'>
                    <img src="https://www.sinnaps.com/wp-content/uploads/2017/05/scrum-min.png" className="px-6 py-6 bg-black rounded-xl" />
                    <h4 className='font-black text-3xl desktop:text-3xl text-black'>Fases de la Metodología SCRUM</h4>
                    <p className='font-light text-sm tablet:text-lg desktop:text-xl text-black'>El desarrollo de producto tiene un ciclo de vida en la metodología Scrum. Estas son fases en las que se divide un proceso Scrum:</p>
                    <p className='font-light text-sm tablet:text-lg desktop:text-xl text-black'>Inicialmente, fue propuesto por Barry W. Boehm en uno de sus ensayos, y el modelo pretendía paliar los inconvenientes que surgían de la aplicación del modelo en cascada. Basó el modelo en la detección y resolución de riesgos, buscando controlar todos los factores que puedan comprometer la integridad y el funcionamiento del proyecto, exponiendo que si podemos controlar los riesgos no habría ningún motivo que impida el éxito del mismo.</p>
                </div>
                {/* Steps */}
                <div className='grid grid-cols-1 desktop:grid-cols-2 px-3 tablet:px-6 desktop:px-16 py-12 gap-12'>
                    <div className='flex flex-col space-y-3 px-12 md:px-24 xl:px-32 py-12 bg-gray-100'>
                        <img src='https://img.freepik.com/vector-gratis/ilustracion-concepto-analisis-configuracion_114360-1438.jpg?w=1380&t=st=1669183218~exp=1669183818~hmac=13813dbb8b1f1db7715b80e8a8ec3d91b18b035d97499fc1765681fa5bc7421a' className="px-3 py-3 bg-black rounded-xl" />
                        <h3 className='font-black text-3xl desktop:text-3xl text-black'>Fase #1</h3>
                        <p className='font-light text-sm tablet:text-lg desktop:text-xl text-black'>El desarrollo de producto tiene un ciclo de vida en la metodología Scrum. Estas son fases en las que se divide un proceso Scrum:</p>
                        <p className='font-light text-sm tablet:text-lg desktop:text-xl text-black'>Inicialmente, fue propuesto por Barry W. Boehm en uno de sus ensayos, y el modelo pretendía paliar los inconvenientes que surgían de la aplicación del modelo en cascada. Basó el modelo en la detección y resolución de riesgos, buscando controlar todos los factores que puedan comprometer la integridad y el funcionamiento del proyecto, exponiendo que si podemos controlar los riesgos no habría ningún motivo que impida el éxito del mismo.</p>
                    </div>
                    <div className='flex flex-col space-y-3 px-12 md:px-24 xl:px-32 py-12 bg-gray-100'>
                        <img src="https://img.freepik.com/vector-gratis/ilustracion-concepto-auditoria-ambiental_114360-8784.jpg?w=826&t=st=1669183193~exp=1669183793~hmac=ac83661c242a945f2162e0f619718520c95db80c2e0d973929c70bb60d929851" className="px-3 py-3 bg-black rounded-xl" />
                        <h3 className='font-black text-3xl desktop:text-3xl text-black'>Fases de la Metodología SCRUM</h3>
                        <p className='font-light text-sm tablet:text-lg desktop:text-xl text-black'>El desarrollo de producto tiene un ciclo de vida en la metodología Scrum. Estas son fases en las que se divide un proceso Scrum:</p>
                        <p className='font-light text-sm tablet:text-lg desktop:text-xl text-black'>Inicialmente, fue propuesto por Barry W. Boehm en uno de sus ensayos, y el modelo pretendía paliar los inconvenientes que surgían de la aplicación del modelo en cascada. Basó el modelo en la detección y resolución de riesgos, buscando controlar todos los factores que puedan comprometer la integridad y el funcionamiento del proyecto, exponiendo que si podemos controlar los riesgos no habría ningún motivo que impida el éxito del mismo.</p>
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