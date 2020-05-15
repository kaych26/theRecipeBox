import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Global.css';
import '../styles/Home.css';

export default function ShowCategories(props) {
  // debugger
  return (
    <div>
      
      {/* <h3>Categories</h3> */}
      {props.categories.map((category) => (
        <p key={category.id}>
          <div className="category-div">
            {/* <Link to={`/${category.group}`} category_id={category.id}> */}
            <Link
              to={`/${category.group}/${category.id}`}
              category_id={category.id}
            >
              <h1 className="category-title">{category.group}</h1>
              <img
                src={category.image}
                alt={category.group}
                width="550px"
                height="360px"
              />
            </Link>
          </div>
        </p>
      ))}
      <h2 className="bon-appetite">Bon Appetite !</h2>
    </div>
  );
}
