import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  const studentId = params.id;
  const body = await req.json();
  return NextResponse.json({
    meassage: "Student is successfully updated",
    studentId,
    bodyData: body,
  });
}

export async function DELETE(req, { params }) {
  const studentId = params.id; //Get URL params field
  const body = await req.json();
  return NextResponse.json({
    meassage: "Student is successfully Deleted",
    studentId,
    bodyData: body,
  });
}

export async function GET(req,{params}) {
  const studentId = params.id;
  const student = {
    id:studentId,
    name: "Su Su",
    age: 18,
    gender: "female",
    fatherName: "U Thant",
    address: "Hlaing",
    major: "Computer science",
  };
  return NextResponse.json(
    student
  );
}
