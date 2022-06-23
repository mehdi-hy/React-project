import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState("default user");
  const [value, setValue] = useState(0);

  const getData = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(url);
      const users = await response.json();
      setUsers(users);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return <h1>Loading.....</h1>;
  }
  const { id, title, dates, duties, company } = users[value];
  return (
    <section className='section'>
      <div className='title'>
        <h2>experience</h2>
        <div className='underline'></div>
      </div>
      <div className='jobs-center'>
        <div className='btn-container'>
          {users.map((user, index) => {
            const name = user.company;
            return (
              <button
                key={user.id}
                onClick={() => setValue(index)}
                className={`job-btn ${value === index && "active-btn"}`}
              >
                {name}
              </button>
            );
          })}
        </div>
        <article className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{dates}</p>

          {duties.map((duty, index) => {
            return (
              <div className='job-desc' key={index}>
                <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}

export default App;
