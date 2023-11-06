'use client'
import { FooterContainer, Container, Section, Item, FooterBottom, CrText, Title } from "./Footer_styled"

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Section>
          <Title>Páginas</Title>
          <Item>Objetivos</Item>
          <Item>Nosotros</Item>
          <Item>Preguntas frecuentes</Item>
          <Item>Fases del proyecto</Item>
        </Section>
        <Section>
          <Title>Contacto</Title>
          <Item>ecocancun@gmail.com</Item>
          <Item>+52 29328284782</Item>
        </Section>
        <Section>
          <Title>EcoCancún</Title>
          <Item>Encuéntranos en:</Item>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d200326.00034992886!2d-86.87264893784966!3d21.09941522152136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c2b05aef653db%3A0xce32b73c625fcd8a!2zQ2FuY8O6biwgUS5SLg!5e0!3m2!1ses-419!2smx!4v1699139822080!5m2!1ses-419!2smx" width="300" height="200" style={{border: 0}} loading="lazy"></iframe>
        </Section>
      </Container>
      <Container>
        <FooterBottom>
          <CrText>Cancún, Quintana Roo México | Todos los derechos reservados para ecoCancún &copy;</CrText>
        </FooterBottom>
      </Container>
    </FooterContainer>
  )
}

export default Footer