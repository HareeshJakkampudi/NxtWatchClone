import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'

import App from './App'
import GlobalsStyles from './GlobalStyles.css'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalsStyles />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)
