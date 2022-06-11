import { useState } from 'react'
import logo from './logo.svg'
import './App.css';
import First from './component/First';
import Table from './component/Table';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Update from './component/Update';

function App() {
  const [update, setUpdate] = useState()

  return (
    <div className="App">
      <Router>
        <Routes>

        <Route path="/" element={<First/>}></Route>
        <Route path="/table" element={<Table/>}></Route>
        <Route path="/update" element={<Update/>}></Route>
        </Routes>

      </Router>
      
     
    </div>
  )
}

export default App
