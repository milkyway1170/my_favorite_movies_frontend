import { BrowserRouter, Route, Routes } from "react-router-dom";

import { сheckUsersData } from "utils/checkUsersData";
import { MainPage } from "components/mainPage/MainPage";
import { SignIn } from "components/signIn/SignIn";
import { AddFavoriteMovies } from "components/addFavoriteMovies/AddFavoriteMovies";

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
