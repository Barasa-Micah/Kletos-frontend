// src/components/FAQItem.jsx
import React, { useState } from 'react';
import styled from 'styled-components';

const FAQItemContainer = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;

  @media (max-width: 1200px) {
    padding: 10px;
  }

  @media (max-width: 768px) {
    padding: 8px;
  }

  @media (max-width: 600px) {
    padding: 7px;
  }

  @media (max-width: 480px) {
    padding: 6px;
  }
`;

const Question = styled.div`
  font-weight: bold;
  cursor: pointer;

  @media (max-width: 1200px) {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 600px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const Answer = styled.div`
  margin-top: 5px;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};

  @media (max-width: 1200px) {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 600px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FAQItemContainer>
      <Question onClick={() => setIsOpen(!isOpen)}>{question}</Question>
      <Answer isOpen={isOpen}>{answer}</Answer>
    </FAQItemContainer>
  );
};

export default FAQItem;
