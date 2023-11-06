'use client';
import { useState, useEffect } from "react";
import { NavContainer, Logo, NavList, NavItem } from "./Navbar_styled";


function Navbar() {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [atTop, setAtTop] = useState(true);
    const [isTranslating, setIsTranslating] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        setVisible(prevScrollPos > currentScrollPos || atTop);
        setPrevScrollPos(currentScrollPos);
        setIsTranslating(currentScrollPos > 0 && currentScrollPos < 10);
        setAtTop(currentScrollPos < 10);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, atTop, visible, isTranslating]);

    return (
      <NavContainer visible={visible} atTop={atTop} isTranslating={isTranslating}>
        <Logo href="/">EcoCancún</Logo>
        <NavList>
          <NavItem href="/">Inicio</NavItem>
          <NavItem href="/objetivos">objetivos</NavItem>
          <NavItem href="/equipo">equipo</NavItem>
          <NavItem href="/fases">fases</NavItem>
          <NavItem href="/preguntas-frecuentes">FAQ's</NavItem>
        </NavList>
      </NavContainer>
    );
  };

  export default Navbar;