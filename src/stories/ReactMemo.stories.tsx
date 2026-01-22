import React, {useState} from "react";

export default {
  title: 'ReactMemo demo',
}

const NewMessagesCounter = (props: { count: number }) => {
  return <div>{props.count}</div>
}


const UsersSecret = (props: { users: Array<string> }) => {
  console.log("Users")
  return (
    <div>
      {props.users.map((u, i) => (
        <div key={i}>{u}</div>
      ))}
    </div>
  );
};
//HOC - hight order component
const Users = React.memo(UsersSecret)

export const Example1 = () => {
  console.log("Example1")
  const [counter, setCounter] = useState(0)
  const [users, setUsers] = useState(["Dima", "Valera", "Artem"])

  const addUser = () => {
    const newUser = [...users, "Sveta" + new Date().getTime()]
    setUsers(newUser)
  }

  return (
    <>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={addUser}>Add</button>
      <NewMessagesCounter count={counter} />
      <Users users={users} />
    </>
  )
}