import { FaqContainer, Question, Answer } from "./Faqs_styled";
import { useState } from "react";
  
const Faq = ({ question, answer, isOpen, onClick }) => {
    return (
      <FaqContainer>
        <Question onClick={onClick}>{question}</Question>
        <Answer isOpen={isOpen}>{answer}</Answer>
      </FaqContainer>
    );
  };
  
  export default Faq;