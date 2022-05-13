import { BrowserRouter, Route, Routes } from "react-router-dom";

import { сheckUsersData } from "utils/checkUsersData";
import { AddFavoriteMovies } from "components/addFavoriteMovies/AddFavoriteMovies";
import { SignIn } from "components/signIn/SignIn";
import { MainPage } from "components/mainPage/MainPage";

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
