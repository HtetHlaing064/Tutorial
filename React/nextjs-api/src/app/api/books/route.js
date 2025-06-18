import { NextResponse } from "next/server";

const BookData =[
    {   
        id:1,
        title:"Wuthering Heights",
        author:"Emily Brontë ",
        year:1847

    },

     {   
        id:2,
        title:"Moby-Dick",
        author:"Herman Melville",
        year:1851

    },

     {   
        id:3,
        title:"The Red and the Black",
        author:"Stendhal",
        year:1830

    },


   
]

export async function GET() {
  return NextResponse.json({ BookData});
}

export async function POST(req) {
  const body = await req.json();
  console.log(body);
  return NextResponse.json({
    message: "Book is successfully createed",
    bodyData: body,
  });
}
