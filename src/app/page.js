'use client';
import Banner from"./Components/Banner/Banner";
import Wrapper from "./Components/Wrapper/Wrapper";
import Headline from "./Components/Headline/Headline";
import Parragraph from "./Components/Parragraph/Parragraph";
import { FixedImage } from "./home";

export default function Home() {
  return (
    <>
      <Banner text={"¡Bienvenidos a EcoCancún!"} image="/images/educacion-ambiental.jpg" />
      <Wrapper>
        <Headline>¿Qué es EcoCancún?</Headline>
        <Parragraph>¡Bienvenido a ecoCancún! Somos una iniciativa comprometida con la preservación y mejora de nuestro entorno. Nuestra misión es crear un impacto positivo en Cancún y sus alrededores, fomentando prácticas sostenibles y proyectos ecológicos que beneficien a la comunidad y al medio ambiente. <br/><br/> En ecoCancún, creemos que juntos podemos lograr un cambio significativo. Explora nuestro sitio web para obtener más información sobre nuestros objetivos, proyectos, equipo y cómo puedes unirte a nuestra causa. Únete a nosotros en nuestro viaje hacia un Cancún más ecológico y sostenible.</Parragraph>
        <FixedImage/>
        <Headline>Importancia del proyecto</Headline>
        <Parragraph>EcoCancún es una respuesta a la creciente necesidad de abordar los desafíos ambientales en nuestra comunidad. En un mundo en constante cambio, es fundamental tomar medidas para preservar nuestros recursos naturales y garantizar un futuro sostenible. Nuestro proyecto se centra en áreas críticas, como la conservación de la biodiversidad, la gestión de residuos, la educación ambiental y la promoción de prácticas ecológicas en Cancún. <br/><br/> La importancia de ecoCancún radica en su capacidad para movilizar a individuos, empresas y organizaciones locales en torno a una causa común. Creemos que el cambio comienza a nivel local y se propaga a nivel global. Al unirnos, podemos marcar la diferencia, proteger nuestro hermoso entorno y ofrecer un futuro más limpio y próspero para las generaciones venideras. <br/><br/> Este proyecto no solo es una llamada a la acción, sino también una oportunidad para que la comunidad de Cancún se una, comparta conocimientos y recursos, y colabore en la construcción de un futuro más ecológico y sostenible. Te invitamos a explorar más sobre los objetivos y fases del proyecto y a descubrir cómo puedes contribuir a la causa de ecoCancún.</Parragraph>
      </Wrapper>
    </>
  )
}
