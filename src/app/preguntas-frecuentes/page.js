'use client'
import Banner from "../Components/Banner/Banner";
import Wrapper from "../Components/Wrapper/Wrapper";
import FaqsComponent from "../Components/Faqs/Faqs";

const Faqs = () => {
  return (
    <>
        <Banner image="/images/faqs.jpg" text="Preguntas Frecuentes" />
        <Wrapper>
            <FaqsComponent />
        </Wrapper>
    </>
  )
}

export default Faqs