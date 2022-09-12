import "./App.css";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Searchmovie  from "./Components/SearchMovie";
import  FavoriteMovie  from "./Components/FavoriteMovie";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Searchmovie/>} />
        <Route path="/favoritemovies" element={<FavoriteMovie />} />
      </Routes>
    </Router>
  );
}

export default App;
