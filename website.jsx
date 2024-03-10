import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  background-color: #333;
  color: #fff;
  padding: 1rem;
`;

const Nav = styled.nav`
  list-style-type: none;
  padding: 0;
  display: flex;
`;

const Main = styled.main`
  padding: 2rem;
`;

const Footer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 1rem;
  text-align: center;
`;

function App() {
  return (
    <div>
      <Header>
        <h1>Welcome to My Website</h1>
        <Nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </Nav>
      </Header>
      <Main>
        <h2>Homepage</h2>
        <p>This is the homepage content.</p>
      </Main>
      <Footer>
        <p>&copy; 2024 My Website</p>
      </Footer>
    </div>
  );
}

export default App;
