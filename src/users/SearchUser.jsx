import { useContext, useState } from "react";
import GithubContext from "../context/GithubContext";
import AlertContext from "../context/alertContext/AlertContext.jsx";

const SearchUser = () => {
  const [text, setText] = useState("");
  const { users, searchUser, clearUsers } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("please something wrong.", 'error');
    } else {
      searchUser(text);
      setText("");
    }
  };

  return (
    <div>
      <form
        className=" m-4 flex mx-auto items-center justify-center  "
        onSubmit={handleFormSubmit}
      >
        <div className="p-4 flex gap-1 items-center w-[50vw] ">
          <input
            type="text"
            placeholder="search user"
            className="p-2 border border-gray-700 rounded w-full  "
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            type="submit"
            className="px-4 py-2 rounded bg-gray-700 font-semibold hover:bg-gray-500"
          >
            Search
          </button>
        </div>
      </form>
      {users.length > 0 && (
        <div className="text-center mb-4">
          <button
            onClick={clearUsers}
            className="px-4 py-2 rounded bg-red-700 font-semibold hover:bg-red-500"
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
};
export default SearchUser;
