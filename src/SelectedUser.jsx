const SelectedUser = ({ name, email }) => {
  return (
    <li className="rounded-full bg-indigo-500 border-2 text-sm border-indigo-700 text-white px-3 py-1">
      {name}
    </li>
  );
};
export default SelectedUser;
