import React, { useState } from "react"
import animate from "animate.css"
import AddCategory from "./components/AddCategory/AddCategory.jsx";
import GifGrid from "./components/GifGrid/GifGrid.jsx";

const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["InuYasha"]);

  return (
    <>
      <h2>GiftExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {
          categories.map((category) => (
            <GifGrid key={category} category={category} />
          ))
        }
      </ol>
    </>
  )
}

export default GiftExpertApp;
