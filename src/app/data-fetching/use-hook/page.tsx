
import { Suspense, use } from "react";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
}

interface UsersResponse {
  users: User[];
}

async function getUsers(): Promise<UsersResponse> {
  const res = await fetch("https://dummyjson.com/users");
  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  const data: UsersResponse = await res.json();
  console.log(data);
  return data;
}

export default function UseHook() {
    const usersPromise = getUsers()
    return (
        <div>
            <h1> user Hook </h1>
            <Suspense 
                fallback = {
                    <div>
                        Loading ...
                    </div>
                }
            >
                <UsersList usersPromise={usersPromise}/>
            </Suspense>
        </div>
    );
}

function UsersList({usersPromise}:{usersPromise : Promise<UsersResponse>}){

    const getUsersList = use(usersPromise)

    return(
        <div>
            {getUsersList.users.map(user=>(
                <div key={user.id}>
                   Fullname : {user.firstName} {user.lastName} -- age : {user.age}
                </div>
            ))}
        </div>
    )
}