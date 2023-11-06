'use client'
import Card from "../Components/Card/Card";
import Headline from "../Components/Headline/Headline";
import Parragraph from "../Components/Parragraph/Parragraph";
import Wrapper from "../Components/Wrapper/Wrapper";
import Banner from "../Components/Banner/Banner";
import { Card_wrapper } from "./page_styled";

const Equipo = () => {
  return (
    <>
      <Banner text="Nuestro Equipo" image="/images/equipo.jpg"/>
      <Wrapper>
        <Headline>Nuestro Equipo</Headline>
        <Parragraph>En ecoCancún, creemos que el éxito de cualquier proyecto comienza con un equipo apasionado y diverso. Nuestra dedicación y esfuerzo se reflejan en cada fase del proyecto. Conozca a las mentes detrás de ecoCancún que trabajan incansablemente para hacer que nuestro proyecto sea un éxito.</Parragraph>
        <Card_wrapper>
          <Card 
            text="Gerente de proyecto"
            descriptext="Encargado de supervisar y coordinar todas las actividades del proyecto."
            acciones="Establecimiento de alianzas, desarrollo de programas educativos, evaluación continua y más."
            color1="green"
            color2="green"
            color3="green" />
          <Card
            text="Especialista en medioambiente"
            descriptext="Encargado de la identificación y resolución de problemas ambientales."
            acciones="Identificación de problemas ambientales, evaluación de riesgos, participación de la comunidad y más."
            color1="green"
            color2="green"
            color3="green" />
          <Card
            text="Coordinador de comunicación"
            descriptext="Responsable de la comunicación y divulgación del proyecto."
            acciones="Material de promoción, publicación en redes sociales, generación de ingresos sostenibles y más."
            color1="green"
            color2="green"
            color3="green" />
        </Card_wrapper>
      </Wrapper>
    </>
  )
}

export default Equipo