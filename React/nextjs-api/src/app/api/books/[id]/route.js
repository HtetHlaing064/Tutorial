import { NextResponse } from "next/server";
import * as yup from "yup";

const schema = yup.object().shape({
  title: yup.string().required("Title is required"),
  author: yup.string().required("fatherName is required"),
  year: yup.string().required("Year is required"),
});

export async function PUT(req, { params }) {
  try {
    const bookId = params.id;
    const body = await req.json();
    await schema.validate(body, { abortEarly: false });
    return NextResponse.json({
      message: "Student is successfully update",
      bookId,
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

export async function DELETE(req, { params }) {
  const bookId = params.id; //Get URL params field
  
  return NextResponse.json({
    meassage: "Book is successfully deleted",
    bookId,
    
  });
}

export async function GET(req, { params }) {
  const bookId = params.id;
  const book = {
    id: bookId,
    title: "Wuthering Heights",
    author: "Emily Brontë ",
    gender: "Male",
    year: 1847,
  };
  return NextResponse.json(book);
}
