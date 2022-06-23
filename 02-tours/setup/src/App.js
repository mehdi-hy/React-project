import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const removeTour = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      console.log("hello");
      const response = await fetch(url);
      const users = await response.json();

      setIsLoading(false);
      setUsers(users);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);
  if (isLoading) {
    return (
      <main>
        <div className='title'>
          <h1>Loading....</h1>
        </div>
      </main>
    );
  }
  if (users.length === 0) {
    return (
      <>
        <h1>Nothig to show</h1>
        <button onClick={fetchTours}>refresh</button>
      </>
    );
  }
  return <Tours users={users} removeTour={removeTour} />;
}

export default App;
