"use client"

import { useRouter } from "next/navigation";

const Settings = () => {
  const router = useRouter();

  const handleBack = () => {
    router.push("/dashboard");
  };
// we are using useRouter which can only be used in client to fix
// this we are using use client
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button
        className="bg-blue-500 rounded py-2 px-4 text-white font-bold"
        onClick={() => handleBack()}
      >
        Back
      </button>
      <h1>Settings Page</h1>
    </main>
  );
};

export default Settings;
