"use client";

import { Button, Typography } from "@mui/material";
import Link from "next/link";
import LinkButton from "@/components/LinkButton";

export default function About() {
  return (
    <div>
      <Typography variant="h4"> About Page</Typography>
      <Link href="/dashboard" passHref>
        <Button variant="outlined">Go to Dashboard</Button>
      </Link>

      <LinkButton href="/">Go to Home By LinkButton</LinkButton>
    </div>
  );
}
