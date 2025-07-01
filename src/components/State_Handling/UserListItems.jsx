const UserListItems = ({ user, setUsers }) => {
  const increaseAge = (id) => {
    setUsers((prev) =>
      prev.map((user) => {
        if (user.id === id) {
          return { ...user, age: user.age + 1 };
        } else return user;
      })
    );
  };
  const handleDelete = (id) => {
    setUsers((prev) =>(
      prev.filter((user) => {
        return user.id != id;
      }))
    );
  };
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.age}</td>
      <button onClick={() => increaseAge(user.id)}>Increse Age</button>
      <button onClick={() => handleDelete(user.id)}>delete</button>
    </tr>
  );
};

export default UserListItems;
