import React, { Component, createContext, useContext  } from 'react';
// import { Link } from 'react-router-dom';

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
              {/* <Link to={`/portfolio/${portfolio.id}`} className="btn btn-primary">Xem Chi Tiết</Link> */}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default PortfolioList;
