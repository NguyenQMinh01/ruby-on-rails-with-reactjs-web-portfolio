import React from 'react'
import ReactDOM from 'react-dom/client'
import Welcome from "./components/Welcome";
import './index.css'
import PortfolioDetail from './components/PortfolioDetail'; // Thêm import cho PortfolioDetail

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Welcome />
    </React.StrictMode>,
  )

