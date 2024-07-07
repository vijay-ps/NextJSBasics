"use client";

import { useEffect } from "react";
import { useState } from "react";
import Link from "next/link";

const ClientSideFetching = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://dummyjson.com/users");
      const result = await res.json();
      if (result?.users) {
        setUsers(result.users);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      setUsers([]);
      throw new Error(error);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading)
    return (
      <h1 className="text-2xl font-bold">Loading Users.... Please Wait</h1>
    );

  return (
    <div className="p-3">
      <h1 className="text-2xl font-bold">Client Side Users List</h1>
      <ul className="grid grid-cols-6 gap-[1rem] my-[2rem]">
        {users.length > 0 &&
          users.map((user) => (
            <li key={user.id}>
              <Link href={`/clientsidefetching/${user.id}`}>
                {user.firstName}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ClientSideFetching;
