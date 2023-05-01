import React, { useEffect, useState } from "react";
import Card from "./components/Card/Card";
import "./App.css";
function App() {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
      });
  }, []);
  return (
    <>
      <h1>
        React App for Fetching and Displaying GitHub User Data through API
      </h1>
      <div className="container">
        {userData.map((user, index) => {
          // console.log(user);
          return (
            <Card
              key={index}
              userName={user.login}
              avatar={user.avatar_url}
              url={user.html_url}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
