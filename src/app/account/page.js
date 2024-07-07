import { redirect } from "next/navigation"

const Account = () => {

  const userInfo = null
  
  if (userInfo === null) redirect("/cart?search=product1&q=Vijay")

  return (
    <div>Account Page</div>
  )
}

export default Account