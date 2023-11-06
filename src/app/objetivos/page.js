'use client';
import Wrapper from "../Components/Wrapper/Wrapper"
import Banner from "../Components/Banner/Banner";
import Headline from "../Components/Headline/Headline";
import Parragraph from "../Components/Parragraph/Parragraph";

const Objetivos = () => {
  return (
    <>
      <Banner text="Objetivos" image="/images/objetivos.jpg" />
      <Wrapper>
        <Headline>Objetivos Generales</Headline>
        <Parragraph>En ecoCancún, nos hemos propuesto varios objetivos generales que guían nuestro trabajo y nuestra visión a largo plazo. En primer lugar, buscamos promover la conciencia ambiental y fomentar una cultura de sostenibilidad en Cancún. Creemos que la educación y la información son fundamentales para el cambio, por lo que nos esforzamos por brindar recursos y oportunidades de aprendizaje sobre temas ambientales. <br/><br/> Nuestro segundo objetivo general es contribuir a la conservación de la biodiversidad local. Esto implica la protección de los ecosistemas naturales y la promoción de prácticas de desarrollo sostenible que minimicen el impacto en la flora y fauna de la región. <br/><br/> Por último, ecoCancún se compromete a colaborar con la comunidad local y las partes interesadas para llevar a cabo proyectos y acciones que mejoren la calidad del entorno. Esto incluye la gestión de residuos, la limpieza de áreas naturales y la implementación de prácticas ecológicas en empresas y hogares.</Parragraph>
        <Headline>Objetivos Específicos</Headline>
         <Parragraph>Desarrollar programas educativos y de concienciación para la comunidad local, abordando temas como la gestión de residuos, la conservación de recursos naturales y la importancia de la biodiversidad en Cancún. <br/><br/> Establecer alianzas estratégicas con organizaciones y empresas para llevar a cabo proyectos de conservación, limpieza y restauración de áreas naturales en Cancún. <br/><br/> Fomentar la participación activa de voluntarios locales en proyectos y actividades relacionadas con el medio ambiente, creando una red de apoyo sólida. <br/><br/> Colaborar con instituciones educativas y comunitarias para desarrollar programas de capacitación y talleres que promuevan la sostenibilidad y la responsabilidad ambiental. <br/><br/> Promover prácticas ecológicas y sostenibles en el sector empresarial, alentando a las empresas locales a adoptar políticas y procesos amigables con el medio ambiente. <br/><br/> Estos objetivos generales y específicos son la brújula que guía a ecoCancún en su misión de preservar y proteger el entorno natural de Cancún y crear un futuro más sostenible para la comunidad local.</Parragraph>
      </Wrapper>
    </>
  )
}

export default Objetivos