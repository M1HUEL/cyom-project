import Head from 'next/head'

import Header from '../components/Header'

import { FcApproval } from 'react-icons/fc'
import Link from 'next/link'

export default function MetodologyWaterfall() {
  return (
    <>
      <Head>
        <title>Cyom - The best blog website!!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full h-full">
        <div className="bg-[#23856d]">
          <Header />
          <div className="flex flex-col px-12 py-3 tablet:px-24 tablet:py-12 desktop:px-80 desktop:py-24">
            <h1 className="desktop:text-center font-bold text-2xl tablet:text-3xl desktop:text-4Fxl text-white">
              Introducción a la
            </h1>
            <div className="space-y-3">
              <h3 className="desktop:text-center font-black text-4xl tablet:text-5xl desktop:text-6xl text-white">
                Metodología Cascada
              </h3>
              <p className="font-light text-xl tablet:text-2xl desktop:text-xl text-white">
                La metodología de desarrollo de software en cascada es un
                proceso de desarrollo secuencial del proyecto. Esta metodología
                se caracteriza por dividir en fases el proceso de desarrollo.
                Cada una de estas fases, se ejecutará tan solo una vez. No se
                podrá iniciar una nueva fase, hasta que se ha terminado y
                comprobado la anterior.
              </p>
              <video
                src="/assets/videos/Metodología-Scrum.webm"
                controls
                className="w-full h-full px-4 py-4 rounded-xl bg-white"
              ></video>
              <p className="text-right text-white">
                Video extraido del canal de YT:
                <Link
                  href="https://www.youtube.com/watch?v=a33xOe9d_Dk&t=26s"
                  className="text-blue-600 ml-2"
                >
                  Espacios Businesss Media
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="post-white">
          <h4 className="post-title">Definición de la metodología</h4>
          <p className="post-text">
            El desarrollo en cascada (en inglés, waterfall model) es un
            procedimiento lineal que se caracteriza por dividir los procesos de
            desarrollo en sucesivas fases de proyecto. Al contrario que en los
            modelos iterativos, cada una de estas fases se ejecuta tan solo una
            vez. Los resultados de cada una de las fases sirven como hipótesis
            de partida para la siguiente. El waterfall model se utiliza,
            especialmente, en el desarrollo de software.
          </p>
        </div>
        <div className="post-gray">
          <h4 className="post-title">Características de la metodología</h4>
          <p className="post-text">
            La metodología cascada es el proceso de desglosar los procesos
            secuenciales de un proyecto de forma descendente, de ahí su nombre.
            Este método se utiliza a menudo en la gestión de proyectos para
            satisfacer las especificaciones requeridas tanto por el cliente como
            por los consumidores. Este método requiere la finalización completa
            del proceso inicial antes de poder pasar al siguiente paso del plan,
            y va descendiendo hasta la última parte. El método ha demostrado su
            utilidad a lo largo de los años porque da resultados. Creado
            originalmente para la industria de la construcción, el método se ha
            adaptado también a la industria de la ingeniería del software. Dicho
            esto, hay otras cosas que debes saber sobre este método. Sigue
            leyendo a continuación para saber más.
          </p>
          <p className="post-text">
            Esta metodología permite estructurar la organización de forma clara
            en aquellos proyectos de desarrollo en los que las diversas fases de
            proyecto se diferencian claramente entre sí. Como cada una de las
            fases concluye con un hito, el proceso de desarrollo es muy fácil de
            comprender. El punto clave del modelo reside en la documentación de
            todos y cada uno de los pasos de proceso. Los conocimientos
            adquiridos se registran en pliegos de requisitos o borradores
            preliminares.
          </p>
          <p className="post-text">
            En teoría, el desarrollo en cascada pretende crear los requisitos
            previos para una ejecución rápida y rentable de los proyectos a
            través de una cuidada planificación previa. Sin embargo, la
            utilización del modelo en la práctica es controvertida. Por una
            parte, en el desarrollo de software las fases de proyecto no suelen
            estar claramente diferenciadas entre sí. Es precisamente en los
            proyectos de software más complejos donde los desarrolladores se
            suelen enfrentar al hecho de que los diversos componentes de una
            misma aplicación se encuentran en diferentes fases de desarrollo al
            mismo tiempo. Por otra parte, la secuencia lineal del waterfall
            model no suele coincidir con la realidad.
          </p>
          <p className="post-text">
            En sentido estricto, el modelo en cascada no prevé la realización de
            ajustes a lo largo del proyecto. Sin embargo, un proyecto de
            software en el que todos los detalles del desarrollo se definieran
            al comienzo, solo podría concluir con éxito si desde el principio se
            invirtiera una gran cantidad de tiempo y dinero en análisis y
            diseño. A todo esto, se añade que los proyectos de software de más
            envergadura se suelen prolongar durante varios años y, de no
            adaptarse a los avances más actuales, obtendrían resultados que ya
            estarían obsoletos en el momento de su aplicación.
          </p>
        </div>
        <div className="post-white">
          <h4 className="post-title">Beneficios de la metodología</h4>
          <div className="flex flex-row items-center space-x-3">
            <div>
              <FcApproval className="w-14 h-14 cursor-pointer" />
            </div>
            <div>
              <p className="post-text">
                Como cualquier otro método, el modelo de cascada se diseñó para
                producir resultados positivos. Se creó específicamente para
                producir resultados positivos garantizando que se cumplan todos
                los requisitos de las partes interesadas y los consumidores.
                Aparte de eso, también hay otros grandes beneficios que se
                obtienen al aplicar este método. A continuación, se indican
                algunas de las cosas beneficiosas que te proporcionará este
                método una vez que lo hagas bien.
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center space-x-3">
            <div>
              <FcApproval className="w-14 h-14 cursor-pointer" />
            </div>
            <div>
              <p className="post-text">
                Como cualquier otro método, el método en cascada también sigue
                un flujo o patrón general. Esto se debe a que practica la
                eficiencia al completar todos los pasos necesarios antes de
                pasar al siguiente. Con el modelo de gestión de proyectos en
                cascada, tendrás una visión completa de las cosas que
                intervienen en el proyecto, y nunca olvidarás ninguna de ellas.
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center space-x-3">
            <div>
              <FcApproval className="w-14 h-14 cursor-pointer" />
            </div>
            <div>
              <p className="post-text">
                Utilizar este método te permite ceñirte al plan original. Con el
                objetivo final fijado desde el proceso de desarrollo, podrás
                evitar desviarte con pasos innecesarios y no perder el tiempo.
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center space-x-3">
            <div>
              <FcApproval className="w-14 h-14 cursor-pointer" />
            </div>
            <div>
              <p className="post-text">
                Por último, podrás transmitir la información correcta a la
                persona adecuada. Esto se debe a que sabrás que todos los
                miembros del equipo están trabajando al mismo ritmo y fase en el
                método de cascada. De este modo, podrás dar información a otros
                miembros y esperar cambios que puedan afectar positivamente al
                proyecto.
              </p>
            </div>
          </div>
        </div>
        <div className="post-gray">
          <img
            src="/assets/images/fases-metodologia-waterfall.png"
            className="post-img"
          />
          <h4 className="post-title">Fases de la metodología cascada</h4>
          <p className="post-text">
            En la práctica, se aplican diversas versiones del modelo. Los más
            habituales son los modelos que dividen los procesos de desarrollo en
            cinco fases. En ocasiones, las fases 1, 2 y 3 definidas por Royce se
            integran en una sola fase de proyecto a modo de análisis de los
            requisitos.
          </p>
          <p className="post-text">
            Inicialmente, fue propuesto por Barry W. Boehm en uno de sus
            ensayos, y el modelo pretendía paliar los inconvenientes que surgían
            de la aplicación del modelo en cascada. Basó el modelo en la
            detección y resolución de riesgos, buscando controlar todos los
            factores que puedan comprometer la integridad y el funcionamiento
            del proyecto, exponiendo que si podemos controlar los riesgos no
            habría ningún motivo que impida el éxito del mismo.
          </p>
        </div>
        {/* Steps */}
        <div className="grid grid-cols-1 desktop:grid-cols-2 desktop:px-12 desktop:py-12 desktop:gap-12">
          <div className="steps">
            <img
              src="https://img.freepik.com/vector-gratis/concepto-isometrico-cms_23-2148807389.jpg?w=1380&t=st=1669927988~exp=1669928588~hmac=0ff480b19cda123fb33b71a063f0e689df567abe28641823af136ae272e492f1"
              className="steps-img"
            />
            <h3 className="post-title">1) Análisis</h3>
            <p className="post-text">
              Todo proyecto de software comienza con una fase de análisis que
              incluye un estudio de viabilidad y una definición de los
              requisitos. En el estudio de viabilidad se evalúan los costes, la
              rentabilidad y la factibilidad del proyecto de software. El
              estudio de viabilidad da como resultado un pliego de condiciones
              (una descripción general de los requisitos), un plan y una
              estimación financiera del proyecto, así como una propuesta para el
              cliente, si fuera necesario.
            </p>
            <p className="post-text">
              A continuación, se realiza una definición detallada de los
              requisitos, incluyendo un análisis de la situación de salida y un
              concepto. Mientras que los análisis de salida se encargan de
              describir la problemática en sí, el concepto ha de definir qué
              funciones y características debe ofrecer el producto de software
              para cumplir con las correspondientes exigencias. La definición de
              los requisitos da como resultado un pliego de condiciones, una
              descripción detallada de cómo se han de cumplir los requisitos del
              proyecto, así como un plan para la prueba de aceptación, entre
              otros.
            </p>
            <p className="post-text">
              Por último, la primera fase del waterfall model incluye un
              análisis de la definición de los requisitos en el que los
              problemas complejos se dividen en pequeñas tareas secundarias y se
              elaboran las correspondientes estrategias de resolución.
            </p>
          </div>
          <div className="steps">
            <img
              src="https://img.freepik.com/vector-gratis/ilustracion-concepto-software-multiplataforma_114360-7293.jpg?w=1380&t=st=1669928053~exp=1669928653~hmac=303caa126a2790dffc80d339e00a14c34ae3d330209afd28db33d10c81ac3a06"
              className="steps-img"
            />
            <h3 className="post-title">2) Diseño</h3>
            <p className="post-text">
              La fase de diseño sirve para formular una solución específica en
              base a las exigencias, tareas y estrategias definidas en la fase
              anterior. En esta fase, los desarrolladores de software se
              encargan de diseñar la arquitectura de software, así como un plan
              de diseño detallado del mismo, centrándose en componentes
              concretos, como interfaces, entornos de trabajo o bibliotecas. La
              fase de diseño da como resultado un borrador preliminar con el
              plan de diseño del software, así como planes de prueba para los
              diferentes componentes.
            </p>
          </div>
          <div className="steps">
            <img
              src="https://img.freepik.com/vector-gratis/ilustracion-concepto-sistema-operativo_114360-2195.jpg?w=826&t=st=1669928031~exp=1669928631~hmac=a00ffc1abeac22e9f3ec5b56835114edbe1c14cfcae9671694905d05cb8ab13e"
              className="steps-img"
            />
            <h3 className="post-title">3) Implementación</h3>
            <p className="post-text">
              La arquitectura de software concebida en la fase de diseño se
              ejecuta en la fase de implementación, en la que se incluye la
              programación del software, la búsqueda de errores y las pruebas
              unitarias. En la fase de implementación, el proyecto de software
              se traduce al correspondiente lenguaje de programación. Los
              diversos componentes se desarrollan por separado, se comprueban a
              través de las pruebas unitarias y se integran poco a poco en el
              producto final. La fase de implementación da como resultado un
              producto de software que se comprueba por primera vez como
              producto final en la siguiente fase (prueba alfa).
            </p>
          </div>
          <div className="steps">
            <img
              src="https://img.freepik.com/vector-gratis/concepto-prueba-software-proceso-prueba-codigo-aplicacion-o-sitio-web-especialista-ti-busca-errores-idea-tecnologia-informatica-analisis-digital-ilustracion-vectorial-estilo-dibujos-animados_613284-1444.jpg?w=900&t=st=1669928125~exp=1669928725~hmac=a47a4c0edd6344f980922a0111326d674262c6b2a4b26d2ab2ad0487efd04801"
              className="steps-img"
            />
            <h3 className="post-title">4) Prueba</h3>
            <p className="post-text">
              La fase de prueba incluye la integración del software en el
              entorno seleccionado. Por norma general, los productos de software
              se envían en primer lugar a los usuarios finales seleccionados en
              versión beta (pruebas beta). Las pruebas de aceptación
              desarrolladas en la fase de análisis permiten determinar si el
              software cumple con las exigencias definidas con anterioridad.
              Aquellos productos de software que superan con éxito las pruebas
              beta están listos para su lanzamiento.
            </p>
          </div>
          <div className="steps">
            <img
              src="https://img.freepik.com/vector-gratis/visualizacion-paginas-web-procedimiento-protocolo-flujo-trabajo-software-dinamico-desarrollo-full-stack-marcado-sistema-administracion-driver-memoria-compartida-ilustracion-metafora-concepto-aislado-vector_335657-4299.jpg?w=826&t=st=1669928097~exp=1669928697~hmac=86e120c3b1dab0b8cc7a3fbd9e658316dbf69ef7b861814e6e7e7eddf301a674"
              className="steps-img"
            />
            <h3 className="post-title">5) Mantenimiento</h3>
            <p className="post-text">
              Una vez que la fase de prueba ha concluido con éxito, se autoriza
              la aplicación productiva del software. La última fase del modelo
              en cascada incluye la entrega, el mantenimiento y la mejora del
              software.
            </p>
          </div>
        </div>
        <footer className="bg-[#212529]">
          <div className="px-12 py-12">
            <div className="flex flex-col text-center justify-center">
              <img
                src="https://apps2.itson.edu.mx/admisiones/miadmision/Aviso/ITSONMARCA2.png"
                className="m-auto object-cover w-[600px] h-full"
              />
              <p className="font-thin text-white">
                Pagina hecha por estudiantes del ITSON
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
