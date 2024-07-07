const Page = ({params,searchParams}) => {
    // for creating Dynamic Routes
    // create folder with [slug] and then create page

    // whenever there is slug there will be a prop
    // for parameter in the url
  const x = "vijay"
  console.log(searchParams)
  return (
    <div>
        My Post : {params.slug}
        <br></br>
        Search {searchParams.search}
    </div>
  )
}

export default Page