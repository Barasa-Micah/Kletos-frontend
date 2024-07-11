import React, { useEffect, useState } from "react";
import "../../css/homepagecss/homepage.css";

const HMCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/misc/categories", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          setCategories(data);
        } else {
          console.error("Failed to fetch categories");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="home-catergories">
      <h3>Explore our categories</h3>
      <ul>
        {categories.map((category) => (
          <a href="#" className="flex" key={category.id}>
            <li>{category.name}</li>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default HMCategories;
