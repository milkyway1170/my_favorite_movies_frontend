import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AddFavoriteMovies } from "components/addFavoriteMovies/AddFavoriteMovies";
import { SignIn } from "components/signIn/SignIn";
import { MainPage } from "components/mainPage/MainPage";
import ProtectedRoute from "components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute authenticationPath={"/"} outlet={<MainPage />} />
          }
        />
        <Route
          path="/add"
          element={
            <ProtectedRoute
              authenticationPath={"/"}
              outlet={<AddFavoriteMovies />}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
