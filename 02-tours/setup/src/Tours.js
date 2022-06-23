import React, { useState } from "react";
import Tour from "./Tour";
import { useEffect } from "react";
const Tours = ({ users, removeTour }) => {
  return (
    <section>
      <div className='title'>
        <h2>our tours</h2>
        <div className='underline'></div>
      </div>
      <div>
        {users.map((user) => {
          return <Tour key={user.id} {...user} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
