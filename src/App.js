import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing_page from './components/Landing_Page/Landing_page'};
import Navbar from './Components/Navbar/Navbar';
import ReactDOM from "react-dom/client";
import logo from './logo.svg';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
        {/* Set up BrowserRouter for routing */}
        <BrowserRouter>
          {/* Display the Navbar component */}
          <Navbar/>
          {/* Set up the Routes for different pages */}
          <Routes>
            {/* Define individual Route components for different pages */}
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
