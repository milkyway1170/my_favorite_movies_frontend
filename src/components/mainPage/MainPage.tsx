import { GetUserData } from "../GetFunctions";
import GenresTagCloud from "./GenresTagCloud";
import Greeting from "./Greeting";
import Header from "./Header";

const MainPage = () => {
  const userData = GetUserData();
  console.log(userData);
  return (
    <div>
      <Header />
      <Greeting name={userData.login} />
      <GenresTagCloud />
    </div>
  );
};

export default MainPage;
