import { Link } from "react-router";

const UserItem = ({user}) => {
    return(
        <div className=" card border border-gray-800 compact card-side shadow-md ">
            <div className="flex-row items-center space-x-4 card-body">
                <div>
                    <div className="avatar">
                        <div className="rounded-full shadow w-14 h-14">
                            <img src={user.avatar_url} alt="profile" />
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="card-title">{ user.login}</h2>
                    <Link className="text-gray-500 font-semibold" to={`/user/${user.login}`}>Visit Profile</Link>
                </div>
            </div>
        </div>
    )
}
export default UserItem;






































































































































