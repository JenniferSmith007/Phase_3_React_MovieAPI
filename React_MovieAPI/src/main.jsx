import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// import {store} from './store'
// import {Provider} from "react-redux"
// lib. that provides redux to the application 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider store ={store}> */}
    <App />
    {/* </Provider>  */}
    {/* wrapp app by provider */}
  </React.StrictMode>
)
