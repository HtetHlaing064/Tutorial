"use client"

import { Box,Typography } from "@mui/material"
import { useParams } from "next/navigation";
//Dynamic Route Page

export default function BlogDetail(){
    const params=useParams();
    const blogId=params.id;
    console.log('Blog ID:',params.id);
    return(
    <Box>
        <Typography >Blog: {blogId}</Typography>
    </Box>
    );
}