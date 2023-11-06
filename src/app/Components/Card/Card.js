'use client';
import { Card_container, Card_holder, Card_top, Card_bottom, TopContainer, BotContainer, Card_image, JobTitle, LabelContainer, Label_1, Label_2, Label_3, DescripcionTitle, Descripcion, AccionesTitle, Acciones } from "../Card/Card_styled"

const Card = ({  descriptext, acciones, text, color1, color2, color3 }) => {
  return (
    <>
        <Card_container>
            <Card_holder>
                <Card_top>
                    <TopContainer>
                        <Card_image src="/images/trabajador.png" />
                    </TopContainer>
                    <BotContainer>
                        <JobTitle>{text}</JobTitle>
                        <LabelContainer>
                            <Label_1 color1={color1}>Fase de inicio</Label_1>
                            <Label_2 color2={color2}>Fase de desarrollo</Label_2>
                            <Label_3 color3={color3}>Concresión</Label_3>
                        </LabelContainer>
                    </BotContainer>
                </Card_top>
                <Card_bottom>
                    <TopContainer>
                        <DescripcionTitle>Rol</DescripcionTitle>
                        <Descripcion>{descriptext}</Descripcion>
                    </TopContainer>
                    <BotContainer>
                        <AccionesTitle>Acciones</AccionesTitle>
                        <Acciones>{acciones}</Acciones>
                    </BotContainer>
                </Card_bottom>
            </Card_holder>
        </Card_container>
    </>
  )
}

export default Card