import { NextResponse } from "next/server";
import * as yup from "yup";

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
  year: yup.string().required("Year is required"),
});

export async function GET() {
  return NextResponse.json({ BookData });
}

export async function POST(req) {
  try {
    const body = await req.json();
    await schema.validate(body, { abortEarly: false });
    return NextResponse.json({
      message: "Book is successfully createed",
      bodyData: body,
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
