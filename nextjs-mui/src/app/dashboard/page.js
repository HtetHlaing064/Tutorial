"use client";

import { Button, Typography } from "@mui/material";
import Link from "next/link";
import LinkButton from "@/components/LinkButton";

export default function Dashboard() {
  return (
    <div>
      <Typography variant="h4"> Dashboard Page</Typography>
      <Link href="/about" passHref>
        <Button variant="outlined">Go to About</Button>
      </Link>

      <LinkButton href="/">Go to Home By LinkButton</LinkButton>
    </div>
  );
}
