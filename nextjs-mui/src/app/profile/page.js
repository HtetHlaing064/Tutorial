"use client"

import { Button,Typography } from "@mui/material"
import Link from "next/link"

export default function Profile(){
    return(
        <div>
            <Typography varient="h4">Profile Pages</Typography>
            <Link href="/setting" passHref>
            <Button variant="outlined">Go to Setting</Button>
            </Link>
            
        </div>
    );
}