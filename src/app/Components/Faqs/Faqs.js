'use client';
import { useState } from "react";
import faqData from "../../faqsdata";
import Faq from "./faq";

const FaqsComponent = () => {
    const [openIndex, setOpenIndex] = useState(null);
  
    const handleFaqClick = (index) => {
      if (openIndex === index) {
        setOpenIndex(null); // Si la pregunta ya está abierta, ciérrala.
      } else {
        setOpenIndex(index);
      }
    };
  
    return (
      <div>
        {faqData.map((faq, index) => (
          <Faq
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={index === openIndex}
            onClick={() => handleFaqClick(index)}
          />
        ))}
      </div>
    );
  };

export default FaqsComponent