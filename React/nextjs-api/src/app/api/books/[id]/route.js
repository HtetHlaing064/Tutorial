import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  const bookId = params.id;
  const body = await req.json();
  return NextResponse.json({
    meassage: "Book is successfully updated",
    bookId,
    bodyData: body,
  });
}

export async function DELETE(req, { params }) {
  const bookId = params.id; //Get URL params field
  const body = await req.json();
  return NextResponse.json({
    meassage: "Book is successfully deleted",
    bookId,
    bodyData: body,
  });
}

export async function GET(req,{params}) {
  const bookId = params.id;
  const book = {
    id:bookId,
    title:"Wuthering Heights",
    author:"Emily Brontë ",
    gender:"Male",
    year:1847
  };
  return NextResponse.json(
    book
  );
}
