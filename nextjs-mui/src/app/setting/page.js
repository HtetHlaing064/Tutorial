"use client"

import LinkButton from "@/components/LinkButton"
import { Button,Typography } from "@mui/material"
import Link from "next/link"


export default function Setting(){
    return(
        <div>
            <Typography varient="h4">Setting Pages</Typography>
            <Link href="/profile" passHref>
            <Button variant="outlined">Go to Profile</Button>
            </Link>
            <Link href="/" passHref>
            <Button variant="outlined">Go to Home</Button>
            </Link>
            <LinkButton href="/">
            Go to Profile By LinkButton
            </LinkButton>

        </div>
    )
}