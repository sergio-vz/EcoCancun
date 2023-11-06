import styled from 'styled-components'
import Link from 'next/link';

export const NavContainer = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    height: 7vh;
    width: 100%;
    padding: 0 5%;
    color: white;
    font-family: sans-serif;
    box-sizing: border-box;
    background-color: ${(props) => (props.visible && !props.atTop ? 'var(--mainColor)' : 'transparent')};
    transform: translateY(${(props) => (props.visible ? '0' : '-100px')});
    transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;
    display: flex;
    align-items: center;
    z-index: 10;
`
export const Logo = styled(Link)`
    font-size: 2.5em;
    color: white;
    text-decoration: none;
    font-family: Georgia, 'Times New Roman', Times, serif;

    &:hover {
        color: #139d13;;
        transition: 250ms ease-in-out;
    }
`
export const NavList = styled.ul`
    position: relative;
    width: auto;
    height: 100%;
    margin: 0 0 0 auto;
    list-style: none;
    display: flex;
    justify-content: flex-end;
    box-sizing: border-box;
`
export const NavItem = styled(Link)`
    width: auto;
    height: 100%;
    padding: 0 10% 0 10%;
    font-size: 1.2em;
    font-family: sans-serif;
    color: white;
    text-decoration: none;
    white-space: nowrap;
    display: flex;
    align-items: center;

    &:hover {
        background-color: rgba(2, 188, 5, 0.5);
        transition: 250ms ease-in-out;
    }
`