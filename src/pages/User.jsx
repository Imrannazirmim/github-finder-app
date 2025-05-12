import { useContext, useEffect } from "react";
import GithubContext from "../context/GithubContext";
import { Link, useParams } from "react-router";
import { FaCode, FaStore, FaUser, FaUserFriends } from "react-icons/fa";
import { PiUsersFourFill } from "react-icons/pi";
import ReposList from "../components/layout/repos/ReposList";


const User = () => {
  const { getUser, user, loading, repos, getUserRepos } = useContext(GithubContext);
  
  const params = useParams();
  useEffect(() => {
    if (loading) {
      return <h2>Loading....</h2>;
    }
    getUser(params.login);
    getUserRepos(params.login)
  }, []);

  const {
    avatar_url,
    bio,
    blog,
    company,
    created_at,
    email,
    events_url,
    followers,
    followers_url,
    following,
    following_url,
    gists_url,
    gravatar_id,
    hireable,
    html_url,
    id,
    location,
    login,
    name,
    node_id,
    organizations_url,
    public_gists,
    public_repos,
    received_events_url,
    repos_url,
    site_admin,
    starred_url,
    subscriptions_url,
    twitter_username,
    type,
    updated_at,
    url,
    user_view_type,
  } = user;

  return (
    <>
      <section className="w-full mx-auto lg:w-10/12">
        <div className="mb-4">
          <Link to="/" className="btn btn-link">
            Back To Home
          </Link>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
          <div className="custom-card-image mb-6 md:mb-0">
            <div className="rounded-lg border border-gray-800 p-2 shadow-xl card">
              <figure>
                <img
                  src={avatar_url}
                  alt="image profile"
                  className="w-38 rounded-full"
                />
              </figure>
              <div className="card-body items-center justify-end">
                <h2 className="card-title mb-0">{name}</h2>
                <p>{login}</p>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="mb-6">
              <h1 className="text-3xl card-title">
                {name}
                <div className="ml-2 mr-1 badge badge-success">{type}</div>
                {hireable && (
                  <div className="mx-1 badge badge-info">{hireable}</div>
                )}
              </h1>
              <p>{bio}</p>
              <div className="mt-4 card-actions">
                <a
                  href={html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline"
                >
                  Visit Github Profile
                </a>
              </div>
            </div>
            <div className="w-full rounded-lg shadow-md bg-gray-700 stats">
              {location && (
                <div className="stat">
                  <div className="stat-title text-md">Location</div>
                  <div className="text-lg stat-value">{location}</div>
                </div>
              )}
              {blog && (
                <div className="stat">
                  <div className="stat-title text-md">Website</div>
                  <div className="text-lg stat-value">
                    <a
                      href={`https://${blog}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {blog}
                    </a>
                  </div>
                </div>
              )}
              {twitter_username && (
                <div className="stat">
                  <div className="stat-title text-md">Twitter</div>
                  <div className="text-lg stat-value">
                    <a
                      href={`https:twitter.com/${twitter_username}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {twitter_username}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="w-full py-5 mb-6 rounded-lg shadow-md bg-gray-700 stats">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <PiUsersFourFill className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Followers</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {followers}
            </div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaUserFriends className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Following</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {following}
            </div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaCode className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Public Repos</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {public_repos}
            </div>
          </div>
            <div className="stat">
            <div className="stat-figure text-secondary">
              <FaStore className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Public Gits</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {public_gists}
            </div>
          </div>
        </div>
      </section>
      <ReposList repos={repos}/>
    </>
  );
};
export default User;
