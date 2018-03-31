import React, { Component } from 'react';
import styled from 'styled-components';

const MainTitle = styled.h1`
  color: #363636;
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.125;
  margin-bottom: 15px;
`;

const MainContent = styled.p`
  margin-bottom: 30px;
`;

export default class App extends Component {
  render() {
    return (
      <div>
        <MainTitle>Hello, Drupal!</MainTitle>
        <MainContent>
          Lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem.
        </MainContent>
      </div>
     );
  }
}
