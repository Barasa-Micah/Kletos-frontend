// src/components/FAQList.jsx
import React from "react";
import FAQItem from "./FAQItem";
import styled from "styled-components";

const FAQListContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 1200px) {
    padding: 18px;
  }

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 600px) {
    padding: 12px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const FAQList = ({ faqs }) => {
  return (
    <FAQListContainer>
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </FAQListContainer>
  );
};

export default FAQList;
