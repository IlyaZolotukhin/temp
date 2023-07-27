import React, {useState} from "react";

class Data {
    getTime() {
        return new Date().getTime();
    }
}

export default {
    title: 'React.memo demo'
}

const NewMessagesCounter = (props: {count: number}) => {
    return <div>{props.count}</div>
}

const UsersSecret = (props: { users: Array<string> }) => {
    return <div>{
        props.users.map((u, i)=> <div key={i}>{u}</div>)
    }</div>
}

const Users = React.memo(UsersSecret)

export const Example1 = () => {

    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(["Ilya", "Anton",'Alina', 'Veronika',]);

    const addUser = () => {
        const newUsers = [...users, 'Dima' + new Data().getTime()];
        setUsers(newUsers )
    }

    return <>
        <button onClick={()=>setCounter(counter+1)}>+</button>
        <button onClick={addUser}>Add user</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>
}