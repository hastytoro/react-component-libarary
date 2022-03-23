import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((response) =>
        this.setState(() => {
          return { users: response };
        }),
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchField: searchField };
    });
  };

  render() {
    const { users, searchField } = this.state;
    const filteredList = users.filter((user) => {
      return user.name.toLowerCase().includes(searchField);
    });

    return (
      <div>
        <div className="app-title">
          <h1>Simple Avatar Filter</h1>
        </div>
        <SearchBox
          onChangeHandler={this.onSearchChange}
          placeholder="search users"
          className="user-search"
        />
        <List users={filteredList} />
      </div>
    );
  }
}

class SearchBox extends Component {
  render() {
    const { onChangeHandler, placeholder, className } = this.props;
    return (
      <input
        type="search"
        className={`search-box ${className}`} // className is a prop that is passed from the parent component
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    );
  }
}

class List extends Component {
  render() {
    const { users } = this.props;
    return (
      <div className="card-wrapper">
        {users.map((user) => {
          const { id, name, email } = user;
          return <Card key={id} id={id} name={name} email={email} />;
        })}
      </div>
    );
  }
}

class Card extends Component {
  render() {
    const { id, name, email } = this.props;
    const changeEmail = email.toLowerCase();
    console.log(changeEmail);
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
  }
}

export default App;
