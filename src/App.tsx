import { BrowserRouter, Route, Routes } from "react-router-dom";
import CheckUsersData from "./components/CheckUsersData";
import MainPage from "./components/mainPage/MainPage";
import SignIn from "./components/signIn/SignIn";

function App() {
  CheckUsersData();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/home" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
