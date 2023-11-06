import styled from "styled-components";

export const FaqContainer = styled.div`
    margin: 10px;
    padding: 20px 0 0 0;
    color: white;
    text-align: center;
    font-family: sans-serif;
    font-size: 1.5rem;
    user-select: none;
    background-color: var(--mainColor);
`
export const Question = styled.div`
    cursor: pointer;
    font-weight: bold;

`
export const Answer = styled.div`
    width: 100%;
    margin: 20px 0 0 0;
    max-height: ${({ isOpen }) => (isOpen ? "1000px" : "0")};
    overflow: hidden;
    transition: max-height 0.5s;
    background-color: var(--secColor);
`