import React, { useState } from "react";

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  const [text, setText] = useState("show more");
  const [tour, setTour] = useState(true);
  const changeText = () => {
    if (readMore === false) {
      setReadMore(true);
      setText("show less");
    } else {
      setReadMore(false);
      setText("show more");
    }
  };

  const ShowSingle = () => {
    return (
      <article className='single-tour'>
        <img src={image} alt={name} />
        <footer>
          <div className='tour-info'>
            <h4>{name}</h4>
            <h4 className='tour-price'>${price}</h4>
          </div>
          <p>
            {readMore ? info : info.substring(0, 200)}
            <button onClick={changeText}>{text}</button>
          </p>
          <button className='delete-btn' onClick={() => removeTour(id)}>
            not interested
          </button>
        </footer>
      </article>
    );
  };
  return tour && <ShowSingle />;
};

export default Tour;
