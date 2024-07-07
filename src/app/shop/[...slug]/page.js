const Page = ({params}) => {
    // for creating multiple Dynamic Routes
    // create folder with [..slug] and then create page

    // whenever there is slug there will be a prop
    // for parameter in the url

  return (
    <div>
        My Post : {params.slug[0]} / {params.slug[1]}
    </div>
  )
}

export default Page