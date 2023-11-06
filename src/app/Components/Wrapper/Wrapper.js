"use client";
import { MainWrapper } from "./Wrapper_styled";

const Wrapper = (props) => {
  return (
    <MainWrapper>
        {props.children}
    </MainWrapper>
  )
}

export default Wrapper