import { useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import SelectedUser from "./SelectedUser";
import User from "./User";
const App = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [searchedUsers, setSearchedUsers] = useState([]);
  const [users, setUsers] = useState([
    {
      id: 1,
      avatar: "",
      name: "Samantha",
      email: "samantha@gmail.com",
    },
    {
      id: 2,
      avatar: "",
      name: "Joshua",
      email: "joshua@gmail.com",
    },
    {
      id: 3,
      avatar: "",
      name: "Cathy",
      email: "cathy@gmail.com",
    },
  ]);

  const searchVal = useRef("");

  return (
    <div className="h-screen bg-zinc-300 pt-20">
      <ul className="flex flex-wrap mx-auto my-5 items-center w-full max-w-[350px] gap-2">
        {selectedUsers.map((user, index) => {
          return (
            <SelectedUser key={index} name={user.name} email={user.email} />
          );
        })}
      </ul>

      <div
        className={`${
          activeMenu && "active"
        } container bg-white w-full max-w-[350px] h-[80px] m-auto p-2 grid place-items-center relative`}
      >
        <div className="w-full h-full flex justify-between  items-center">
          <input
            onChange={(e) => {
              setInputVal(e.target.value);
              searchVal.current = e.target.value;
              const matchingUsers = users.filter(
                (user) =>
                  user.name.includes(e.target.value) ||
                  user.email.includes(e.target.value)
              );
              setSearchedUsers(matchingUsers);
              {
                inputVal !== "" && setActiveMenu(true);
              }
            }}
            onClick={() => {
              setActiveMenu(!activeMenu);
            }}
            value={inputVal}
            className="pl-5 text-2xl placeholder:text-zinc-300 h-[50px] rounded-tl-full w-full rounded-bl-full outline-none text-zinc-600"
            type="text"
            placeholder="Search contacts"
          />
          <button className="w-[50px] text-3xl text-indigo-500">
            <CiSearch />
          </button>
        </div>

        {/* dropdown */}
        <div
          className={`${
            activeMenu && "active"
          } menu absolute w-full bg-white top-full left-0 min-h-[100px] `}
        >
          <div className="px-3">
            {inputVal === "" ? (
              <ul className="border-t-2 border-zinc-200 py-5">
                {users.map((user) => {
                  return (
                    <User
                      key={user.id}
                      id={user.id}
                      name={user.name}
                      email={user.email}
                      selectedUsers={selectedUsers}
                      setSelectedUsers={setSelectedUsers}
                    />
                  );
                })}
              </ul>
            ) : (
              <ul className="border-t-2 border-zinc-200 py-5">
                {searchedUsers.map((user, index) => {
                  return (
                    <User
                      key={index}
                      name={user.name}
                      email={user.email}
                      selectedUsers={selectedUsers}
                      setSelectedUsers={setSelectedUsers}
                    />
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
