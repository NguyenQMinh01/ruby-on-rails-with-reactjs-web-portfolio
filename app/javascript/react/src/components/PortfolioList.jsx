import React, { Component, createContext, useContext  } from 'react';

class PortfolioList extends Component {
  state = {
    portfolios: []
  }

  componentDidMount() {
    fetch('/portfolios.json')
      .then(response => response.json())
      .then(data => this.setState({ portfolios: data }));
  }

  render() {
    const { portfolios } = this.state;

    return (
      <div>
        <h1>Developer Portfolio</h1>
        <ul className="list-group">
          {portfolios.map(portfolio => (
            <li key={portfolio.id} className="list-group-item">
              <h2>{portfolio.title}</h2>
              <p>{portfolio.description}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default PortfolioList;
