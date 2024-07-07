"use client";

import { usePathname, useSearchParams } from "next/navigation";
// all these in client components
const Cart = () => {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  return (
    <div>
      <h1>
        Product
        {searchParams.get("search")}
        <br></br>
        Query 
        {searchParams.get('q')}
      </h1>
    </div>
  );
};

export default Cart;
