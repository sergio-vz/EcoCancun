import styled from "styled-components";

export const FooterContainer = styled.footer`
    position: relative;
    width: 100%;
    height: auto;
    color: white;
    padding: 2vh 0 0 0;
    background-color: var(--mainColor);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    box-sizing: border-box;
`
export const Section = styled.section`
    position: relative;
    width: auto;
    height: auto;
    margin: 3vh 0 10vh 0;
    font-family: sans-serif;
`
export const Item = styled.h3`
    padding: 0.5vh 0 0.5vh 0;
    margin: 0;
    color: #d1d1d1;
    box-sizing: border-box;
    cursor: pointer;

    &:hover {
        color: #139d13;
        transition: 250ms ease-in-out
    }
`
export const FooterBottom = styled.div`
    position: relative;
    bottom: 0;
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
    font-size: 0.7em;
    font-family: sans-serif;
    background-color: var(--secColor);
    box-sizing: border-box;
    display: flex;
    align-self: flex-end;
    justify-content: center;
    align-items: center;
`
export const CrText = styled.h1`
    color: #b0b0b0;
`
export const Title = styled.h1`
    font-size: 2.2em;
`