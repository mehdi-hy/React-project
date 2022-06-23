import React from "react";
import data from "./data";
const showData = () => {
  return data.map((person) => {
    const { id, name, age, image } = person;
    return (
      <div key={id} className='person'>
        <img src={image} alt='' />
        <h4>{name}</h4>
        <p>{age}</p>
      </div>
    );
  });
};
const List = () => {
  return (
    <>
      <div>{showData()}</div>
    </>
  );
};

export default List;
