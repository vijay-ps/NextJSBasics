"use client";
import useSWR from "swr";

export default function Page() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `https://dummyjson.com/users/1`,
    fetcher
  );
  if (error) {
    return <div>Failed To Load</div>;
  }
  if (isLoading)
    return (
      <div className="text-2xl font-bold">Loading Data.... Please Wait</div>
    );

  return (
    <div className="p-3">
      <h1 className="text-2xl font-bold mb-3">User Details</h1>
      <p className="text-xl font-bold">
        {data?.firstName} {data?.lastName}
      </p>
      <p className="text-xl font-bold">{data?.email}</p>
      <p className="text-xl font-bold">{data?.phone}</p>
      <p className="text-xl font-bold">{data?.birthDate}</p>
    </div>
  );
}
