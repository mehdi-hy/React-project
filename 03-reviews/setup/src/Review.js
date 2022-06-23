import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import reviews from "./data";

const Review = () => {
  const [value, setValue] = useState(0);
  const { id, name, job, image, text } = people[value];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return (number = 0);
    }
    if (number < 0) {
      return (number = people.length - 1);
    }
    return number;
  };
  const next = () => {
    setValue((value) => {
      let newValue = value + 1;
      return checkNumber(newValue);
    });
  };
  const prev = () => {
    setValue((value) => {
      let newValue = value - 1;
      return checkNumber(newValue);
    });
  };
  const suprize = () => {
    setValue(Math.floor(Math.random() * people.length));
  };
  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt='' className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prev}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={next}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={suprize}>
        Surprize me
      </button>
    </article>
  );
};

export default Review;
