import styled from "styled-components";

export const Card_holder = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    transform-style: preserve-3d;
    transition: all 500ms ease;
    pointer-events: none ;
    box-shadow: -3px 3px 15px 2px black;
`
export const Card_container = styled.div`
    position: relative;
    width: 40vh;
    height: 50vh;
    margin: 0 0 15vh 0;
    perspective: 500px;

    &:hover ${Card_holder} {
        transform: rotateY(180deg);
    }
`
export const Card_top = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
`
export const Card_bottom = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    font-family: sans-serif;
    text-align: center;
    backface-visibility: hidden;
    transform: rotateY(180deg);
`
export const TopContainer = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const BotContainer = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`
export const Card_image = styled.img`
    width: 70%;
    height: 100%;
`

export const JobTitle = styled.h1`
    font-family: sans-serif;
    font-style: italic;
    text-align: center;
    margin: 0;
    padding: 0;
`
export const LabelContainer = styled.div`
    width: 100%;
    height: auto;
    margin: 0;
    text-align: center;
    display: flex;
    justify-content: center;
`
export const Label_1 = styled.span`
    padding: 2% 2%;
    margin: 0 2%;
    color: white;
    font-size: 1em;
    font-family: sans-serif;
    background-color: ${props => props.color1};
    display: flex;
    align-items: center;
`
export const Label_2 = styled.span`
    padding: 2% 2%;
    margin: 0 2%;
    color: white;
    font-size: .8em;
    font-family: sans-serif;
    background-color: ${props => props.color2};
    display: flex;
    align-items: center;
`
export const Label_3 = styled.span`
    padding: 2% 2%;
    margin: 0 2%;
    color: white;
    font-size: 1em;
    font-family: sans-serif;
    background-color: ${props => props.color3};
    display: flex;
    align-items: center;
`
export const DescripcionTitle = styled.h2`

`

export const Descripcion = styled.p`
    padding: 0 5%;
`
export const AccionesTitle = styled.h2`

`
export const Acciones = styled.p`
    padding: 0 5%;
`