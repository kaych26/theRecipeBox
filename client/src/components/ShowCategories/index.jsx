import React from 'react';

export default function ShowCategories(props) {
  debugger
  return (
    <div>
      <h3>Categories</h3>
      {props.categories.map((category) => (
        <p key={category.id}>{category.name}</p>
      ))}
    </div>
  );
}
