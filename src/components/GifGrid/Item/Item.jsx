import React from 'react';

const Item = ({ title, url }) => {
  return (
    <div className="card">
      <div className="img-container">
        <img src={url} alt={title} />
      </div>
      <p>{title}</p>
    </div>
  );
};

export default Item;
