import styled from "styled-components";

export const Text = styled.p`
    font-size: 1.3em;
    font-family: sans-serif;
    padding: 0 10% 0 10%;
    margin: 0 0 10vh 0;
    line-height: 1.6;
    text-align: justify;
    
    &::first-letter {
        font-size: 1.8em;
        color: var(--mainColor);
    }
`