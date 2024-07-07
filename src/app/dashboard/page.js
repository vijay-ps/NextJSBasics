"use client";
// for doing browser based manipulations and 
// operations like form valdiation or use react hooks
// frontend ops
// refer next docs for client and server patterns
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();

  const handleBack = () => {
    router.push("/");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button
        className="bg-blue-500 rounded py-2 px-4 text-white font-bold"
        onClick={() => handleBack()}
      >
        Back
      </button>
      <h1>Dashboard Page</h1>
    </main>
  );
};

export default Dashboard;
