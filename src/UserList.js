// UserList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserList() {
  const [listOfUser, setListOfUser] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setListOfUser(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>List of Users</h1>
      <ul>
        {listOfUser.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
