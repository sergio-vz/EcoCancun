'use client';
import Banner from "../Components/Banner/Banner";
import Wrapper from "../Components/Wrapper/Wrapper";
import Headline from "../Components/Headline/Headline";
import Parragraph from "../Components/Parragraph/Parragraph"

const Fases = () => {
  return (
    <>
        <Banner image="/images/fases.jpg" text="Fases" />
        <Wrapper>
          <Headline>Fase de inicio</Headline>
          <Parragraph>En esta fase, se llevan a cabo las actividades previas necesarias para la planificación y organización de ecoCancún. Algunas de las tareas clave en esta fase incluyen la investigación y análisis de la situación actual, la identificación de problemas ambientales y socios potenciales, la planificación estratégica, la revisión de la misión y visión, la identificación de recursos necesarios, el análisis de factibilidad y la evaluación de riesgos.</Parragraph>
          <Headline>Fase de desarrollo</Headline>
          <Parragraph>Durante la fase de desarrollo, ecoCancún comienza a tomar forma. Las actividades se centran en la implementación de programas educativos, el establecimiento de alianzas, el desarrollo de proyectos piloto, la evaluación continua, los ajustes y mejoras, y la comunicación y divulgación. Esta fase es crucial para la ejecución efectiva del proyecto.</Parragraph>
          <Headline>Fase de concresión</Headline>
          <Parragraph>La fase de concreción se enfoca en la expansión y sostenibilidad del proyecto. Se incluyen actividades como el escalamiento de programas exitosos, la generación de ingresos sostenibles, la participación de la comunidad y el monitoreo a largo plazo. En esta etapa, ecoCancún busca consolidar sus logros y asegurar su continuidad.</Parragraph>
        </Wrapper>
    </>
  )
}

export default Fases