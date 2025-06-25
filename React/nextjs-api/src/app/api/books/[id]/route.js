import { NextResponse } from "next/server";
import * as yup from "yup";
import { prisma } from "@/lib/prisma";

const schema = yup.object().shape({
  title: yup.string().required("Title is required"),
  author: yup.string().required("Author is required"),
  published_year: yup.number().required("Year is required"),
});
//Book Update API
export async function PUT(req, { params }) {
  try {
    const bookId =parseInt(params.id) ;
    const body = await req.json();
    const validatedData = await schema.validate(body, {
      abortEarly: false,
      stripUnknown: true,
    });
    const books = await prisma.book.update({
      where: { id: bookId },
      data: validatedData,
    });

    return NextResponse.json({
      message: "Book is successfully update",
      bookId,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      return NextResponse.json({
        message: "Validation Failed",
        errors: error.inner.map((e) => ({
          path: e.path,
          message: e.message,
        })),
      });
    }

    return NextResponse.json(
      {
        message: "Unexpected Error",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
//Book Delete API
export async function DELETE(req, { params }) {
  try{
    const bookId = parseInt(params.id); //Get URL params field
  await prisma.book.delete({
      where: { id: bookId },
    });
  return NextResponse.json({
    meassage: "Book is successfully deleted",
    bookId,
  });
  }catch (error) {
    return NextResponse.json(
      {
        message: "Book not found or Student detail is fail",
      },
      {
        status: 404,
      }
    );
  }
}
//Book Detail API
export async function GET(req, { params }) {
  const bookId = parseInt(params.id);
  const book = await prisma.book.findUnique({
    where: {
      id: bookId,
    },
  });
  return NextResponse.json(book);
}
