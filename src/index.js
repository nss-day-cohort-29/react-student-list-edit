import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import StudentComponent from "./components/StudentComponent"
import './index.css'

ReactDOM.render(
  <Router>
      <StudentComponent />
  </Router>
  , document.getElementById('root'))
