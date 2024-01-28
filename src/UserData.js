import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserData() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://6570054809586eff66409716.mockapi.io/UserData');
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>User Data</h1>
      <ul>
        {userData.map((user) => (
          <li key={user.id}>
            <strong>Username:</strong> {user.username}, <strong>Email:</strong> {user.email}, <strong>Password:</strong> {user.password}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserData;
