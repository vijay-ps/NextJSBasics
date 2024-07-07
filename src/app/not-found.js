import Link from "next/link";

const notfoundpage = () => {
  return (
    <div>
      <h1 className="text-5xl text-red-600">404 - Page Does Not Exist</h1>

      <Link href={"/"}>Return To HomePage</Link>
    </div>
  );
};

export default notfoundpage;
