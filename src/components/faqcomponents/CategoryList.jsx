// src/components/CategoryList.jsx
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CategoryListContainer = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;

  @media (max-width: 1200px) {
    gap: 15px;
  }

  @media (max-width: 768px) {
    justify-content: center;
  }

  @media (max-width: 600px) {
    gap: 8px;
  }

  @media (max-width: 480px) {
    gap: 5px;
  }
`;

const CategoryItem = styled.li`
  a {
    text-decoration: none;
    color: #333;
    padding: 10px 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
    display: block;
    &:hover,
    &.selected {
      background-color: #f0f0f0;
      border-color: #bbb;
    }
  }

  @media (max-width: 1200px) {
    a {
      padding: 10px 12px;
    }
  }

  @media (max-width: 768px) {
    a {
      padding: 8px 10px;
    }
  }

  @media (max-width: 600px) {
    a {
      padding: 7px 9px;
    }
  }

  @media (max-width: 480px) {
    a {
      padding: 5px 8px;
    }
  }
`;

const CategoryList = ({ categories, selectedCategory }) => {
  return (
    <CategoryListContainer>
      {categories.map((category) => (
        <CategoryItem key={category.id}>
          <Link
            to={category.link}
            className={selectedCategory === category.id ? "selected" : ""}
          >
            {category.name}
          </Link>
        </CategoryItem>
      ))}
    </CategoryListContainer>
  );
};

export default CategoryList;
