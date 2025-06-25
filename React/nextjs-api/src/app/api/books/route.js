import { NextResponse } from "next/server";
import * as yup from "yup";
import { prisma } from "@/lib/prisma";

const BookData = [
  {
    id: 1,
    title: "Wuthering Heights",
    author: "Emily Brontë ",
    year: 1847,
  },

  {
    id: 2,
    title: "Moby-Dick",
    author: "Herman Melville",
    year: 1851,
  },

  {
    id: 3,
    title: "The Red and the Black",
    author: "Stendhal",
    year: 1830,
  },
];

const schema = yup.object().shape({
  title: yup.string().required("Title is required"),
  author: yup.string().required("Author is required"),
  published_year: yup.number().required("Year is required"),
});

//Book List
export async function GET() {
  const books = await prisma.book.findMany();
  return NextResponse.json({ books });
}
//Book Create API
export async function POST(req) {
  try {
    const body = await req.json();
    const validatedData=await schema.validate(body, { abortEarly: false });
    const books= await prisma.book.create({
      data:validatedData
    })
    return NextResponse.json({
      message: "Book is successfully createed",
      book:books
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
