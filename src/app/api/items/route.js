// route handling
// for accessing api/items
export async function GET(req) {

  const type = req.nextUrl.searchParams.get('type')  
  console.log(type)  

  return Response.json([
    { title: "Redmi Mobile" },
    { title: "Samsung Mobile" },
  ]);
}
// always use get for handle all get
export async function POST(req) {
    const body = await req.json()
    console.log(body)
    return Response.json({message:"Post Uploaded Success!!"});
  }

// use for all post

// handle req