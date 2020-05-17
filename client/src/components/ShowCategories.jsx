import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Global.css';
import '../styles/ShowCategories.css';

export default function ShowCategories(props) {
  return (
    <>
    <div className="categories-outerframe">
      {/* <h3>Categories</h3> */}
      {props.categories.map((category) => (
        <div key={category.id}>
          <Link
            to={`/${category.group}`}
            // to={`/${category.group}/${category.id}`}
            category_id={category.id}
          >
            <div className="category-div">
              <h2 className="category-title">{category.group}</h2>
              <img
                src={category.image}
                alt={category.group}
                className="category-img"
              />
            </div>
          </Link>
        </div>
      ))}
    </div>
      <h2 className="bon-appetite">Bon Appetite !</h2>
      </>
  );
}
