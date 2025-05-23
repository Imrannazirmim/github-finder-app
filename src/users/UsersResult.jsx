import { useContext, useEffect } from "react";
import UserItem from "./UserItem";
import GithubContext from "../context/GithubContext";
import { fetchingData } from "../context/GithubAction";

const UsersResult = () => {
  const { users, loading  } = useContext(GithubContext);

  useEffect(() => {
    fetchingData();
  }, []);

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <h1 className="text-4xl text-center font-bold">Loading.....</h1>;
  }
};
export default UsersResult;
