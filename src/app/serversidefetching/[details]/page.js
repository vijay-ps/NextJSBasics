const fetchUser = async (id) => {
  try {
    const res = await fetch(`https://dummyjson.com/users/${id}`);
    const result = await res.json();
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

export default async function Page({ params }) {
  const id = params.details;
  const user = await fetchUser(id);
  console.log(user, "*");
  return (
    <div className="p-3">
      <h1 className="text-2xl font-bold mb-3">User Details</h1>
      <p className="text-xl font-bold">{user?.firstName} {user?.lastName}</p>
      <p className="text-xl font-bold">{user?.email}</p>
      <p className="text-xl font-bold">{user?.phone}</p>
      <p className="text-xl font-bold">{user?.birthDate}</p>
    </div>
  );
}
