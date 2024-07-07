import Link from "next/link";

const fetchUsers = async () => {
  try {
    const res = await fetch("https://dummyjson.com/users", {
      cache: "force-cache",
    });
    const result = await res.json();
    // when we fetch data from api
    // by default next js stores the data in
    // cache memory force-cache
    // it can be changed
    // improving the performance
    return result.users;
  } catch (error) {
    throw new Error(error);
  }
};

export default async function Page() {
  const users = await fetchUsers();
  return (
    <div className="p-3">
      <h1 className="text-2xl font-bold">Server Side Users List</h1>
      <ul className="flex flex-wrap gap-[1rem] my-[2rem]">
        {users.length > 0 &&
          users.map((user) => (
            <li key={user.id}>
              <Link href={`/serversidefetching/${user.id}`}>
                {user.firstName}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
