import { BrowserRouter, Route, Routes } from "react-router-dom";

import { сheckUsersData } from "utils/checkUsersData";
import { AddFavoriteMovies } from "@AddFavoriteMovies";
import { SignIn } from "@SignIn";
import { MainPage } from "@MainPage";

function App() {
  сheckUsersData();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/home" element={<MainPage />} />
        <Route path="/add" element={<AddFavoriteMovies />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
