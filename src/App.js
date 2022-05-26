import React, { useState, useEffect } from 'react';
// import './App.css';

import axios from 'axios';


function App() {
  const [counter, setCounter] = useState(0);

  const [developer, setDeveloper] = useState({ name: "", experience: 5, language: "Javascript" });

  const [user, setUser] = useState({});
  const [username, setUsername] = useState();

  useEffect(() => {
    getUser();
  }, [username]);


  const getUser = async () => {
    const users = await axios.get(`https://jsonplaceholder.typicode.com/photos/1`);

    console.log(users);
    setUser(users.data);
  };


  const submitForm = (event) => {
    event.preventDefault();

    console.log(developer.name);
    setUsername(developer.name);

  };

  return (
    <>
      <h1>Total = {counter}</h1>

      <form onSubmit={submitForm}>
        <input type="text" placeholder="enter username"
          onChange={(e) => setDeveloper({ ...developer, name: e.target.value })}></input>

        <button type="submit">Search</button>
      </form>

      {/* name : {developer.name}<br />
        I have : {developer.experience} Years of experience<br />
      My Favorite Language is {developer.language} <br /> */}

      {/* <button onClick={changeInfo}>Count</button> */}

      {/* <pre>{JSON.stringify(user)}</pre> */}

      <img src={user.thumbnailUrl} alt="" />
      <h2>{user.name}</h2>

    </>

  );

}

export default App;
