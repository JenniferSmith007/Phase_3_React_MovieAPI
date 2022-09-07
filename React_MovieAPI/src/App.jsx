import "./App.css";

import { Searchmovie } from "./Components/SearchMovie";
import { FavoriteMovie } from "./Components/FavoriteMovie";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Searchmovie />} />
        <Route path="/favoritemovies" element={<FavoriteMovie />} />
      </Routes>
    </Router>
  );
}

export default App;
