import SearchUser from "../users/SearchUser";
import UsersResult from "../users/UsersResult";
import Alert from "../components/layout/Alert.jsx";

const Home = () => {
  //home page

  return (
    <div className="w-full h-screen overflow-auto">
      <Alert />
      <SearchUser />
      <UsersResult />
    </div>
  );
};
export default Home;
