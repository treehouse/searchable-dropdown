const User = ({ id, name, email, selectedUsers, setSelectedUsers }) => {
  return (
    <li
      onClick={() => {
        const userExists = selectedUsers.some((user) => user.name === name);
        if (!userExists) {
          setSelectedUsers((prevUsers) => [
            ...prevUsers,
            { name: name, email: email },
          ]);
        }
      }}
      className="hover:bg-zinc-800 hover:bg-opacity-5 rounded-[18px] p-3 flex justify-start items-center cursor-pointer"
    >
      <div className="rounded-full size-[50px] bg-zinc-300"></div>
      <div className="flex flex-col gap-1 ml-3">
        <p className="">{name}</p>
        <p className="text-zinc-500 text-sm">{email}</p>
      </div>
    </li>
  );
};
export default User;
