import React from 'react';
import { Loading } from '../Loading/Loading';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import Item from './Item/Item';

const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid animate__animated animate__backInLeft">
        {
          images.map((img) => (
            <Item key={img.id} {...img} />
          ))
        }
        {loading && <Loading />}
      </div>
    </>
  );
};

export default GifGrid;