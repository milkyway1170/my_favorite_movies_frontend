import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AddFavoriteMovies } from "@addFavoriteMovies/AddFavoriteMovies";
import { MainPage } from "@mainPage/MainPage";
import { SignIn } from "@signIn/SignIn";
import { сheckUsersData } from "utils/checkUsersData";

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
