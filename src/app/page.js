import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello World</h1>
      {/* Link Tag to load components without reloading the
      page */}
      <div>
        <Link href="/account" className="underline block">
          Account
        </Link>
        <Link href="/dashboard" className="underline block">
          Dashboard
        </Link>
        <Link href="/dashboard/settings" className="underline block">
          Settings
        </Link>
      </div>
    </main>
  );
}
