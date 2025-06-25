import { NextResponse } from "next/server";
import * as yup from "yup";

import { prisma } from "@/lib/prisma";

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

// Update API
export async function PUT(req, { params }) {
  try {
    const studentId = parseInt(params.id);
    const body = await req.json();
    const validatedData = await schema.validate(body, {
      abortEarly: false,
      stripUnknown: true,
    });
    const students = await prisma.student.update({
      where: {
        id: studentId,
      },
      data: validatedData,
    });
    return NextResponse.json({
      message: "Student is successfully update",
      studentId,
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
// Delete API
export async function DELETE(req, { params }) {
  try {
    const studentId = parseInt(params.id); //Get URL params field
    await prisma.student.delete({
      where: { id: studentId },
    });
    return NextResponse.json({
      meassage: "Student is successfully Deleted",
      studentId,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Student not found or Student detail is fail",
      },
      {
        status: 404,
      }
    );
  }
}

//Get student Detail API
export async function GET(req, { params }) {
  const studentId = parseInt(params.id);
  //Find student in database
  const student = await prisma.student.findUnique({
    where: {
      id: studentId,
    },
  });

  return NextResponse.json(student);
}
