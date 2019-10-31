import React from 'react';
import logo from './logo.svg';
import './App.css';

import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_POSTS = gql`
  query GetPosts {
    posts {
      id
      author
      body
    }
  }
`;



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Query query={GET_POSTS}>
          {({ loading, data }) => !loading && (
            <div>
                {data.posts.map(post => (
                  <div key={post.id}>
                    <p>{post.author}</p>
                    <p>{post.body}</p>
                  </div>
                ))}
            </div>
          )}
        </Query>
      </header>
    </div>
  );
}

export default App;
