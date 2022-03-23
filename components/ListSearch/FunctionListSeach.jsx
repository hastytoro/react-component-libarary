import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState(users);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setUsers(users));
    return () => {
      setUsers([]);
    };
  }, []);

  useEffect(() => {
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(searchField),
    );
    return () => {
      setFilteredUsers(filtered);
    };
  }, [users, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div>
      <div className="app-title">
        <h1>Simple Avatar Filter</h1>
      </div>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="search users"
        className="user-search"
      />
      <List users={filteredUsers} />
    </div>
  );
};

const SearchBox = ({ onChangeHandler, placeholder, className }) => {
  return (
    <input
      type="search"
      className={`search-box ${className}`} // className is a prop that is passed from the parent component
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};

const List = ({ users }) => {
  return (
    <div className="card-wrapper">
      {users.map((user) => {
        const { id, name, email } = user;
        return <Card key={id} id={id} name={name} email={email} />;
      })}
    </div>
  );
};

const Card = ({ id, name, email }) => {
  const changeEmail = email.toLowerCase();
  return (
    <div className="card">
      <img
        src={`https://avatars.dicebear.com/api/micah/${id}.svg`}
        alt={`user ${name}`}
      />
      <div className="tags">
        <h2>{name}</h2>
        {/* <p>{changeEmail}</p> */}
      </div>
    </div>
  );
};

export default App;
