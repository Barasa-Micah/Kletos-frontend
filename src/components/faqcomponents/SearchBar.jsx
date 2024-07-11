// src/components/SearchBar.jsx
import React from "react";
import styled from "styled-components";

const SearchBarContainer = styled.div`
  margin: 20px 0;

  @media (max-width: 1200px) {
    margin: 18px 0;
  }

  @media (max-width: 768px) {
    margin: 15px 0;
  }

  @media (max-width: 600px) {
    margin: 12px 0;
  }

  @media (max-width: 480px) {
    margin: 10px 0;
  }
`;

const Input = styled.input`
  width: 100%;
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

const SearchBar = ({ onSearch }) => {
  return (
    <SearchBarContainer>
      <Input
        type="text"
        placeholder="Search FAQs..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </SearchBarContainer>
  );
};

export default SearchBar;
