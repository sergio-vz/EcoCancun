import styled from "styled-components";

export const BannerContainer = styled.div`
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
    height: var(--banner-height);
    margin: 0;
    padding: 0;
    background-image: url(${props => props.image});
    background-size: cover;
    background-attachment: fixed;
    box-sizing: border-box;
`
export const DarkOverlay = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
`
export const BannerMainText = styled.h1`
    position: absolute;
    top: 30%;
    left: 50%;
    padding: 2%;
    color: #ffffff;
    font-family: sans-serif;
    font-size: 3em;
    transform: translateX(-50%);
    border: 3px solid white;
`