import ReposItem from "./ReposItem";

const ReposList = ({ repos }) => {
  return (
    <div className="rounded-lg shadow-lg card bg-gray-800">
      <div className="card-body">
        <h2 className="text-2xl my-4 font-semibold card-title">
          Latest Repositories
        </h2>
        {repos.map((repo) => {
          return (
            <div>
              <ReposItem key={repo.id} repo={repo} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ReposList;
