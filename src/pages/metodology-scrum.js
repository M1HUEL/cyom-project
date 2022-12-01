import Head from 'next/head'

import Header from '../components/Header'

import Link from 'next/link'

export default function MetodologyScrum() {
  return (
    <>
      <Head>
        <title>Cyom - Metodology Scrum</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full h-full">
        <div className="bg-[#fe6d73]">
          <Header />
          <div className="flex flex-col px-6 py-3 tablet:px-24 tablet:py-12 desktop:px-80 desktop:py-24">
            <h1 className="desktop:text-center font-bold text-2xl tablet:text-3xl desktop:text-4Fxl text-white">
              Introducción a la
            </h1>
            <div className="space-y-3">
              <h3 className="desktop:text-center font-black text-4xl tablet:text-5xl desktop:text-6xl text-white">
                Metodología SCRUM
              </h3>
              <p className="font-light text-xl tablet:text-2xl desktop:text-xl text-white">
                Entre las diferentes metodologías de un proyecto, Scrum es un
                método para trabajar en equipo a partir de iteraciones o
                Sprints. Se suele planificar por semanas. Al final de cada
                Sprint o iteración, se va revisando el trabajo validado de la
                anterior semana. En función de esto, se priorizan y planifican
                las actividades en las que invertiremos nuestros recursos en el
                siguiente Sprint.
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
          <h4 className="post-title">Definición de la Metodología SCRUM</h4>
          <p className="post-text">
            El término Scrum (traducido del inglés como melé) fue acuñado y
            definido por Ikujiro Nonaka e Hirotaka Takeuchi en los años 80,
            cuando las principales empresa de desarrollo tecnológica empezaban a
            dominar el mercado y a definir conductas de trabajo. Ambos
            publicaron en 1986 en la Harvard Business Review este artículo “El
            nuevo nuevo juego para el desarrollo de productos”. Así abrieron una
            caja que durante los próximos años ha evolucionado y se ha extendido
            por muchos sectores, no sólo el tecnológico. El avance de las
            formaciones de las melés en partidos de rugby, inspiró a Nonaka y
            Takeuchi para bautizar una nueva forma de trabajar que ya venía
            dándose en muchas empresas tecnológicas como Honda, Canon y
            Fuji-Xerox. Nonaka y Takeuchi explican cómo esta metodología ágil se
            compara con la formación de melé del rugby de la siguiente forma:
            «El enfoque de las ‘carrera de relevos’ para el desarrollo de
            productos entra en conflicto con el objetivo de obtener la máxima
            velocidad y flexibilidad. En su lugar un enfoque como el rugby –
            donde el equipo intenta avanzar como equipo, enviando el balón hacia
            atrás y luego avanzar – sirve mejor a los desarrollos competitivos
            que se ven hoy en día».
          </p>
          <p className="post-text">
            El avance de las formaciones de las melés en partidos de rugby,
            inspiró a Nonaka y Takeuchi para bautizar una nueva forma de
            trabajar que ya venía dándose en muchas empresas tecnológicas como
            Honda, Canon y Fuji-Xerox.
          </p>
          <p className="post-text">
            Nonaka y Takeuchi explican cómo esta metodología ágil se compara con
            la formación de melé del rugby de la siguiente forma: «El enfoque de
            las ‘carrera de relevos’ para el desarrollo de productos entra en
            conflicto con el objetivo de obtener la máxima velocidad y
            flexibilidad. En su lugar un enfoque como el rugby – donde el equipo
            intenta avanzar como equipo, enviando el balón hacia atrás y luego
            avanzar – sirve mejor a los desarrollos competitivos que se ven hoy
            en día».
          </p>
        </div>
        <div className="post-gray">
          <h4 className="post-title">
            Características de la Metodología SCRUM
          </h4>
          <p className="post-text">
            Scrum es una metodología ágil, por lo que su objetivo será controlar
            y planificar proyectos con un gran volumen de cambios de última
            hora, en donde la incertidumbre sea elevada.
          </p>
          <p className="post-text">
            La metodología SCRUM se centra en ajustar sus resultados y responder
            a las exigencias reales y exactas del cliente. De ahí, que se vaya
            revisando cada entregable, ya que los requerimientos van variando a
            corto plazo. El tiempo mínimo para un Sprint es de una semana y el
            máximo es de cuatro semanas.
          </p>
          <p className="post-text">
            Entre las principales características de la metodología Scrum,
            desataca que es un desarrollo incremental en lugar de la clásica
            planificación del desarrollo completo de un producto o servicio. Los
            equipos Scrum se caracterizan por ser auto-organizados. Y se centra
            en el producto final, en la calidad del mismo.
          </p>
          <p className="post-text">
            Además, en la metodología Scrum agile se solapan diferentes fases de
            desarrollo, en lugar de llevar a cabo una planificación secuencial o
            de cascada.
          </p>
          <p className="post-text">
            Así pues, los proyectos que utilizan una metodología de desarrollo
            ágil pueden aplicar Scrum. En ellos, los requisitos varían a muy
            corto plazo, necesitan una gestión muy flexible, orientada a
            objetivos y resultados concretos. Y la metodología Scrum es
            perfecta.
          </p>
          <p className="post-text">
            El desarrollo del software fue el primero en aplicar la metodología
            Scrum. Anteriormente, este sector utilizaba para planificar y
            gestionar sus proyectos con métodos en cascada o secuencial. En
            ellas se planifican varias fases con unos plazos establecidos y se
            van ejecutando.
          </p>
          <p className="post-text">
            Sin embargo, en 1993, Jeff Sutherland y su equipo en Easel
            Corporation adaptaron la metodología Srcum al desarrollo del
            software. Publicando así el Software Development Process. El método
            Scrum estaba ahora orientado a objetos, a un control de procesos
            empírico, desarrollo iterativo e incremental, a una mejora continua
            de la productividad, así como al desarrollo de sistemas complejos y
            ágiles.
          </p>
          <p className="post-text">
            En la actualidad, Scrum es utilizado para el desarrollo de muchos
            tipos de productos, con el objetivo de organizar flujos de trabajo
            optimizados y flexibles. Una virtud de aplicaciones que integran
            esta idea para gestionar proyectos, como Sinnaps.
          </p>
        </div>
        <div className="post-white">
          <h4 className="post-title">Aplicaciones de la Metodología SCRUM</h4>
          <p className="post-text">
            En la actualidad, los proyectos se desarrollan en contextos muy
            versátiles. Son más complejos que antes, frente a unas exigencias
            del cliente y del mercado mucho más variables, y con una
            incertidumbre elevada. Por eso, la aplicación del método se ha
            extendido como la pólvora en numerosos sectores, fuera del mundo del
            desarrollo de software.
          </p>
          <p className="post-text">
            Así es como funciona la metodología Scrum, basada en sprints.
            Tenemos un listado de requerimientos, también llamado Backlog.
            Tomamos uno para desarrollarlo en ese sprint. Lo dividimos en
            tareas, asignamos esas actividades a los diferentes miembros del
            equipo. Cada, podemos reunirnos para ir solucionando problemas. Esta
            reuniones dentro del sprint dependerá de la duración del sprint y
            del tipo de resultado del proyecto.
          </p>
          <p className="post-text">
            Una vez terminado el objetivo de ese sprint, ya tenemos el resultado
            para incrementarlo en el total del producto terminado. Por eso,
            tiene tanto sentido utilizarlo en el sector del software. Porque,
            este producto ya parte de algo que es capaz de funcionar. Así que en
            cada sprint, iremos consiguiendo mejoras para añadir al producto
            final.
          </p>
        </div>
        <div className="post-gray">
          <img
            src="https://www.sinnaps.com/wp-content/uploads/2017/05/scrum-min.png"
            className="post-img"
          />
          <h4 className="post-title">Fases de la Metodología SCRUM</h4>
          <p className="post-text">
            El desarrollo de producto tiene un ciclo de vida en la metodología
            Scrum. Estas son fases en las que se divide un proceso Scrum:
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
          <div className="steps-card">
            <img
              src="https://img.freepik.com/vector-gratis/ilustracion-concepto-analisis-configuracion_114360-1438.jpg?w=1380&t=st=1669183218~exp=1669183818~hmac=13813dbb8b1f1db7715b80e8a8ec3d91b18b035d97499fc1765681fa5bc7421a"
              className="steps-img"
            />
            <h3 className="post-title">Fase #1</h3>
            <p className="post-text">
              El desarrollo de producto tiene un ciclo de vida en la metodología
              Scrum. Estas son fases en las que se divide un proceso Scrum:
            </p>
            <p className="post-text">
              Inicialmente, fue propuesto por Barry W. Boehm en uno de sus
              ensayos, y el modelo pretendía paliar los inconvenientes que
              surgían de la aplicación del modelo en cascada. Basó el modelo en
              la detección y resolución de riesgos, buscando controlar todos los
              factores que puedan comprometer la integridad y el funcionamiento
              del proyecto, exponiendo que si podemos controlar los riesgos no
              habría ningún motivo que impida el éxito del mismo.
            </p>
          </div>
          <div className="steps">
            <img
              src="https://img.freepik.com/vector-gratis/ilustracion-concepto-auditoria-ambiental_114360-8784.jpg?w=826&t=st=1669183193~exp=1669183793~hmac=ac83661c242a945f2162e0f619718520c95db80c2e0d973929c70bb60d929851"
              className="steps-img"
            />
            <h3 className="post-title">Fases de la Metodología SCRUM</h3>
            <p className="post-text">
              El desarrollo de producto tiene un ciclo de vida en la metodología
              Scrum. Estas son fases en las que se divide un proceso Scrum:
            </p>
            <p className="post-text">
              Inicialmente, fue propuesto por Barry W. Boehm en uno de sus
              ensayos, y el modelo pretendía paliar los inconvenientes que
              surgían de la aplicación del modelo en cascada. Basó el modelo en
              la detección y resolución de riesgos, buscando controlar todos los
              factores que puedan comprometer la integridad y el funcionamiento
              del proyecto, exponiendo que si podemos controlar los riesgos no
              habría ningún motivo que impida el éxito del mismo.
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
