import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ShowCategories.css';

export default function ShowCategories(props) {
  // debugger
  return (
    <div>
      {/* <h3>Categories</h3> */}
      {props.categories.map((category) => (
        <div key={category.id}>
         
          {/* <Link to={`/${category.group}`} category_id={category.id}> */}
          <Link to={`/${category.group}/${category.id}`} category_id={category.id}>
            {category.group}
            <img className="category-img" src={category.image} />
          </Link>
        </div>
      ))}
      <h2>Bon Appetite !</h2>
    </div>
  );
}
