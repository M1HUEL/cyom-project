import Head from 'next/head'

import Header from '../components/Header'

import Link from 'next/link'

export default function MetodologySpiral() {
  return (
    <>
      <Head>
        <title>Cyom - Metodology Spiral</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full-full">
        <div className="bg-[#ffcb77]">
          <Header />
          <div className="flex flex-col px-12 py-3 tablet:px-24 tablet:py-12 desktop:px-80 desktop:py-24">
            <h1 className="desktop:text-center font-bold text-2xl tablet:text-3xl desktop:text-4Fxl text-white">
              Introducción a la
            </h1>
            <div className="space-y-3">
              <h3 className="desktop:text-center font-black text-4xl tablet:text-5xl desktop:text-6xl text-white">
                Metodología Espiral
              </h3>
              <p className="font-light text-xl tablet:text-2xl desktop:text-xl text-white">
                El desarrollo en espiral es un modelo de ciclo de vida de
                software definido por primera vez por Barry Böhm en 1986 y se
                usa comúnmente en el desarrollo de software. Las operaciones de
                este modelo están dispuestas en espiral donde cada ciclo o cada
                iteración es un conjunto de operaciones. A las acciones no se
                les asigna ninguna prioridad, pero las acciones subsiguientes se
                seleccionan en función del análisis de riesgos, comenzando con
                el ciclo interno.
              </p>
              <video
                src="/assets/videos/Metodología-Espiral.mp4"
                controls
                className="w-full h-full px-4 py-4 rounded-xl bg-white"
              ></video>
              <p className="text-right text-white">
                Video extraido del canal de YT:
              </p>
            </div>
          </div>
        </div>
        <div className="post-white">
          <h4 className="post-title">Definición de la metodología espiral</h4>
          <p className="post-text">
            El desarrollo en espiral es un modelo de procedimiento para el
            desarrollo de software elaborado por Barry W. Boehm en el año 1986.
            Parte de la base de que el desarrollo de aplicaciones se debe llevar
            a cabo en un ciclo iterativo que se debe repetir tantas veces como
            sea necesario hasta alcanzar el objetivo. Gracias a las valoraciones
            regulares de los riesgos y a los controles rutinarios del producto
            intermedio, el modelo en espiral minimiza considerablemente el
            riesgo de fracaso en los proyectos de software.
          </p>
        </div>
        <div className="post-gray">
          <h4 className="post-title">
            Características de la metodología espiral
          </h4>
          <p className="post-text">
            El modelo de desarrollo en espiral, es una metodología de gestión de
            proyectos, que combina la iteración de proyectos ágiles, y la
            estructura de planificación de la metodología de cascada. Es ideal
            para proyectos que conllevan grandes riesgos y alcances, y donde el
            presupuesto es un factor decisivo. En este artículo conocerás qué es
            el desarrollo en espiral, y veremos un ejemplo práctico y sencillo
            aplicado a un proyecto de desarrollo real.
          </p>
          <p className="post-text">
            A lo largo de la aplicación de modelo de desarrollo en espiral,
            estas cuatro fases se van a repetir, con la diferencia de que el
            proyecto irá aumentando su complejidad, lapsos de tiempo de
            ejecución, volumen de tareas, etc. Es un modelo que va creciendo,
            cuidando los recursos y siendo cauteloso de los riesgos. Esta
            modalidad de gestión no asumirá el riesgo más importante, hasta no
            concluir un ciclo de 4 etapas inicial.
          </p>
          <p className="post-text">
            Esto modelo evolutivo, escalable y espiral, conforme avancen los
            ciclos, irá asumiendo mayores riesgos, ya que tiene la tranquilidad
            de haber desarrollado y evaluado el producto final, pero a menor
            escala. Tiene la capacidad de evolucionar su complejidad con cada
            ciclo. El modelo de desarrollo en espiral para la gestión de
            proyectos, está basado en las limitaciones, es decir, que al iniciar
            una de las fases del proyecto, es determinante la planificación del
            riesgo, sobre todo cuando el presupuesto no es holgado.
          </p>
          <p className="post-text">
            El modelo espiral, toma la estructura de fases del modelo en
            cascada, pero se vuelve más iterativo, lo que lo acerca mucho más a
            los modelos de gestión ágil. Este tipo de gestión suele ser efectiva
            cuando:
          </p>
          <ul className="list-item list-disc ml-12">
            <li className="post-text">El proyecto es de largo alcance.</li>
            <li className="post-text">El cliente pide entregas recurrentes.</li>
            <li className="post-text">Se puede crear un prototipo.</li>
            <li className="post-text">
              Cuando la gestión de los riesgos y costos es esencial.
            </li>
            <li className="post-text">
              El proyecto pertenece a una categoría de alto riesgo, o tiene
              especiales implicancias para la empresa.
            </li>
            <li className="post-text">
              El proyecto pertenece a una categoría de alto riesgo, o tiene
              especiales implicancias para la empresa.
            </li>
            <li className="post-text">
              Los requisitos son poco claros y complejo, o no está muy claro lo
              que el cliente pretende obtener.
            </li>
            <li className="post-text">
              Se producen cambios constantes y se quieren gestionar con cierto
              margen de maniobra.
            </li>
          </ul>
        </div>
        <div className="post-white">
          <h4 className="post-title">
            Ejemplo, aplicación de la metodología espiral
          </h4>
          <p className="post-text">
            Un ejemplo práctico de modelo en espiral puede ser una aplicación de
            gestión de flota de transporte. La empresa de logística se acerca a
            nuestro equipo de desarrollo de software, y nos comunica el objetivo
            de querer tener un software que permita:
          </p>
          <ul className="list-item list-disc ml-12">
            <li className="post-text">Rastrear a los camiones en ruta.</li>
            <li className="post-text">
              Conocer su carga y datos personales del conductor. .
            </li>
            <li className="post-text">Ver los kilómetros recorridos.</li>
          </ul>
          <p className="post-text">
            Se trata de un proyecto a largo plazo que representa un gran gasto
            para la empresa. Al identificar el largo alcance del objetivo, el
            equipo de desarrollo coincide en que el modelo de desarrollo en
            espiral es la metodología adecuada. Al comenzar con el proyecto, se
            define un primer ciclo que tendrá como objetivo terminar con un
            prototipo de software, a probar en un vehículo bajo condiciones
            controladas
          </p>
        </div>
        <div className="post-gray">
          <img
            src="https://www.lifeder.com/wp-content/uploads/2020/02/Analisis-1-626x420.jpg"
            className="post-img"
          />
          <h4 className="post-title">Fases de la metodología espiral</h4>
          <p className="post-text">
            Los problemas en el proceso de desarrollo pueden tener efectos muy
            diversos sobre el proyecto general. En cualquier caso, se debe
            contar con aumentos de costes, gastos adicionales y retrasos en el
            lanzamiento; factores que, especialmente para empresas pequeñas,
            pueden suponer un problema existencial. Con su enfoque incremental e
            iterativo, que también contempla el análisis de riesgos periódico
            mediantediseños de prototipo, análisis o simulaciones, el modelo en
            espiral evita estos escenarios o al menos suaviza sus consecuencias
            negativas. El proyecto de software transcurre de forma continua
            hasta finalizar el ciclo del modelo en espiral, que principalmente
            abarca los cuatro pasos que aparecen a continuación.
          </p>
          <div className="flex flex-row text-right justify-right space-x-2 post-text">
            <span>Imagen extraida de</span>
            <Link
              href="https://www.lifeder.com/modelo-espiral/"
              className="cursor-pointer text-blue-600 hover:underline"
            >
              Lifeder
            </Link>
          </div>
        </div>
        {/* Steps */}
        <div className="grid grid-cols-1 desktop:grid-cols-2 desktop:px-12 desktop:py-12 desktop:gap-12">
          <div className="steps">
            <img
              src="https://img.freepik.com/vector-gratis/ilustracion-concepto-analisis-configuracion_114360-1438.jpg?w=1380&t=st=1669183218~exp=1669183818~hmac=13813dbb8b1f1db7715b80e8a8ec3d91b18b035d97499fc1765681fa5bc7421a"
              className="steps-img"
            />
            <h3 className="post-title">1) Determinar objetivos</h3>
            <p className="post-text">
              Al comienzo de cada fase, se deben identificar, elaborar y
              analizar los objetivos a partir de los requisitos de los clientes.
              Es así como los miembros del equipo intentan reunir los objetivos
              del producto, los requisitos (por ejemplo, las especificaciones de
              requisitos comerciales o BRS, las especificaciones de requisitos
              del sistema o SRS), las alternativas de diseño, etc. Luego,
              proponen las mejores soluciones posibles como alternativas para
              cumplir los objetivos. Para todo esto es necesario mantener la
              comunicación permanente entre el cliente y la gestión del
              proyecto.
            </p>
            <p className="post-text">
              Un ciclo típico del modelo espiral comienza con la valoración de
              qué objetivos deben vincularse a cada uno de los pasos del
              desarrollo de software. Se puede tratar, por ejemplo, de la mejora
              del rendimiento o de la ampliación de la funcionalidad. Al mismo
              tiempo, es el momento de definir las alternativas para la
              implementación (por ejemplo, diseño A vs. diseño B) y determinar
              las condiciones generales como los costes o la inversión de
              tiempo.
            </p>
          </div>
          <div className="steps">
            <img
              src="https://img.freepik.com/vector-gratis/resumen-datos-estadisticos-papel-tableta_3446-313.jpg?w=826&t=st=1669881533~exp=1669882133~hmac=422df63a445a804d728fa9accbf20a6e37a7c403a40c13227cc0f0f458abbc63"
              className="steps-img"
            />
            <h3 className="post-title">2) Análisis de riesgos</h3>
            <p className="post-text">
              Durante esta fase se analizan todas las posibles soluciones y se
              evalúa cuál es la más satisfactoria. Seguidamente se identifican
              los riesgos asociados con la solución y se resuelven utilizando la
              mejor estrategia posible. Al finalizar esta fase, el prototipo
              debe estar construido para la mejor solución posible.
            </p>
            <p className="post-text">
              En el siguiente paso, es hora de evaluar las alternativas, momento
              en el que los objetivos y las condiciones generales serán valores
              de referencia decisivos. En esta fase del ciclo del desarrollo en
              espiral, deberán identificarse los ámbitos de inseguridad que
              presenten un riesgo significativo para el progreso del proyecto de
              software. Después debe seguir la elaboración de las estrategias
              que presenten menos riesgo y que sean más rentables, para lo cual
              se podrán utilizar métodos como el modelo de prototipos,
              simulaciones, estudios comparativos, modelos de análisis y
              encuestas a usuarios.
            </p>
          </div>
          <div className="steps">
            <img
              src="https://img.freepik.com/vector-premium/tablero-analisis-datos_165488-4224.jpg?w=1380"
              className="steps-img"
            />
            <h3 className="post-title">3) Desarrollo/Codificación</h3>
            <p className="post-text">
              Al finalizar el análisis de riesgos, se prosigue con el desarrollo
              real del software, así que esta fase siempre está caracterizada
              por los riesgos relativos restantes. Si el proceso de desarrollo
              está dominado por riesgos de rendimiento o de interfaz de usuario,
              o riesgos del control interno de la interfaz, se ofrece primero
              una estrategia de desarrollo evolutiva, donde se especifica el
              proyecto con más precisión y se optimizan los prototipos. El
              código real se escribe y se prueba varias veces hasta alcanzar el
              resultado deseado, que puede servir entonces como base de bajo
              riesgo para otros pasos de desarrollo.
            </p>
          </div>
          <div className="steps">
            <img
              src="https://img.freepik.com/vector-gratis/planificacion-analista-financiero-lista-verificacion-portapapeles-calculadora-calendario-planificacion-presupuestaria-presupuesto-equilibrado-ilustracion-concepto-gestion-presupuestaria-empresa_335657-2321.jpg?w=1380&t=st=1669881585~exp=1669882185~hmac=83ab42f8746d4b52a801cb98cd4bd8f69212f6621a21593be994df60b75b003b"
              className="steps-img"
            />
            <h3 className="post-title">4) Planificación del siguiente ciclo</h3>
            <p className="post-text">
              Una vez concluido un ciclo ya se empieza a planificar el siguiente
              ciclo. Por una parte, en forma de avance normal del proyecto, si
              los objetivos de un ciclo se han podido cumplir y se debe definir
              el siguiente objetivo. Por otra parte, también se puede tratar de
              encontrar soluciones, en caso de que la etapa de desarrollo
              anterior haya fracasado. En este caso, la estrategia seguida hasta
              entonces se puede sustituir, por ejemplo, con las alternativas
              definidas anteriormente o con una nueva alternativa. De esta
              forma, se puede intentar conseguir de nuevo el objetivo marcado.
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
