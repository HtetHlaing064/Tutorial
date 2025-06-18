import { NextResponse } from "next/server";

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
  return NextResponse.json({ StudentData });
}

export async function POST(req) {
  const body = await req.json();
  console.log(body);
  return NextResponse.json({
    message: "Student is successfully createed",
    bodyData: body,
  });
}
