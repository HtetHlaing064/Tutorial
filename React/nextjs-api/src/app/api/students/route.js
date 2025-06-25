import { NextResponse } from "next/server";
import { cache } from "react";
import * as yup from "yup";
import { prisma } from "@/lib/prisma";

const StudentData = [
  {
    id: 1,
    name: "Su Su",
    age: 17,
    address: "Hlaing",
    major: "Computer Science",
  },

  {
    id: 2,
    name: "Mg Mg",
    age: 18,
    address: "Insein",
    major: "English",
  },

  {
    id: 3,
    name: "Kyaw Kyaw",
    age: 18,
    address: "Hlaing",
    major: "Myanmar",
  },
];

export async function GET() {
  const students = await prisma.student.findMany();
  return NextResponse.json({ students });
}

//Validation schema
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  father_name: yup.string().required("fatherName is required"),
  gender: yup
    .string()
    .required("Gender is required")
    .oneOf(["male", "female"], "invalid gender"),
  age: yup.number().required("Age is required"),
  dob: yup.date().required("DOB is required"),
  phone: yup.string().required("Phone is required"),
  address: yup.string().required("Address is required"),
  major: yup.string().required("Major is required"),
});

//Create student API
export async function POST(req) {
  try {
    const body = await req.json();
    const validatedData = await schema.validate(body, { abortEarly: false });
    const students= await prisma.student.create({
      data:validatedData
    });
    return NextResponse.json({
      message: "Student is successfully createed",
      student:students

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
